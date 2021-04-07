
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
import WireframeGrid from '../../components/WireframeGrid';
import HighFidelityGrid from "../../components/HighFidelityGrid";
import HighFiDarkGrid from "../../components/HighFiDarkGrid";
import BackToTop from "../../components/BackToTop";
import Carousel from "../../components/Carousel";

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

function DevPortal() {

  const classes = useStyles();
  
  const leftColumnWidth = 300;
  const maxWidthText = 800;
  const introWidthText = 600;
  const imageHeight = 896;
  const imageWidth = 1442;
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
                <Typography variant="h5" style={{maxWidth:introWidthText}}>Duration: Aug 2018 - Jan 2020</Typography>
                </Grid>
                <Grid item>
                <Typography variant="h5" style={{maxWidth:introWidthText}}>Team Style: Solo Designer</Typography>
                </Grid>
                <Grid item>
                <Typography variant="h5" style={{maxWidth:introWidthText}}>Tools: Sketch, Figma, Adobe XD, UserTesting.com, Illustrator, After Effects</Typography>
                </Grid>
            </Grid>


            </Grid>
          </Grid>
          <Box style={{minHeight: boxHeight}}>
          </Box> 
          <Grid container spacing={5} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} > 
            <Grid item>
                <Image
                    src="/Hero.svg"
                    alt="Device mockup for system outage website"
                    width={imageWidth}
                    height={imageHeight}
                    />
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>How do we make our documentation as helpful as possible?</Typography>
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>As any developer will tell you, coding without proper documentation is difficult at best. Having clear, concise, and approachable documentation not only makes devs lives easier, but it can be used by our sales team as a powerful marketing tool. The previous documentation hub, known as Developer Portal, was lacking in several aspects: visual clarity, performance, accessibility, and the technology had several layers of technical debt. The decision was made to scrap the previous site entirely, and build something completely new: an AWS integrated, markdown powered CMS running on Grav. I worked with our digital Illustrator Keith Rosemond on this project. </Typography>
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
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Quickly Browse</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>Our documentation was originally written for paper, making the content about 50% longer than we needed it to be for web. Quick navigation also requires consistent headings, tables, and diagrams which are not present in the original. </Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Integrated Code</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>Syntax highlighted code snippets and executable code samples were a key target for bringing the documentation in line with modern standards. Redoc was used to maintain consistency in our RESTful API specs.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Focus on self-service</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>We sought to optimize several processes that currently require a phone call, from scoping a customer’s payment integration to getting test card data to run dummy transactions.</Typography>
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
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>User Journey</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
                <Image
                    src="/user_journey.svg"
                    alt="User Journey for the Developer Portal"
                    width={1325}
                    height={1078}
                    />
            </Grid>
            <Grid item>
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
                    src="/style_guide_01.svg"
                    alt="Colors and typography for the Developer Portal"
                    width={1325}
                    height={1078}
                    />
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>  
            </Grid>
            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Baseline User Research</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
                <Image
                    src="/tasks.png"
                    alt="User Journey for the Developer Portal"
                    width={976}
                    height={732.89}
                    />
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>Baseline Testing showed ample opportunities for improvement in the current site. Our Net Promoter Score, or how likely our users were to recommend the old site, was -40%. There were no users during baseline that had a positive view of the company after using the site.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>Users complained that the site was so bare bones, they weren’t even sure it was a real company. Combined with Elavon’s low name recognition and how far ahead our competitors were, it was clear there was serious work to be done just to achieve parity let alone surpass the competition. </Typography>
            </Grid>
            <Grid item>
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
            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>High Fidelity Wireframes</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
                <HighFidelityGrid></HighFidelityGrid>
            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>   
            </Grid>
            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Dark Mode</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
                <HighFiDarkGrid></HighFiDarkGrid>
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
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Communication is key</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>We tried several methods of design hand off, and eventually settled on a two lane hand off stream - Zeplin for business or marketing folks that just wanted a preview, and a Bitbucket based Sketch repo for the developers to see a responsive view of the designs. Once the output streams were settled, there weren’t any kinks in the hand off process.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Flexibility is a requirement</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>There were times when I was coordinating the two different sites - in the EU and North America - where requirements would come down and no one could say where they came from. Often times they were from a EU stakeholder I had never met, but you can’t let a little variety ruin your mojo. I worked with stakeholders on calls to make sure that the EU team was satisfied, even if it meant somewhat splintering the designs from each other in the short run.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Good teamwork is essential</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>Often the blockers on this project were caused by developers trying to be Superman - only to end in sliding schedules. The best results come from Development and UX working in tandem.</Typography>
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


export default withLocale(DevPortal) 