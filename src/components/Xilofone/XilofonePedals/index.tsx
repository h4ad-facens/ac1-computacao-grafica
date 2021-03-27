import { Color3, Vector3 } from '@babylonjs/core';
import { useRef } from 'react';
import { Mesh as BabylonjsCoreMesh } from '@babylonjs/core/Meshes/mesh';
import { useClick } from 'react-babylonjs';
import { musicOne, musicTwo, playSequence } from './musics';
import useToneStore from '../../../stores/useTone';

const XilofonePedals = () => {
  const pedalOneRef = useRef<BabylonjsCoreMesh>(null);
  const pedalTwoRef = useRef<BabylonjsCoreMesh>(null);
  const playNote = useToneStore(state => state.playNote);

  useClick(
    () => {
      playSequence(playNote, musicOne);
    },
    pedalOneRef,
  );

  useClick(
    () => {
      playSequence(playNote, musicTwo);
    },
    pedalTwoRef,
  );

  return (<>
    <box name="XilofoneMainBoardPedal1" ref={pedalOneRef} size={1} position={new Vector3(9, 2, 1.5)} scaling={new Vector3(5, 1, 5)}>
      <standardMaterial name="XilofoneMainBoardPedal1-mat" diffuseColor={Color3.FromHexString('#ff5353')} specularColor={Color3.FromHexString('#ff5353')} />
    </box>

    <box name="XilofoneMainBoardPedal2" ref={pedalTwoRef} size={1} position={new Vector3(9, 2, 8.5)} scaling={new Vector3(5, 1, 5)}>
      <standardMaterial name="XilofoneMainBoardPedal2-mat" diffuseColor={Color3.FromHexString('#4288f1')} specularColor={Color3.FromHexString('#4288f1')} />
    </box>

    <box name="XilofoneMainBoardPedal3" size={1} position={new Vector3(9, 2, 15.5)} scaling={new Vector3(5, 1, 5)}>
      <standardMaterial name="XilofoneMainBoardPedal3-mat" diffuseColor={Color3.FromHexString('#FFFFFF')} specularColor={Color3.FromHexString('#000000')} />
    </box>

    <box name="XilofoneMainBoardPedal4" size={1} position={new Vector3(16, 2, 1.5)} scaling={new Vector3(5, 1, 5)}>
      <standardMaterial name="XilofoneMainBoardPedal4-mat" diffuseColor={Color3.FromHexString('#FFFFFF')} specularColor={Color3.FromHexString('#000000')} />
    </box>

    <box name="XilofoneMainBoardPedal5" size={1} position={new Vector3(16, 2, 8.5)} scaling={new Vector3(5, 1, 5)}>
      <standardMaterial name="XilofoneMainBoardPedal5-mat" diffuseColor={Color3.FromHexString('#FFFFFF')} specularColor={Color3.FromHexString('#000000')} />
    </box>

    <box name="XilofoneMainBoardPedal6" size={1} position={new Vector3(16, 2, 15.5)} scaling={new Vector3(5, 1, 5)}>
      <standardMaterial name="XilofoneMainBoardPedal6-mat" diffuseColor={Color3.FromHexString('#FFFFFF')} specularColor={Color3.FromHexString('#000000')} />
    </box>
  </>);
};

export default XilofonePedals;
