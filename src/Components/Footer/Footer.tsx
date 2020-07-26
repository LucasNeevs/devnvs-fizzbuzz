import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './Styles';
import myImage from '../../Assets/Images/LucasNeves.jpeg';

export default (): React.ReactElement<HTMLElement> => {
  const classes = useStyles();
  const links = [
    'https://www.google.com.br',
    'https://www.google.com.br',
    'https://www.google.com.br',
    'https://www.google.com.br',
  ];
  const socials = [
    'https://www.google.com.br',
    'https://www.google.com.br',
    'https://www.google.com.br',
    'https://www.google.com.br',
  ];

  return (
    <div>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        className={classes.footer}
      >
        <Grid item md={6} xs={12} className={classes.links}>
          <img src={myImage} alt="UserImage" className={classes.img} />
          <Typography
            component="p"
            variant="h5"
            color="primary"
            align="center"
            className={classes.copy}
          >
            Lucas Neves
          </Typography>
          <Typography
            component="p"
            variant="body1"
            color="primary"
            align="center"
            className={classes.user}
          >
            Frontend Developer
          </Typography>
          <Typography
            component="p"
            variant="body1"
            color="primary"
            align="center"
            className={classes.user}
          >
            Iniciando a carreira em 2019 e desenvolvendo diariamente com Javascript ES6^, React and Typescript
          </Typography>
        </Grid>
        <Grid item md={6} xs={12} className={classes.links}>
          <ul>
            {
              socials.map((social: string): React.ReactElement<HTMLElement> => (
                <li>
                  <a href={social} style={{ color: '#fff' }}>{social}</a>
                </li>
              ))
            }
          </ul>
        </Grid>
        <Grid item md={12} xs={12} className={classes.links}>
          <Typography
            component="p"
            color="primary"
            align="center"
            className={classes.copy}
          >
            {`Copyright ${new Date().getFullYear()} - DevNvs`}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}