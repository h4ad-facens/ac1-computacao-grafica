import { XilofoneKeyProps } from '../XilofoneKey';
import { Vector3 } from '@babylonjs/core';

const defaultBlackKeyScaling = new Vector3(6, .5, 2);
const defaultXPosition = 2;
const defaultYPosition = .75;
const pressedYPosition = .5;

export const blackKeys: XilofoneKeyProps[] = [
  {
    name: 'bk1',
    position: new Vector3(defaultXPosition, defaultYPosition, 4),
    pressedPosition: new Vector3(defaultXPosition, pressedYPosition, 4),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
    note: 'A#1',
  },
  {
    name: 'bk2',
    position: new Vector3(defaultXPosition, defaultYPosition, 7.5),
    pressedPosition: new Vector3(defaultXPosition, pressedYPosition, 7.5),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
    note: 'G#1',
  },
  {
    name: 'bk3',
    position: new Vector3(defaultXPosition, defaultYPosition, 11),
    pressedPosition: new Vector3(defaultXPosition, pressedYPosition, 11),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
    note: 'F#1',
  },
  {
    name: 'bk4',
    position: new Vector3(defaultXPosition, defaultYPosition, 16),
    pressedPosition: new Vector3(defaultXPosition, pressedYPosition, 16),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
    note: 'D#1',
  },
  {
    name: 'bk5',
    position: new Vector3(defaultXPosition, defaultYPosition, 20),
    pressedPosition: new Vector3(defaultXPosition, pressedYPosition, 20),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
    note: 'C#1',
  },
  {
    name: 'bk6',
    position: new Vector3(defaultXPosition, defaultYPosition, 25),
    pressedPosition: new Vector3(defaultXPosition, pressedYPosition, 25),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
    note: 'A#2',
  },
  {
    name: 'bk7',
    position: new Vector3(defaultXPosition, defaultYPosition, 28.5),
    pressedPosition: new Vector3(defaultXPosition, pressedYPosition, 28.5),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
    note: 'G#2',
  },
  {
    name: 'bk8',
    position: new Vector3(defaultXPosition, defaultYPosition, 32),
    pressedPosition: new Vector3(defaultXPosition, pressedYPosition, 32),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
    note: 'F#2',
  },
  {
    name: 'bk10',
    position: new Vector3(defaultXPosition, defaultYPosition, 37),
    pressedPosition: new Vector3(defaultXPosition, pressedYPosition, 37),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
    note: 'D#2',
  },
  {
    name: 'bk11',
    position: new Vector3(defaultXPosition, defaultYPosition, 41),
    pressedPosition: new Vector3(defaultXPosition, pressedYPosition, 41),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
    note: 'C#2',
  },
];
