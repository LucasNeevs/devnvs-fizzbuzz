import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './Styles';

export default (): React.ReactElement<HTMLElement> => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ flexDirection: 'column' }}>
      <Typography
        variant="h4"
        className={classes.title}
      >
        Do you know how it works?
      </Typography>
      <Typography
        variant="body1"
        align="center"
        className={classes.subTitle}
      >
        FizzBuzz is a common puzzle used in developers interviews. It is a simple algorithm that receive a number
        and return Fizz, Buzz or FizzBuzz. If the inserted value be divisible by 3 and 5, return FizzBuzz. If it
        is be divisible just by 3, return Fizz, or divisible just by 5, return Buzz.
      </Typography>
    </div>
  );
}