import React from 'react';
import { withConsole } from '@storybook/addon-console';
import { storiesOf } from '@storybook/react';
import Appbar from './Appbar';

storiesOf('Appbar', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement<HTMLElement> => (
    <Appbar />
  ));
