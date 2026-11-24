export type Tone = [number, string];
export interface Quality {
  id: string; family: 'triad' | 'sus' | 'seventh'; suffix: string; label: string; title: string; tones: Tone[];
}
export interface ChordInfo {
  root: number; quality: Quality; id: string; name: string; notes: string[]; degrees: string[];
  base: Tone[]; add: Tone[]; pitchClasses: number[];
}
export interface Grip {
  strings: (number | null)[]; label: string; shape: string; base: number; barre: { fret: number; from: number; to: number } | null;
  muteFret: number | null; slot: number; center: number; form?: string;
}
export interface StringGroup { id: string; label: string; strings: number[] }
export interface ChordParams { quality: string; mode: string; group: string; form: 'E' | 'A' | null; number: number | null }

export const QUALITIES: Quality[];
export const FAMILIES: { id: string; label: string }[];
export const STRING_GROUPS: StringGroup[];
export const MODES: { id: string; label: string }[];
export function qualityById(id: string | null): Quality | null;
export function groupById(id: string | null): StringGroup | null;
export function neighbourGroup(id: string, step: number): StringGroup | null;
export function chordInfo(rootPC: number, qualityId: string): ChordInfo;
export function gripCenter(strings: (number | null)[]): number;
export function gripKey(strings: (number | null)[]): string;
export function bassSlot(chord: ChordInfo, strings: (number | null)[]): number;
export function inversionLabel(slot: number): string;
export function soundingPitchClasses(strings: (number | null)[]): number[];
export function fullGrips(rootPC: number, qualityId: string, fretCount: number): Grip[];
export function groupGrips(rootPC: number, qualityId: string, groupId: string, fretCount: number): Grip[];
export function supportsTriads(qualityId: string): boolean;
export function gripsFor(rootPC: number, qualityId: string, mode: string, groupId: string, fretCount: number): Grip[];
export function nearestGrip(grips: Grip[], reference: { center: number } | null): number;
export function matchAfterQualityChange(grips: Grip[], reference: Grip | null): number;
export function formatFrets(strings: (number | null)[]): string;
export function parseChordParams(params: URLSearchParams): ChordParams;
export function writeChordParams(params: URLSearchParams, state: {
  quality: string; mode: string; group: string; grip: { form?: string } | null; number: number | null;
}): void;
