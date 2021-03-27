import { ReactElement } from 'react';
import { Color3, Vector3 } from '@babylonjs/core';

function XilofoneFrame(): ReactElement {
  return (<>
    <box name="XilofoneMainBoardFrame" size={1} position={new Vector3(12.5, 0, 21)} scaling={new Vector3(15, 3, 50)}>
      <standardMaterial name="XilofoneKeyboardFrame-mat" diffuseColor={Color3.FromHexString('#2f2f2f')} specularColor={Color3.FromHexString('#000000')} />
    </box>
    <box name="XilofoneKeyboardFrame" size={1} position={new Vector3(1, -1, 21)} scaling={new Vector3(12, 1, 50)}>
      <standardMaterial name="XilofoneKeyboardFrame-mat" diffuseColor={Color3.FromHexString('#2f2f2f')} specularColor={Color3.FromHexString('#000000')} />
    </box>
  </>);
}

export default XilofoneFrame;
