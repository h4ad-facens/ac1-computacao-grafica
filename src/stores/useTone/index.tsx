import create from 'zustand';
import { UseToneStore } from './models';
import { Synth } from 'tone';
import { getPlayNoteStoreFunction } from './services';
import { BehaviourSubject } from './behaviour-subject';

const useToneStore = create<UseToneStore>((set, get) => ({
  tone: new Synth().toDestination(),
  playNote: getPlayNoteStoreFunction(get),
  onNotePlayed: new BehaviourSubject<string>(),
}));

export default useToneStore;
