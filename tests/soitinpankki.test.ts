import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { expect, test } from 'vitest';

const root = new URL('../testit/soitinpankki/', import.meta.url);
const manifest = JSON.parse(readFileSync(new URL('manifest.json', root), 'utf8'));

test('manifesti kattaa kaikki 24 valittua näytettä ja 48 paikallista tiedostoa', () => {
    expect(Object.keys(manifest.banks)).toEqual(['steel', 'nylon', 'electric']);
    const files = [];
    for (const [id, bank] of Object.entries<typeof manifest.banks.steel>(manifest.banks)) {
        expect(bank.origin.license).toBe('CC0-1.0');
        expect(bank.origin.version).toBeTruthy();
        expect(bank.origin.publisher).toBeTruthy();
        expect(bank.origin.licenseUrl).toMatch(/^https:/);
        expect(bank.samples.map((sample: { midi: number }) => sample.midi))
            .toEqual([40, 43, 45, 47, 50, 55, 59, 67]);
        for (const sample of bank.samples) {
            expect(sample.sha256).toMatch(/^[0-9a-f]{64}$/);
            expect(id === 'electric' ? sample.url : bank.origin.archive).toMatch(/^https:/);
            expect(sample.playbackSemitones).toBe(sample.midi - sample.originalMidi);
            expect(Object.keys(sample.files)).toEqual(['ogg', 'm4a']);
            for (const [extension, file] of Object.entries<{ path: string; bytes: number; sha256: string; onsetMs: number }>(sample.files)) {
                expect(file.path).toBe(`audio/${id}-${sample.string}-${sample.midi}.${extension}`);
                const data = readFileSync(new URL(file.path, root));
                expect(data.length).toBe(file.bytes);
                expect(createHash('sha256').update(data).digest('hex')).toBe(file.sha256);
                expect(file.onsetMs).toBeGreaterThanOrEqual(0);
                expect(file.onsetMs).toBeLessThan(80);
                files.push(file.path);
            }
        }
    }
    expect(readdirSync(new URL('audio/', root)).map(file => `audio/${file}`).sort()).toEqual(files.sort());
});
