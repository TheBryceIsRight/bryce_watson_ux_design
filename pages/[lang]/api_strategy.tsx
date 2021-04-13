
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
import Carousel from "../../components/CarouselAPIStrategy";
import HighFidelityGrid from '../../components/HighFidelityGridAPI';



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
        API Strategy
        </title>
      </Head>
      <MediaContextProvider>
      <BackToTop/>
      <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
              <Typography variant="h4" style={{maxWidth:leftColumnWidth}}>Steering API Strategy</Typography>
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
                <Typography variant="h5" style={{maxWidth:introWidthText}}>Duration: Jul 2019 - Nov 2019</Typography>
                </Grid>
                <Grid item>
                <Typography variant="h5" style={{maxWidth:introWidthText}}>Team Style: Solo Designer</Typography>
                </Grid>
                <Grid item>
                <Typography variant="h5" style={{maxWidth:introWidthText}}>Tools: Figma, Sketch</Typography>
                </Grid>
            </Grid>


            </Grid>
          </Grid>
          <Box style={{minHeight: boxHeight}}>
          </Box> 
          <Grid container spacing={5} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} > 
            <Grid item>
                <Image
                    src="/api_strategy_01.png"
                    alt="Device mockup for api strategy website"
                    width={1440}
                    height={949}
                    className="Preview"
                    priority={true}
                    />
            </Grid>
            <Grid item>
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>How should we organize our APIs so that they can grow and mature?</Typography>
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>Created by two of my teammates Colin Jaccino and Laura Ratliff, ACME (API Channel Management &amp; Engagement) grew out of a need for us to have consistent API standards in our developer documentation. I was tasked with taking their governance body and creating an internal website that help serve its ends.</Typography>
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>The goal was to solve this issue with a single place where people would go to see if something was broken, and if they were an internal employee, what was being done to fix the issue. The working name was System Status, but it was the url I gave it that was more important: status.elavon.com. By adding status in front of our existing main website, anyone in the company could get a concise, data-driven, comprehensive look at how our systems were doing without remembering how to get there.</Typography>
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
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Simplicity</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>API maturity was not centrally tracked prior to this project, with emails and documents scattered around that only provided a partial picture. This site would act as an organizational pillar.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Accountability</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>This site served as both encourgement and accountability for Product Owners making commitments to the Developer Portal.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Vision</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>ACME lead the way within Elavon for modern API strategy and adoption. The site&apos;s design and aesthetic should reflect the team&apos;s future-oriented mentality.</Typography>
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
                    src="/site_map_03.svg"
                    alt="Site Map for API Management site"
                    width={1980}
                    height={1287}
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
                    src="/style_guide_04.svg"
                    alt="Colors and typography for API strategy"
                    width={1161}
                    height={926}
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
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Branding Guidelines</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
                <Image
                    src="/brand_guidelines_01.svg"
                    alt="ACME Brand Guidelines"
                    width={1440}
                    height={9492}
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
            <Typography variant="h3" style={{maxWidth:maxWidthText}}>Mobile Prototype</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box>  
            </Grid>
            <Grid item>
                <div style={{borderRadius: 4, width: "100%", height:1000, overflow: "hidden"}}>
                <iframe title="iPhone 8 Dev Portal Mockup" width="100%" height="1000" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOT5w89thotQdKVT5D02guR%2FPortfolio%3Fnode-id%3D161%253A2245%26viewport%3D2051%252C2086%252C1.0889283418655396%26scaling%3Dscale-down%26page-id%3D161%253A2152" allowFullScreen></iframe>
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
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>APIs do not become RESTful on their own</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>Much of the design behind ACME was to hold product owners accountable for their APIs. We have plans for a timeline that tracks how close an API is to becoming RESTful, with a feature comparison against the Product Owner’s spec.</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: smallerBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="h4" style={{maxWidth:maxWidthText}}>Planning API Exposure is important</Typography>
            </Grid>
            <Grid item>
                <Box style={{minHeight: vSmallBoxHeight}}>
                </Box> 
            </Grid>
            <Grid item>
            <Typography variant="body1" style={{maxWidth:maxWidthText}}>Many teams found themselves exposing APIs that were not originally designed with that in mind, leading to catch up testing. If an API is going to be going public, the decision should be made as early as possible to allow for adequate security and design.</Typography>
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