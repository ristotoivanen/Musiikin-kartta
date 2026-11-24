type EventTiming = { at: number; duration: number; gain: number };

type GuitarEvent = EventTiming & { sample: string; midi: number };
type BackingEvent = EventTiming & { voice: 'kick' | 'snare' | 'hat' | 'bass'; midi?: number };
type Marker = { at: number; duration: number; value: string | number | number[] };
type Plan = { events: (GuitarEvent | BackingEvent)[]; markers?: Marker[]; duration?: number };

export function guitarNote(string: number, fret: number, at?: number, duration?: number, gain?: number): GuitarEvent;
export function strum(frets: string, at?: number, duration?: number, gain?: number): GuitarEvent[];
export function chordSequence(names: string[], voicings: Record<string, string>): Plan;
export function routePlan(origin: 'C' | 'D'): Plan;
export function intervalPair(string: number, fret: number, together?: boolean, at?: number): GuitarEvent[];
export function intervalPlan(fret: number, together?: boolean): Plan;
export function transferPlan(fret: number): Plan;
export function melodyPlan(fret: number, dVoicing: string): Plan;
export function riffPlan(fret: number): Plan;
export function createPlayer(): {
  play(button: HTMLButtonElement, plan: Plan, highlight?: (index: number, value?: Marker['value']) => void): Promise<void>;
  stop(message?: string): void;
};
