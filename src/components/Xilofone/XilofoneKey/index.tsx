import { ReactElement, useRef } from 'react';

import { Color3, Vector3 } from '@babylonjs/core';
import { Mesh as BabylonjsCoreMesh } from '@babylonjs/core/Meshes/mesh';
import { useClick } from 'react-babylonjs';

export type XilofoneKeyProps = {
  name: string;
  position: Vector3;
  color: string;
  scaling: Vector3;
}

function XilofoneKey({ name, position, color, scaling }: XilofoneKeyProps): ReactElement {
  const boxRef = useRef<BabylonjsCoreMesh>(null);

  useClick(
    () => {
      console.log('clicked');
    },
    boxRef,
  );

  return (
    <box name={name} ref={boxRef} size={1} position={position} scaling={scaling}>
      <standardMaterial name={`${name}-mat`} diffuseColor={Color3.FromHexString(color)} specularColor={Color3.FromHexString(color)} />
    </box>
  );
}

export default XilofoneKey;
