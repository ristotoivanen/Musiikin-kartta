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

export type Relation = 'alempi' | 'sama' | 'ylempi';
export interface UnisonRound { readonly from: Position; readonly to: StringId }
export interface OctaveRound {
  readonly ref: Position;
  readonly relation: Relation;
  readonly places: readonly { readonly key: Relation; readonly position: Position }[];
  readonly answer: number;
}
export type RootRound =
  | { readonly type: 'etsi'; readonly note: string; readonly string: StringId }
  | { readonly type: 'nimea'; readonly at: Position };
export type FindLevel = 'ea' | 'kaikki' | 'kromaattinen';

export const NOTE_NAMES: readonly string[];
export const NATURALS: readonly string[];
export const ACCIDENTALS: readonly string[];
export const MAX_FRET: number;
export const STRINGS: readonly GuitarString[];
export const ALL_POSITIONS: readonly FretPosition[];
export const UNISON_EXAMPLE: UnisonRound;
export const OCTAVE_RELATIONS: Readonly<Record<Relation, number>>;
export const RELATION_LABELS: Readonly<Record<Relation, string>>;
export const ROOT_STRINGS: readonly StringId[];
export const LANDMARKS: readonly number[];
export const CHROMATIC_FROM: number;
export const FIND_LEVELS: Readonly<Record<FindLevel, { readonly label: string; readonly strings: readonly StringId[]; readonly notes: readonly string[] }>>;

export function createRandom(seed?: number): () => number;
export function pick<T>(rand: () => number, list: readonly T[]): T;
export function shuffle<T>(rand: () => number, list: readonly T[]): T[];
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
export function positionsOfPitch(midi: number, strings?: readonly StringId[]): FretPosition[];
export function relationWords(diff: number): string;
export function shapeWords(from: Position, to: Position): string;

export function unisonCandidates(): UnisonRound[];
export function unisonAnswer(round: UnisonRound): FretPosition;
export function crossesGB(round: UnisonRound): boolean;
export function generateUnisonRound(rand: () => number, history?: readonly UnisonRound[]): UnisonRound;
export function unisonPrompt(round: UnisonRound, example?: boolean): string;
export function unisonHint(round: UnisonRound): string;
export function checkUnison(round: UnisonRound, string: StringId, fret: number): CheckResult;

export function octaveReferences(): FretPosition[];
export function generateOctaveRound(rand: () => number, history?: readonly OctaveRound[]): OctaveRound;
export function mysteryPitch(round: OctaveRound): number;
export function checkOctaveRelation(round: OctaveRound, relation: string): CheckResult;
export function checkOctavePlace(round: OctaveRound, index: number): CheckResult;

export function landmarkList(string: StringId): string;
export function nearestLandmark(fret: number): number;
export function landmarkReason(string: StringId, fret: number): string;
export function generateRootRound(rand: () => number, index?: number, history?: readonly RootRound[]): RootRound;
export function rootAnswer(round: RootRound): string | number[];
export function rootPrompt(round: RootRound): string;
export function rootHint(round: RootRound): string;
export function checkRootName(round: RootRound, name: string): CheckResult;
export function checkRootFind(round: RootRound, string: StringId, fret: number): CheckResult;

export function generateFindTarget(rand: () => number, level: string, history?: readonly string[]): string;
export function findPositions(target: string, level: string): FretPosition[];
export function octaveGroups(positions: Iterable<FretPosition>): Map<string, FretPosition[]>;
export function groupSummary(positions: Iterable<FretPosition>): string;
export function checkFindAll(target: string, found: ReadonlySet<string> | ReadonlyMap<string, unknown>, string: StringId, fret: number, level?: string): CheckResult;
export function findHint(target: string, found: ReadonlySet<string> | ReadonlyMap<string, unknown>, level: string, step: number): { message: string; mark: Position | null };

export function stopSound(): void;
export function playNotes(notes: readonly { midi: number; at?: number }[], onEnd?: () => void): Promise<boolean>;
export function setupExercise(root: HTMLElement): void;
