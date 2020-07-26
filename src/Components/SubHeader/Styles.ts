import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  root: {
    display: string;
    alignItems: string;
    justifyContent: string;
    height: string;
    backgroundColor: string;
    margin: string;
    padding: string;
    '@media(max-width: 767px)': {
      height: string;
    },
  },
  title: {
    textShadow: string;
    '@media(max-width: 767px)': {
      marginTop: string;
      marginBottom: string;
      textAlign: string;
    },
  },
  subTitle: {
    paddingTop: string;
    '@media(max-width: 767px)': {
      padding: number;
      marginBottom: string;
    },
  },
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    backgroundColor: '#e9e9e9',
    margin: '-8px',
    padding: '20px',
    '@media(max-width: 767px)': {
      height: 'auto',
    },
  },
  title: {
    textShadow: '5px 5px 5px #d4d4d4',
    '@media(max-width: 767px)': {
      marginTop: '30px',
      marginBottom: '20px',
      textAlign: 'center',
    },
  },
  subTitle: {
    paddingTop: '20px',
    '@media(max-width: 767px)': {
      padding: 0,
      marginBottom: '30px',
    },
  },
}));
