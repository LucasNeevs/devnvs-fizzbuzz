import React from 'react';
import { withConsole } from '@storybook/addon-console';
import { storiesOf } from '@storybook/react';
import Header from './Header';

storiesOf('Header', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement<HTMLElement> => (
    <Header />
  ));
