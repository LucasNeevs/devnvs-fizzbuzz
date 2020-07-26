import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import useStyles from './Styles';

export default (): React.ReactElement<HTMLElement> => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar}>
      <Typography
        variant="h6"
        className={classes.title}
        noWrap
      >
        {'<DevNvs />'}
      </Typography>
    </AppBar>
  );
}