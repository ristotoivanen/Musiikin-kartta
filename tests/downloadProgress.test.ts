import { describe, expect, it } from 'vitest';
import { DONE_VISIBLE_MS, downloadPercent, DownloadProgressTracker } from '../harjoittelija/downloadProgress';

const status = (received: number, total: number | null, complete = false) => ({ received, total, complete });

describe('D2: latauksen etenemisen näyttö', () => {
  it('prosentti tulee todellisista tavuista, pyöristetään alas eikä ole 100 ennen kuin kaikki on ladattu', () => {
    expect(downloadPercent(status(0, 1000))).toBe(0);
    expect(downloadPercent(status(374, 1000))).toBe(37);
    expect(downloadPercent(status(999, 1000))).toBe(99);
    expect(downloadPercent(status(1000, 1000))).toBe(99);
    expect(downloadPercent(status(1000, 1000, true))).toBe(100);
    expect(downloadPercent(status(500, null))).toBeNull();
  });

  it('näyttää "Ladattu XX %" latauksen ja soiton aikana ja ilmoittaa ruudunlukijalle vain alun', () => {
    const t = new DownloadProgressTracker();
    const first = t.update(status(150, 1000), 'ladataan', 0);
    expect(first).toMatchObject({ visible: true, text: 'Ladattu 15 %', percent: 15, announce: 'Kappaleen lataus jatkuu taustalla.' });
    expect(t.update(status(420, 1000), 'valmis', 300)).toMatchObject({ visible: true, text: 'Ladattu 42 %', percent: 42, announce: '' });
  });

  it('valmistuminen: "Ladattu 100 %" lyhyesti ja ilmoitus, sitten piiloon', () => {
    const t = new DownloadProgressTracker();
    t.update(status(900, 1000), 'valmis', 0);
    expect(t.update(status(1000, 1000, true), 'valmis', 1000)).toMatchObject({ visible: true, text: 'Ladattu 100 %', percent: 100, announce: 'Kappale ladattu.' });
    expect(t.update(status(1000, 1000, true), 'valmis', 1000 + DONE_VISIBLE_MS - 1)).toMatchObject({ visible: true, percent: 100, announce: '' });
    expect(t.update(status(1000, 1000, true), 'valmis', 1000 + DONE_VISIBLE_MS)).toMatchObject({ visible: false });
  });

  it('välimuistista valmiina tullut kappale ei välähdä', () => {
    const t = new DownloadProgressTracker();
    expect(t.update(status(1000, 1000, true), 'valmis', 0).visible).toBe(false);
  });

  it('tuntematon koko: ei prosenttia eikä palkkia; latausvaiheessa soittimen oma rivi riittää', () => {
    const t = new DownloadProgressTracker();
    expect(t.update(status(0, null), 'ladataan', 0).visible).toBe(false);
    expect(t.update(status(5000, null), 'valmis', 100)).toMatchObject({ visible: true, text: 'Ladataan kappaletta…', percent: null });
  });

  it('versionvaihto, peruutus ja virhe piilottavat näytön ja nollaavat seurannan', () => {
    const t = new DownloadProgressTracker();
    t.update(status(300, 1000), 'valmis', 0);
    expect(t.update(status(0, null), 'tyhja', 100).visible).toBe(false);
    expect(t.update(status(50, 1200), 'ladataan', 200)).toMatchObject({ text: 'Ladattu 4 %', announce: 'Kappaleen lataus jatkuu taustalla.' });
    expect(t.update(status(60, 1200), 'virhe', 300).visible).toBe(false);
    expect(t.update(null, 'valmis', 400).visible).toBe(false);
    // Uusi lataus valmistuu suoraan: ei vanhan latauksen "100 %" -välähdystä.
    expect(t.update(status(1200, 1200, true), 'valmis', 500).visible).toBe(false);
  });
});
