import { Color3, Vector3 } from '@babylonjs/core';

const XilofoneRoundControls = () => {
  return (<>
    <cylinder name="XilofoneMainBoardRoundControl1" height={1} diameter={4} position={new Vector3(17, 2, 22)} scaling={new Vector3(.8, 1, .8)}>
      <standardMaterial name="XilofoneMainBoardRoundControl1-mat" diffuseColor={Color3.FromHexString('#FFFFFF')} specularColor={Color3.FromHexString('#000000')} />
    </cylinder>

    <cylinder name="XilofoneMainBoardRoundControl2" height={1} diameter={4} position={new Vector3(17, 2, 27)} scaling={new Vector3(.8, 1, .8)}>
      <standardMaterial name="XilofoneMainBoardRoundControl2-mat" diffuseColor={Color3.FromHexString('#FFFFFF')} specularColor={Color3.FromHexString('#000000')} />
    </cylinder>

    <cylinder name="XilofoneMainBoardRoundControl3" height={1} diameter={4} position={new Vector3(17, 2, 32)} scaling={new Vector3(.8, 1, .8)}>
      <standardMaterial name="XilofoneMainBoardRoundControl3-mat" diffuseColor={Color3.FromHexString('#FFFFFF')} specularColor={Color3.FromHexString('#000000')} />
    </cylinder>

    <cylinder name="XilofoneMainBoardRoundControl4" height={1} diameter={4} position={new Vector3(17, 2, 37)} scaling={new Vector3(.8, 1, .8)}>
      <standardMaterial name="XilofoneMainBoardRoundControl4-mat" diffuseColor={Color3.FromHexString('#FFFFFF')} specularColor={Color3.FromHexString('#000000')} />
    </cylinder>
  </>);
};

export default XilofoneRoundControls;
