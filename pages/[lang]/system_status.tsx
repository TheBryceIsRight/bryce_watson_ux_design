
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
import WireframeGrid from '../../components/WireframeGridSS';
import BackToTop from "../../components/BackToTop";
import Carousel from "../../components/CarouselSystemStatus";


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
        Dev Portal
        </title>
      </Head>
      <MediaContextProvider>
      <BackToTop/>
      <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
              <Typography variant="h4" style={{maxWidth:leftColumnWidth}}>Developer Documentation Redesign</Typography>
            </Grid>
            <Grid item>
            
            <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
                <Grid item>
                <Typography variant="h5" style={{maxWidth:introWidthText}}>My Role: UX Designer</Typography>
                </Grid>
                <Grid item>
                <Typography variant="h5" style={{maxWidth:introWidthText}}>Company: Elavon</Typography>
                </Grid>
                <Grid item>
                <Typography variant="h5" style={{maxWidth:introWidthText}}>Duration: Feb 2020 - August 2020</Typography>
                </Grid>
                <Grid item>
                <Typography variant="h5" style={{maxWidth:introWidthText}}>Team Style: Solo Designer, Accessibilty QA</Typography>
                </Grid>
                <Grid item>
                <Typography variant="h5" style={{maxWidth:introWidthText}}>Tools: Figma, UserTesting.com, Salesforce Lightning</Typography>
                </Grid>
            </Grid>


            </Grid>
          </Grid>
          <Box style={{minHeight: boxHeight}}>
          </Box> 
          <Grid container spacing={5} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} > 
            <Grid item>
                <Image
                    src="/system_status_01.svg"
                    alt="Device mockup for system outage website"
                    width={1440}
                    height={1381}
                    className="Preview"
                    />
            </Grid>
            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>How do we inform others of outages of critical systems?</Typography>
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>For many companies, if a software platform goes down or begins experiencing limited service, everyone involved is blasted with a torrent of status emails. Elavon had long operated in such an environment.</Typography>
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>Moreover, our internal team that managed key outages did all of their work manually through email. This led to several issues: auditors asking about performance prior to 90 days ago had little information to look over as the emails had been deleted, overlapping assignments led to confusion over who would fix an issue, and people being left out of key email chains sometimes had no idea what was going on. </Typography>
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>The goal was to solve this issue with a single place where people would go to see if something was broken, and if they were an internal employee, what was being done to fix the issue. The working name was System Status, but it was the url I gave it that was more important: status.elavon.com. By adding status in front of our existing main website, anyone in the company could get a concise, data-driven, comprehensive look at how our systems were doing without remembering how to get there.</Typography>
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>This project was done with the help of Ariel Rodriguez, the only developer, and Craig Bruce, our product owner.</Typography>
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
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Clear data visualization</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>No more chasing emails to see what was going on, a live feed of every system we had in the company was actively tracked and updated without refreshing using various back-end APIs. Consistent icons, tags, and color coding helped easily identify issues at a glance.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>More than just tables</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>The initial build of the site was solely tables of information from different systems. There had not been any UX input until that point, and even the developer admitted it was ugly. I challenged the PO and dev to think beyond just top line numbers and color coding, and try to be a little ambitious - which in turn led to the creation of a map of different countries, and the ability to switch the map between maintenance and active issues.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Situational Theming</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>Many modern websites do not have a single color pallete, and for developers dark mode is often preferred. As a result we began planning for both modes from the get go, allowing users to customize the site based on how much daylight they were experiencing.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>  
            </Grid>
            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Personas</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
                <Carousel/>
            </Grid>

            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>  
            </Grid>
            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Site Map</Typography>
            <Box style={{minHeight: vSmallBoxHeight}}/>
            </Grid>
            <Grid item>
            <Image
                    src="/site_map_02.svg"
                    alt="Site Map for System Status"
                    width={1980}
                    height={1638}
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
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Style Guide</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
                <Image
                    src="/style_guide_03.svg"
                    alt="Colors and typography for System Status"
                    width={1325}
                    height={1078}
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
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Refined Wireframes</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
                <WireframeGrid></WireframeGrid>
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>  
            </Grid>

            {/* Figma iframe */}
            
            {/* <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Mockups</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box>  
            </Grid>
            <Grid item>
                <div style={{borderRadius: 4, width: "100%", height:700, overflow: "hidden"}}>
                <iframe title="iPhone 8 Dev Portal Mockup" width="100%" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOT5w89thotQdKVT5D02guR%2FPortfolio%3Fnode-id%3D33%253A2050%26viewport%3D1133%252C1457%252C0.475723534822464%26scaling%3Dscale-down%26page-id%3D33%253A2049" allowFullScreen></iframe>
                </div>
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>  
            </Grid> */}
            

            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Takeaways</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Accessibility is not just a requirement, it’s the right thing to do.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>I took the entire accessibility curriculum from Deque over the course of designing the site, and it really changed how I view even simple things like Javascript widgets. The team did not always understand why I was so gung ho about screen readers, but now they do.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Trust over cutting edge.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>One user in our user testing bemoaned the lack of “pizzazz” in the website, but I would say that’s in some ways a compliment. I wanted the main home page in particular to be easy to digest, and if that means that there aren’t flashing lights everywhere for example, I’d say that’s a good thing. Even though the site is internal, the plan is to expand and publish the site externally at some point, so there needs to be a level of polish that allows others to trust us. </Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Explaining with design is good. Explaining with code is often better. </Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>I built a parallel version of the site in React and Next.js (which became the basis of the site you’re looking at right now!), in order to demonstrate some of the behavior to the team that I couldn’t achieve with a Figma prototype. Once they saw the website, they immediately understood what I was asking for. Plus I got to polish my React skills to boot. </Typography>
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