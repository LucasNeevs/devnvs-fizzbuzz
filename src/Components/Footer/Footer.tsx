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
        <Grid item md={6} xs={12} className={classes.links} style={{ padding: '10px 150px' }}>
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
            align="center"
            className={classes.content}
          >
            Iniciando a carreira em 2018 e desenvolvendo diariamente com Javascript ES6^, React e Typescript
          </Typography>
        </Grid>
        <Grid item md={6} xs={12} className={classes.links}>
          <Typography
            variant="h6"
            component="p"
            align="center"
            style={{ color: '#fff' }}
          >
            Do you want to see more?
          </Typography>
          <div className={classes.footerLinks}>
            {
              socials.map((social: string): React.ReactElement<HTMLElement> => (
                <a href={social} style={{ color: '#fff' }}>{social}</a>
              ))
            }
          </div>
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