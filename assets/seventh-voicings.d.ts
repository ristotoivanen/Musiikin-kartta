export interface SeventhVoicing {
  rootString: 6 | 5;
  rootFret: number;
  strings: (number | null)[];
}

export function hasSeventhVoicing(quality: string): boolean;

export function getSeventhVoicings(
  rootPC: number,
  quality: string,
  maxFret: number,
  openPitches: readonly number[],
): SeventhVoicing[];
