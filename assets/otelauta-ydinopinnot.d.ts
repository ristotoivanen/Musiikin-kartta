// Tyypit tiedostolle assets/otelauta-ydinopinnot.js (Otelaudan Ydinopinnot, #116 vaihe 3).
export type StringId = 'E' | 'A' | 'D' | 'G' | 'B' | 'e' | string;
export type Position = readonly [StringId, number];

export interface GuitarString {
  readonly id: StringId;
  readonly label: string;
  readonly name: string;
  readonly genitive: string;
  readonly from: string;
  readonly open: number;
}

export interface FretPosition {
  string: StringId;
  fret: number;
  midi: number;
}

export interface CheckResult {
  ok: boolean;
  kind: string;
  message: string;
}

export interface UnisonRound { readonly from: Position; readonly to: StringId }
export interface OctaveRound { readonly ref: Position; readonly places: readonly Position[]; readonly answer: number }
export type RootRound =
  | { readonly type: 'etsi'; readonly note: string; readonly string: StringId }
  | { readonly type: 'nimea'; readonly at: Position };

export const NOTE_NAMES: readonly string[];
export const NATURALS: readonly string[];
export const MAX_FRET: number;
export const STRINGS: readonly GuitarString[];
export const UNISON_ROUNDS: readonly UnisonRound[];
export const OCTAVE_ROUNDS: readonly OctaveRound[];
export const ROOT_STRINGS: readonly StringId[];
export const LANDMARKS: readonly number[];
export const ROOT_ROUNDS: readonly RootRound[];
export const FIND_ALL_TARGETS: readonly string[];

export function stringInfo(id: StringId): GuitarString & { index: number };
export function pitchAt(string: StringId, fret: number): number;
export function noteName(midi: number): string;
export function pitchName(midi: number): string;
export function frequency(midi: number): number;
export function shortPosition(string: StringId, fret: number): string;
export function longPosition(string: StringId, fret: number): string;
export function countWords(count: number, one: string, many: string): string;
export function amountWords(count: number, oneGenitive: string, many: string): string;
export function positionsOf(name: string, strings?: readonly StringId[]): FretPosition[];
export function relationWords(diff: number): string;

export function unisonAnswer(round: UnisonRound): FretPosition;
export function unisonRule(round: UnisonRound): string;
export function unisonPrompt(round: UnisonRound): string;
export function checkUnison(round: UnisonRound, string: StringId, fret: number): CheckResult;

export function octavePrompt(round: OctaveRound): string;
export function placeRelation(round: OctaveRound, index: number): string;
export function checkOctave(round: OctaveRound, choice: number): CheckResult;

export function landmarkList(string: StringId): string;
export function rootAnswer(round: RootRound): string | number[];
export function rootPrompt(round: RootRound): string;
export function landmarkHint(string: StringId, fret: number, subject?: string): string;
export function rootHint(round: RootRound): string;
export function checkRootName(round: RootRound, name: string): CheckResult;
export function checkRootFind(round: RootRound, string: StringId, fret: number): CheckResult;

export function octaveGroups(positions: Iterable<FretPosition>): Map<string, FretPosition[]>;
export function groupSummary(positions: Iterable<FretPosition>): string;
export function checkFindAll(target: string, found: ReadonlySet<string> | ReadonlyMap<string, unknown>, string: StringId, fret: number): CheckResult;

export function stopSound(): void;
export function playNotes(notes: readonly { midi: number; at?: number }[], onEnd?: () => void): Promise<boolean>;
export function setupExercise(root: HTMLElement): void;
