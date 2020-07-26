import { Theme, makeStyles } from '@material-ui/core';

interface IStyles {
  footer: {
    bottom: number,
    backgroundColor: string,
  },
  links: {
    textAlign: string | any,
    flexDirection: string | any,
  },
  copy: {
    color: string,
    textShadow: string,
  },
  user: {
    color: string,
    padding: string | any,
  },
  img: {
    width: string,
    height: string,
    borderRadius: string,
    objectFit: string | any,
  }
}

export default makeStyles((theme: Theme): IStyles => ({
  footer: {
    bottom: 0,
    backgroundColor: '#000',
  },
  links: {
    textAlign: 'center',
    flexDirection: 'column',
  },
  copy: {
    color: '#fff',
    textShadow: '1px 1px 1px #a1a1a1',
  },
  user: {
    color: '#fff',
    padding: '40px',
  },
  img: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
}));
