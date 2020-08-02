import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  root: {
    display: string;
    alignItems: string;
    justifyContent: string;
    // padding: number | string;
  },
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: '5px 400px',
  },
}));
