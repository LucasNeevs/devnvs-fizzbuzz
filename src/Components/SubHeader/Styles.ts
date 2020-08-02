/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  root: {
    display: string;
    alignItems: string;
    justifyContent: string;
    height: number;
    backgroundColor: string;
    margin: string;
    padding: number;
    '@media(max-width: 767px)': {
      height: string;
    },
  },
  title: {
    fontWeight: string | any,
    textShadow: string;
    '@media(max-width: 767px)': {
      marginTop: number;
      marginBottom: number;
      textAlign: string;
    },
  },
  subTitle: {
    paddingTop: number;
    '@media(max-width: 767px)': {
      padding: number;
      marginBottom: number;
    },
  },
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    backgroundColor: '#e9e9e9',
    margin: '-8px',
    padding: 20,
    '@media(max-width: 767px)': {
      height: 'auto',
    },
  },
  title: {
    fontWeight: 'bold',
    textShadow: '5px 5px 5px #d4d4d4',
    '@media(max-width: 767px)': {
      marginTop: 30,
      marginBottom: 20,
      textAlign: 'center',
    },
  },
  subTitle: {
    paddingTop: 20,
    '@media(max-width: 767px)': {
      padding: 0,
      marginBottom: 30,
    },
  },
}));
