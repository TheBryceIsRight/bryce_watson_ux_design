
import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { MediaContextProvider } from "../../utils/media";
import withLocale from '../../hocs/withLocale';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Image from 'next/image'
// import ButtonBase from '@material-ui/core/ButtonBase';
// import useTranslation from '../../hooks/useTranslation';
import BackToTop from "../../components/BackToTop";


// eslint-disable-next-line @typescript-eslint/interface-name-prefix
{/*
interface IIndexProps {
  products: IProduct[]
} 
*/}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 100,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

function SystemStatus() {

  const classes = useStyles();
  
  const leftColumnWidth = 300;
  const maxWidthText = 800;
  const introWidthText = 600;
  const boxHeight = 70;
  const smallerBoxHeight = 50;
  const vSmallBoxHeight = 15;

  /*
  const { locale } = useTranslation();
  const imageSize = 310;
    */

    return <React.Fragment>
      <Head>
        <title>
        Air Pollution
        </title>
      </Head>
      <MediaContextProvider>
      <BackToTop/>
      <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
              <Typography variant="h4" style={{maxWidth:leftColumnWidth}}>Visualizing Air Pollution</Typography>
            </Grid>
            <Grid item>
            
            <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
                <Grid item>
                <Typography variant="h5" style={{maxWidth:introWidthText}}>My Role: Team Lead, UX Designer, Full Stack Developer</Typography>
                </Grid>
                <Grid item>
                <Typography variant="h5" style={{maxWidth:introWidthText}}>Class: Capstone Project, Georgia Institute of Technology B.S. Computer Science</Typography>
                </Grid>
                <Grid item>
                <Typography variant="h5" style={{maxWidth:introWidthText}}>Company: Center for Disease Control and Prevention (CDC)</Typography>
                </Grid>
                <Grid item>
                <Typography variant="h5" style={{maxWidth:introWidthText}}>Duration: January 2019  - May 2020</Typography>
                </Grid>
                <Grid item>
                <Typography variant="h5" style={{maxWidth:introWidthText}}>Team Style: 5 person team project</Typography>
                </Grid>
                <Grid item>
                <Typography variant="h5" style={{maxWidth:introWidthText}}>Tools: Adobe XD, R, Shiny, ShinyDashboard</Typography>
                </Grid>
            </Grid>


            </Grid>
          </Grid>
          <Box style={{minHeight: boxHeight}}>
          </Box> 
          <Grid container spacing={5} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} > 
            <Grid item>
                <Image
                    src="/air_pollution_01.png"
                    alt="Device mockup for api strategy website"
                    width={1440}
                    height={800}
                    className="Preview"
                    priority={true}
                    />
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>  
            </Grid>
            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Air pollution is a serious environmental threat. How do we allow communities outside of urban centers to have the same level of air pollution forecasting?</Typography>
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>Almost all of the high quality particulate matter sensors are located in urban areas, often due to universities. Can we find a way to leverage lower cost sensors in suburban and rural areas?</Typography>
            </Grid>
          </Grid>
          <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>  
            </Grid>
            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Goals</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Actionable insights</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>Since we were developing for research scientists, the number one priority was that the program would be useful in their daily life. </Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Minimalism in design</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>While the code undeneath was truly the focus of this project, we didn’t want to ignore the aesthetic. We used Shiny Dashboard to help bring the UI in line with a modern applications.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Springboard for future work</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>This prototype was meant to be built upon by CDC developers. We followed all best practices, commented our code well, and thoroughly documented everything so that hand-off went smoothly. </Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>  
            </Grid>
            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Initial Sketch</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
                <Image
                    src="/low_fi_17.svg"
                    alt="Low Fidelity mockup for air pollution visualization website"
                    width={1440}
                    height={1873}
                    className="Preview"
                    />
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>  
            </Grid>
            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Final Prototype</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
                <Image
                    src="/hifi_19.png"
                    alt="Final prototype for air pollution visualization website"
                    width={1439}
                    height={1567}
                    className="Preview"
                    />
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>  
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>  
            </Grid>
            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Tablet Mockup</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
                <div style={{borderRadius: 4, width: "100%", height:1000, overflow: "hidden"}}>                
                <iframe title="Air pollution visualization on tablet" width="100%" height="1000" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOT5w89thotQdKVT5D02guR%2FPortfolio%3Fnode-id%3D192%253A2723%26viewport%3D663%252C421%252C0.26979386806488037%26scaling%3Dscale-down%26page-id%3D192%253A2509" allowFullScreen></iframe>
                </div>
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>  
            </Grid>
            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Takeaways</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Teamwork makes the dream work</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>I actively tracked projects using Agile sprint processes on Zenhub to help our team focus their development efforts. I used a few project management techniques I had picked up at Elavon to make estimation less of a guessing game.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>More research is required</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>Despite our best efforts to clean up the data, there was one sensor in Washington D.C. that we just could not get to cooperate. The CDC researchers told us they didn’t think we’d be able to get anything statistically useful out of it, and they were right.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>  
            </Grid>
            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Thank you for your time!</Typography>
            </Grid>
            
      </MediaContextProvider>
    </React.Fragment> 
}


export default withLocale(SystemStatus) 