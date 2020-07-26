import React from 'react';
import { withConsole } from '@storybook/addon-console';
import { storiesOf } from '@storybook/react';
import SubHeader from './SubHeader';

storiesOf('SubHeader', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement<HTMLElement> => (
    <SubHeader />
  ));
