import { UseToneStore } from './models';
import { GetState } from 'zustand';

export function getPlayNoteStoreFunction(get: GetState<UseToneStore>): UseToneStore['playNote'] {
  return (note: string) => {
    const store = get();

    store.tone.triggerAttackRelease(note, '8n');
    store.onNotePlayed.next(note);
  };
}
