import { Theme, makeStyles } from '@material-ui/core/styles';
import MathWallpaper from '../../Assets/Images/mathWallpaper.jpg';

interface IStyles {
  root: {
    display: string;
    alignItems: string;
    justifyContent: string;
    height: string;
    backgroundImage: string;
    backgroundPosition: string;
    backgroundRepeat: string;
    backgroundSize: string;
    margin: string;
  },
  title: {
    textShadow: string;
    fontWeight: string | any;
    color: string;
  },
  subTitle: {
    textShadow: string;
    color: string;
  }
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
    backgroundImage: `url(${MathWallpaper})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: '-8px',
  },
  title: {
    textShadow: '4px 4px 4px black',
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    textShadow: '2px 2px 2px black',
    color: '#fff',
  },
}));
