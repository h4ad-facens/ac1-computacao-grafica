import { ReactElement } from 'react';

import XilofoneFrame from './XilofoneFrame';
import XilofoneRoundControls from './XilofoneRoundControls';
import XilofoneVolumeControls from './XilofoneVolumeControls';
import XilofonePedals from './XilofonePedals';
import XilofoneKeyboard from './XilofoneKeyboard';

function Xilofone(): ReactElement {
  return (<>
    <XilofonePedals />
    <XilofoneRoundControls />
    <XilofoneVolumeControls />
    <XilofoneFrame />
    <XilofoneKeyboard />
  </>);
}

export default Xilofone;
