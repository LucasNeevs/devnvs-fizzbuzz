import { Theme, makeStyles } from '@material-ui/core';

interface IStyles {
  container: {
    marginTop: number,
  },
  title: {
    fontWeight: string | any,
    textShadow: string,
  }
}

export default makeStyles((theme: Theme): IStyles => ({
  container: {
    marginTop: 30,
  },
  title: {
    fontWeight: 'bold',
    textShadow: '5px 5px 5px #d4d4d4',
  },
}));
