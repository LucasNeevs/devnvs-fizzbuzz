import React from 'react';
import { withConsole } from '@storybook/addon-console';
import { storiesOf } from '@storybook/react';
import Form from './SuperForm';

storiesOf('Form', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement<HTMLElement> => (
    <Form />
  ));
