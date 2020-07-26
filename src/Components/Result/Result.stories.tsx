import React from 'react';
import { withConsole } from '@storybook/addon-console';
import { storiesOf } from '@storybook/react';
import Result from './Result';

storiesOf('Result', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement<HTMLElement> => (
    <Result />
  ));
