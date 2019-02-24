import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { ToggleButton, ToggleButtonGroup } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Toggle Button', module)
  .add('Single', () => (
    <Container>
      <Header title={'Toggle Button'} />
      <ToggleButton icon="alarm" size={32} />
      <ToggleButton icon="face" size={32} color={'purple'} />
      <ToggleButton icon="arrow-back" size={32} color={'orange'} />
    </Container>
  ))
  .add('Group', () => (
    <Container>
      <Header title={'Toggle Button Group'} />
      <ToggleButtonGroup>
        <ToggleButton icon="alarm" size={32} value={'alarm'} />
        <ToggleButton icon="face" size={32} color={'purple'} value={'face'} />
        <ToggleButton
          icon="arrow-back"
          size={32}
          color={'orange'}
          value={'arrow'}
        />
      </ToggleButtonGroup>
    </Container>
  ));