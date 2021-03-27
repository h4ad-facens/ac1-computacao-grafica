import { ReactElement } from 'react';
import { whiteKeys } from './white-keys';
import XilofoneKey from '../XilofoneKey';
import { blackKeys } from './black-keys';

function XilofoneKeyboard(): ReactElement {
  return (<>
    {whiteKeys.map(key => (
      <XilofoneKey key={key.name} {...key} />
    ))}

    {blackKeys.map(key => (
      <XilofoneKey key={key.name} {...key} />
    ))}
  </>);
}

export default XilofoneKeyboard;
