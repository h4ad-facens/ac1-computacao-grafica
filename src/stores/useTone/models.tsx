import { Synth } from 'tone';
import { BehaviourSubject } from './behaviour-subject';
import { State } from 'zustand/vanilla';

export interface UseToneStore extends State {
  tone: Synth;
  playNote: (note: string) => void;
  onNotePlayed: BehaviourSubject<string>;
}
