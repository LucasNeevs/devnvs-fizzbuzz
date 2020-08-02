/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  root: {
    display: string;
    alignItems: string;
    justifyContent: string;
  },
  table: {
    width: number,
    border: string | never,
    marginBottom: number,
    textAlign: string | any,
    '@media(max-width: 767px)': {
      width: number,
    },
  },
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    width: 500,
    border: '2px solid #d4d4d4',
    marginBottom: 40,
    textAlign: 'center',
    '@media(max-width: 767px)': {
      width: 300,
    },
  },
}));
