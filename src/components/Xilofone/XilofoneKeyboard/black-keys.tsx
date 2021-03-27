import { XilofoneKeyProps } from '../XilofoneKey';
import { Vector3 } from '@babylonjs/core';

const defaultBlackKeyScaling = new Vector3(6, .5, 2);
const defaultXPosition = 2;
const defaultYPosition = .75;

export const blackKeys: XilofoneKeyProps[] = [
  {
    name: 'bk1',
    position: new Vector3(defaultXPosition, defaultYPosition, 4),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
  },
  {
    name: 'bk2',
    position: new Vector3(defaultXPosition, defaultYPosition, 7.5),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
  },
  {
    name: 'bk3',
    position: new Vector3(defaultXPosition, defaultYPosition, 11),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
  },
  {
    name: 'bk4',
    position: new Vector3(defaultXPosition, defaultYPosition, 11),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
  },
  {
    name: 'bk5',
    position: new Vector3(defaultXPosition, defaultYPosition, 16),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
  },
  {
    name: 'bk6',
    position: new Vector3(defaultXPosition, defaultYPosition, 20),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
  },
  {
    name: 'bk7',
    position: new Vector3(defaultXPosition, defaultYPosition, 25),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
  },
  {
    name: 'bk8',
    position: new Vector3(defaultXPosition, defaultYPosition, 28.5),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
  },
  {
    name: 'bk10',
    position: new Vector3(defaultXPosition, defaultYPosition, 32),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
  },
  {
    name: 'bk11',
    position: new Vector3(defaultXPosition, defaultYPosition, 37),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
  },
  {
    name: 'bk12',
    position: new Vector3(defaultXPosition, defaultYPosition, 41),
    color: '#000000',
    scaling: defaultBlackKeyScaling,
  },
];
