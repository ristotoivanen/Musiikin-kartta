const beat = 60 / 72;
const e2 = [6, 40];
const triad = [[6, 43], [5, 47], [4, 50]];
const gVoicing = [...triad, [3, 55], [2, 59], [1, 67]];

function note([string, midi], at, releaseAt, fade = 0.15) {
    return { string, midi, at, releaseAt, fade };
}

export const scores = {
    e2: Array.from({ length: 4 }, (_, i) => note(e2, i * beat, (i + 1) * beat)),
    separate: triad.map((pitch, i) => note(pitch, i * 1.18, i * 1.18 + 0.90)),
    triad: triad.map(pitch => note(pitch, 0, 2.95)),
    strum: gVoicing.map((pitch, i) => note(pitch, i * 0.045, 3.45 + i * 0.045)),
    melody: [[6, 43], [5, 45], [5, 47], [4, 50], [3, 55], [2, 59]].map((pitch, i) => {
        const times = [0, 0.48, 0.96, 1.44, 2.65, 3.45];
        const lengths = [0.24, 0.24, 0.24, 0.65, 0.42, 0.85];
        return note(pitch, times[i], times[i] + lengths[i]);
    }),
};
