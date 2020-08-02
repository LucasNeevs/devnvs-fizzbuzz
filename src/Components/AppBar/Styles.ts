import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  appbar: {
    padding: number;
    backgroundColor: string;
    boxShadow: string;
    position: string | any;
    '@media(max-width: 767px)': {
      position: string | any;
      backgroundColor: string;
    };
  };
  title: {
    textShadow: string;
    color: string;
    '@media(max-width: 767px)': {
      textAlign: string;
    };
  },
}

export default makeStyles((theme: Theme): IStyles => ({
  appbar: {
    padding: 10,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    position: 'absolute',
    '@media(max-width: 767px)': {
      position: 'fixed',
      backgroundColor: 'rgba(0,0,0,0.8)',
    },
  },
  title: {
    textShadow: '4px 4px 4px black',
    color: '#fff',
    '@media(max-width: 767px)': {
      textAlign: 'center',
    },
  },
}));
