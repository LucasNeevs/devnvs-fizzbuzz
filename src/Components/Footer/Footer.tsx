import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './Styles';
import myImage from '../../Assets/Images/LucasNeves.png';
import jsICO from '../../Assets/Images/js.jpg';
import tsICO from '../../Assets/Images/ts.png';
import htmlICO from '../../Assets/Images/html.png';
import cssICO from '../../Assets/Images/css.png';

export default (): React.ReactElement<HTMLElement> => {
  const classes = useStyles();
  const socials = [
    'https://github.com/LucasNeevs',
    'https://www.linkedin.com/in/lucas-neves-215a93ba/',
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
            align="center"
            className={classes.content}
          >
            {
              `I had started my carrer as a frontend developer in 2018, 
              coding every day with Javascript ES6^, React e Typescript since then. 👨‍💻`
            }
          </Typography>
        </Grid>
        <Grid item md={6} xs={12} className={classes.links}>
          <img src={jsICO} alt="JS" width={30} height={30} />
          <img src={tsICO} alt="TS" width={30} height={30} />
          <img src={htmlICO} alt="HTML" width={30} height={30} />
          <img src={cssICO} alt="CSS" width={30} height={30} />
          <Typography
            variant="h5"
            component="p"
            align="center"
            className={classes.seeMore}
          >
            Do you want to see more?
          </Typography>
          <div className={classes.footerLinks}>
            {
              socials.map((social: string, index: number): React.ReactElement<HTMLElement> => (
                <Typography
                  key={index.toString()}
                  component="a"
                  align="center"
                  href={social}
                >
                  {social}
                </Typography>
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