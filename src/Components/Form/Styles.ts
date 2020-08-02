import { Theme, makeStyles } from '@material-ui/core';

interface IStyles {
  main: {
    minHeight: number,
  }
  form: {
    padding: number,
  },
  button: {
    backgroundImage: string,
  }
}

export default makeStyles((theme: Theme): IStyles => ({
  main: {
    minHeight: 200,
  },
  form: {
    padding: 20,
  },
  button: {
    backgroundImage: 'linear-gradient(to right bottom, rgb(185, 10, 117), rgb(18, 0, 138))',
  },
}));
