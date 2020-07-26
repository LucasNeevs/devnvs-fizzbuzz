import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './Styles';

export default (): React.ReactElement<HTMLElement> => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ flexDirection: 'column' }}>
      <Typography
        variant="h2"
        align="center"
        className={classes.title}
      >
        FizzBuzz!
      </Typography>
      <Typography
        variant="body1"
        align="center"
        className={classes.subTitle}
      >
        The best puzzle for developers interviews
      </Typography>
    </div>
  );
}