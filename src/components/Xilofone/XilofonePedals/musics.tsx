import { Note } from 'tone/build/esm/core/type/NoteUnits';

import { delay } from '../../../utils/functions';
import { UseToneStore } from '../../../stores/useTone/models';

export type MusicSequence = { note: Note, delay: number; };

export async function playSequence(playFunction: UseToneStore['playNote'], music: MusicSequence[]): Promise<void> {
  for (const sequence of music) {
    playFunction(sequence.note);

    if (sequence.delay === 0)
      continue;

    await delay(sequence.delay);
  }
}

export const musicOne: MusicSequence[] = [
  { note: 'A1', delay: 100 },
  { note: 'A2', delay: 500 },
  { note: 'A1', delay: 500 },
  { note: 'A2', delay: 500 },
  { note: 'C2', delay: 100 },
  { note: 'C1', delay: 100 },
  { note: 'C3', delay: 500 },
  { note: 'A1', delay: 500 },
  { note: 'D#2', delay: 300 },
  { note: 'D#1', delay: 300 },
  { note: 'A#1', delay: 300 },
  { note: 'A2', delay: 500 },
  { note: 'A1', delay: 500 },
  { note: 'C1', delay: 500 },
  { note: 'C3', delay: 500 },
  { note: 'D3', delay: 500 },
  { note: 'F1', delay: 500 },
  { note: 'F2', delay: 500 },
  { note: 'F3', delay: 500 },
  { note: 'G1', delay: 500 },
  { note: 'D#2', delay: 300 },
  { note: 'D#1', delay: 300 },
  { note: 'A#1', delay: 300 },
];

export const musicTwo: MusicSequence[] = [
  { note: 'A1', delay: 100 },
  { note: 'A2', delay: 300 },
  { note: 'A1', delay: 300 },
  { note: 'A2', delay: 300 },
  { note: 'A1', delay: 300 },
  { note: 'A2', delay: 300 },
  { note: 'A1', delay: 300 },
  { note: 'A2', delay: 300 },
  { note: 'A1', delay: 300 },
  { note: 'A2', delay: 300 },
  { note: 'A1', delay: 300 },
  { note: 'A2', delay: 300 },
  { note: 'B1', delay: 300 },
  { note: 'B2', delay: 300 },
  { note: 'B1', delay: 300 },
  { note: 'B2', delay: 300 },
  { note: 'B1', delay: 300 },
  { note: 'B2', delay: 300 },
  { note: 'B1', delay: 300 },
  { note: 'B2', delay: 300 },
  { note: 'B1', delay: 300 },
  { note: 'B2', delay: 300 },
  { note: 'B1', delay: 300 },
  { note: 'B2', delay: 300 },
];
