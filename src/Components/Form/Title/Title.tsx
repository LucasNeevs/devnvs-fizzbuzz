import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './Styles';

interface ITitle {
  title: string,
};

export default (props: ITitle): React.ReactElement<HTMLElement> => {
  const { title } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography
        variant="h4"
        component="p"
        align="center"
        className={classes.title}
      >
        {title}
      </Typography>
    </div>
  );
}