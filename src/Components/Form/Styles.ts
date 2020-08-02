import { Theme, makeStyles } from '@material-ui/core';

interface IStyles {
  main: {
    minHeight: number,
  }
  form: {
    padding: number,
  },
}

export default makeStyles((theme: Theme): IStyles => ({
  main: {
    minHeight: 200,
  },
  form: {
    padding: 20,
  },
}));
