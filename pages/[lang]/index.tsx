
import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { MediaContextProvider, Media } from "../../utils/media";
import withLocale from '../../hocs/withLocale';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Image from 'next/image'
import ButtonBase from '@material-ui/core/ButtonBase';
import useTranslation from '../../hooks/useTranslation';
import Link from 'next/link';
import BackToTop from "../../components/BackToTop";
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';

   
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

function Home() {

  const classes = useStyles();

  const imageSize = 310;
  const leftColumnWidth = 300;
  const { locale } = useTranslation();

    return <React.Fragment>
      <Head>
        <title>
        Bryce Watson&apos;s Portfolio
        </title>
        <meta property="og:url" content="https://bryce-watson-ux-design.vercel.app/en" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bryce Watson"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="User Experience Design Portfolio"
        />
        <meta property="og:image" content={"/nextjs.png"} />
      </Head>
      <BackToTop/>
      <MediaContextProvider>
      <Media at='sm'>
      <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
              <Typography variant="h4" style={{maxWidth:"700px"}}>Hi there! I&apos;m Bryce.</Typography>
            </Grid>
            <Grid item>
            <Grid container spacing={5} direction='column' alignItems='center' justify='center' className={classes.root} >
              <Grid item>
              <Typography variant="h5" style={{maxWidth:"700px"}}>I&apos;m a product designer at Elavon and a graduate of the Computer Science program at Georgia Tech. </Typography>
              </Grid>
              <Grid item>
              <Link href="/[lang]/about_me" as={`/${locale}/about_me`} passHref >
              <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<InfoIcon />}
              >
                  About me
              </Button>
              </Link>
              </Grid>
            </Grid>

            </Grid>
          </Grid>

      </Media>
      <Media greaterThan="sm">
      <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
              <Typography variant="h4" style={{minWidth:leftColumnWidth}}>Hi there! I&apos;m Bryce.</Typography>
            </Grid>
            <Grid item>
            <Grid container spacing={5} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
              <Grid item>
              <Typography variant="h5" style={{maxWidth:"700px"}}>I&apos;m a product designer at Elavon and a graduate of the Computer Science program at Georgia Tech. </Typography>
              </Grid>
              <Grid item>
              <Link href="/[lang]/about_me" as={`/${locale}/about_me`} passHref >
              <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<InfoIcon />}
              >
                  About me
              </Button>
              </Link>
              </Grid>
            </Grid>

            </Grid>
          </Grid>
          </Media>
          <Box style={{minHeight: "100px"}}>
          </Box> 
          <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
              <Typography variant="h4" style={{minWidth:leftColumnWidth}}>My Projects</Typography>
            </Grid>
            <Grid item style={{maxWidth:"700px"}}>
              <Grid container spacing={5} direction='row' alignItems='flex-start' justify='center' className={classes.root} > 
                  <Grid item>
                    <Grid container spacing={1} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
                      <Grid item>
                        <Typography variant='h5'>Developer Portal</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='body2'>Helping developers understand our systems</Typography>
                      </Grid>
                      <Grid item>
                        <ButtonBase  style={{ borderRadius: 4 }}>
                        <Link href="/[lang]/dev_documentation" as={`/${locale}/dev_documentation`} passHref >
                          <Image
                          className="Preview"
                          src="/Thumbnail1.png"
                          alt="Device mockup for developer documentation website"
                          width={imageSize}
                          height={imageSize}
                          />
                        </Link>
                        </ButtonBase>

                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                  <Grid container spacing={1} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
                    <Grid item>
                      <Typography variant='h5'>System Outages</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='body2'>Monitoring critical infrastructure for transparency</Typography>
                    </Grid>
                    <Grid item>
                      <ButtonBase style={{ borderRadius: 4 }}>
                      <Link href="/[lang]/system_status" as={`/${locale}/system_status`} passHref >

                        <Image
                        className="Preview"
                        src="/Thumbnail2.png"
                        alt="Device mockup for system outage website"
                        width={imageSize}
                        height={imageSize}
                      />
                      </Link>
                      </ButtonBase>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
              <Grid container spacing={5} direction='row' alignItems='flex-start' justify='center' className={classes.root} > 
                  
                  <Grid item>
                  <Grid container spacing={1} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
                    <Grid item>
                      <Typography variant='h5'>API Strategy</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='body2'>Tracking API maturity across an organization</Typography>
                    </Grid>
                    <Grid item>
                      <ButtonBase style={{ borderRadius: 4 }}>
                      <Link href="/[lang]/api_strategy" as={`/${locale}/api_strategy`} passHref >
                        <Image
                        className="Preview"
                        src="/Thumbnail4.png"
                        alt="Device mockup for API Strategy website"
                        width={imageSize}
                        height={imageSize}
                        
                      />
                      </Link>
                      </ButtonBase>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                    <Grid container spacing={1} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
                      <Grid item>
                        <Typography variant='h5'>Air Quality Monitoring</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='body2' style={{maxWidth:300}}>Monitoring air quality for the CDC</Typography>
                      </Grid>
                      <Grid item>
                        <ButtonBase style={{ borderRadius: 4 }}>
                        <Link href="/[lang]/air_pollution" as={`/${locale}/air_pollution`} passHref >
                          <Image
                          className="Preview"
                          src="/Thumbnail3.png"
                          alt="Device mockup for air pollution tracker"
                          width={imageSize}
                          height={imageSize}
                        />
                        </Link>
                        </ButtonBase>
                      </Grid>
                    </Grid>
                  </Grid>
              </Grid>
            </Grid>
              </Grid>
            </Grid>
          </Grid>
      </MediaContextProvider>
    </React.Fragment> 
}


export default withLocale(Home) 