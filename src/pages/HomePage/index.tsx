import { ReactElement } from 'react';

import * as S from './styles';
import { Engine, Scene } from 'react-babylonjs';
import { Vector3 } from '@babylonjs/core';
import Xilofone from '../../components/Xilofone';

function HomePage(): ReactElement {
  return (
    <S.Container>
      <Engine antialias adaptToDeviceRatio debug canvasId="babylonJS">
        <Scene>
          <arcRotateCamera name="camera1" target={new Vector3(0, 0, (15 * 4 / 3))} alpha={Math.PI} beta={Math.PI / 4} radius={50} />
          <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />

          <Xilofone/>
        </Scene>
      </Engine>
    </S.Container>
  );
}

export default HomePage;
