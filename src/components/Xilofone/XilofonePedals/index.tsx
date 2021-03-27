import { Color3, Vector3 } from '@babylonjs/core';

const XilofonePedals = () => {
  return (<>
    <box name="XilofoneMainBoardPedal1" size={1} position={new Vector3(9, 2, 1.5)} scaling={new Vector3(5, 1, 5)}>
      <standardMaterial name="XilofoneMainBoardPedal1-mat" diffuseColor={Color3.FromHexString('#FFFFFF')} specularColor={Color3.FromHexString('#000000')} />
    </box>

    <box name="XilofoneMainBoardPedal2" size={1} position={new Vector3(9, 2, 8.5)} scaling={new Vector3(5, 1, 5)}>
      <standardMaterial name="XilofoneMainBoardPedal2-mat" diffuseColor={Color3.FromHexString('#FFFFFF')} specularColor={Color3.FromHexString('#000000')} />
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
