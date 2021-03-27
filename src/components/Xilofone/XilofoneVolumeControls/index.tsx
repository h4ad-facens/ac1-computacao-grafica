import { Color3, Vector3 } from '@babylonjs/core';
import { ReactElement } from 'react';

const XilofoneVolumeControls = (): ReactElement => {
  const defaultSize = new Vector3(7, .5, 2);
  const defaultYPosition = 1.75;

  const defaultProps = {
    diffuseColor: Color3.FromHexString('#FFFFFF'),
    specularColor: Color3.FromHexString('#000000'),
  };

  const defaultSliderSize = new Vector3(1.5, .5, 3);
  const defaultSliderYPosition = 2.25;

  return (<>
    <box name="XilofoneFrameVolumeControl1" size={1} position={new Vector3(9.75, defaultYPosition, 22)} scaling={defaultSize}>
      <standardMaterial name="XilofoneFrameVolumeControl1-mat" {...defaultProps}/>
    </box>

    <box name="XilofoneFrameVolumeControlSlider1" size={1} position={new Vector3(9.75, defaultSliderYPosition, 22)} scaling={defaultSliderSize}>
      <standardMaterial name="XilofoneFrameVolumeControlSlider1-mat" {...defaultProps}/>
    </box>

    <box name="XilofoneFrameVolumeControl2" size={1} position={new Vector3(9.75, defaultYPosition, 26.75)} scaling={defaultSize}>
      <standardMaterial name="XilofoneFrameVolumeControl2-mat" {...defaultProps}/>
    </box>

    <box name="XilofoneFrameVolumeControlSlider2" size={1} position={new Vector3(9.75, defaultSliderYPosition, 26.75)} scaling={defaultSliderSize}>
      <standardMaterial name="XilofoneFrameVolumeControlSlider2-mat" {...defaultProps}/>
    </box>

    <box name="XilofoneFrameVolumeControl3" size={1} position={new Vector3(9.75, defaultYPosition, 31.75)} scaling={defaultSize}>
      <standardMaterial name="XilofoneFrameVolumeControl3-mat" {...defaultProps}/>
    </box>

    <box name="XilofoneFrameVolumeControlSlider1" size={1} position={new Vector3(9.75, defaultSliderYPosition, 31.75)} scaling={defaultSliderSize}>
      <standardMaterial name="XilofoneFrameVolumeControlSlider1-mat" {...defaultProps}/>
    </box>

    <box name="XilofoneFrameVolumeControl4" size={1} position={new Vector3(9.75, defaultYPosition, 36.75)} scaling={defaultSize}>
      <standardMaterial name="XilofoneFrameVolumeControl4-mat" {...defaultProps}/>
    </box>

    <box name="XilofoneFrameVolumeControlSlider1" size={1} position={new Vector3(9.75, defaultSliderYPosition, 36.75)} scaling={defaultSliderSize}>
      <standardMaterial name="XilofoneFrameVolumeControlSlider1-mat" {...defaultProps}/>
    </box>
  </>);
};

export default XilofoneVolumeControls;
