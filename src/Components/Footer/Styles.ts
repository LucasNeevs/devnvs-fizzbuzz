/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme, makeStyles } from '@material-ui/core';

interface IStyles {
  footer: {
    bottom: number,
    backgroundColor: string,
  },
  links: {
    textAlign: string | any,
    flexDirection: string | any,
    '& img': {
      padding: number,
    },
  },
  copy: {
    color: string,
    textShadow: string,
  },
  user: {
    color: string,
    padding: number,
    fontSize: number,
  },
  img: {
    width: number,
    height: number,
    borderRadius: string,
    objectFit: string | any,
  },
  content: {
    paddingTop: number,
    color: string,
  },
  footerLinks: {
    marginTop: number,
    display: string | any,
    flexDirection: string | any,
    '& a': {
      fontSize: string | any,
      color: string | any,
      padding: number,
    },
  },
  seeMore: {
    marginTop: number,
    color: string,
  },
}

export default makeStyles((theme: Theme): IStyles => ({
  footer: {
    bottom: 0,
    backgroundColor: '#000',
  },
  links: {
    textAlign: 'center',
    flexDirection: 'column',
    '& img': {
      padding: 5,
    },
  },
  copy: {
    color: '#fff',
    textShadow: '1px 1px 1px #a1a1a1',
  },
  user: {
    color: '#fff',
    padding: 0,
    fontSize: 12,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    objectFit: 'cover',
  },
  content: {
    paddingTop: 20,
    color: '#fff',
  },
  footerLinks: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'column',
    '& a': {
      fontSize: 16,
      color: '#fff',
      padding: 1,
    },
  },
  seeMore: {
    marginTop: 10,
    color: '#fff',
  },
}));
