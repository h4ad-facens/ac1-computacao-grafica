import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';

import { Color3, Vector3 } from '@babylonjs/core';
import { Mesh as BabylonjsCoreMesh } from '@babylonjs/core/Meshes/mesh';
import { useClick } from 'react-babylonjs';
import { Note } from 'tone/build/esm/core/type/NoteUnits';

import useToneStore from '../../../stores/useTone';
import { BehaviorDisposeFunction } from '../../../stores/useTone/behaviour-subject';

export type XilofoneKeyProps = {
  name: string;
  position: Vector3;
  pressedPosition: Vector3;
  color: string;
  scaling: Vector3;
  note: Note;
}

function XilofoneKey({ name, position, color, scaling, note, pressedPosition }: XilofoneKeyProps): ReactElement {
  const playNote = useToneStore(state => state.playNote);
  const onNotePlayed = useToneStore(state => state.onNotePlayed);

  const onPlayingTimeoutId = useRef<number>();

  const [isPlaying, setIsPlaying] = useState<boolean>();

  const onNotePlayedCallback = useCallback((playedNote: string) => {
    if (playedNote !== note)
      return;

    setIsPlaying(true);

    clearTimeout(onPlayingTimeoutId.current);

    onPlayingTimeoutId.current = setTimeout(() => {
      setIsPlaying(false);
    }, 500) as unknown as number;
  }, [note, setIsPlaying]);

  const onNotePlayedSubscription = useRef<BehaviorDisposeFunction>();

  useEffect(() => {
    onNotePlayedSubscription.current = onNotePlayed.subscribe(onNotePlayedCallback);

    return () => onNotePlayedSubscription.current && onNotePlayedSubscription.current();
  }, [onNotePlayed, onNotePlayedCallback]);

  useEffect(() => {
    return () => clearTimeout(onPlayingTimeoutId.current as unknown as number);
  }, []);

  const boxRef = useRef<BabylonjsCoreMesh>(null);

  useClick(
    () => {
      playNote(note);
    },
    boxRef,
  );

  return (
    <box name={name} ref={boxRef} size={1} position={isPlaying ? pressedPosition : position} scaling={scaling}>
      <standardMaterial name={`${name}-mat`} diffuseColor={Color3.FromHexString(color)} specularColor={Color3.FromHexString(color)} />
    </box>
  );
}

export default XilofoneKey;
