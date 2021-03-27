import { UseToneStore } from './models';
import { GetState } from 'zustand';

export function getPlayNoteStoreFunction(get: GetState<UseToneStore>): UseToneStore['playNote'] {
  return (note: string, time?: number) => {
    const store = get();

    try {
      store.tone.triggerAttackRelease(note, '8n', time);
    } catch (e) {
      console.warn(e);
    }

    store.onNotePlayed.next(note);
  };
}
