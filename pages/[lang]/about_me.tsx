
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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import useTranslation from '../../hooks/useTranslation';




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

function AboutMe() {

  const classes = useStyles();
  const boxHeight = 70;
  const { locale } = useTranslation();


  /*
  const { locale } = useTranslation();
  const imageSize = 310;
    */

    return <React.Fragment>
      <Head>
        <title>
        About Me
        </title>
      </Head>
      <MediaContextProvider>
      <BackToTop/>
      <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
            <Grid item>
            <Image
                    src="/about_me.png"
                    alt="Device mockup for api strategy website"
                    width={682.66}
                    height={455.67}
                    className="Preview"
                    />
            </Grid>
            <Grid item>
            <Box style={{minHeight: boxHeight}}>
                </Box>
            </Grid>
            <Grid item>
            <Image
                    src="/atlanta.png"
                    alt="Device mockup for api strategy website"
                    width={672}
                    height={504}
                    className="Preview"
                    />
            </Grid>
            <Grid item>
            <Box style={{minHeight: boxHeight}}>
                </Box>
            </Grid>
            <Grid item>
            <Typography variant="h5" style={{maxWidth:"700px"}}>I&apos;m a UX designer in Atlanta, Georgia working for a financial technology company. I love helping people achieve their goals with user-centered design. </Typography>

            </Grid>
            <Grid item>
            <Typography variant="h5" style={{maxWidth:"700px"}}>In my free time I making pottery, riding my bicycle around Atlanta, and reading books like <Link href="https://www.wikiwand.com/en/The_Kingkiller_Chronicle">The Kingkiller Chronicles.</Link></Typography>

            </Grid>
            <Grid item>
            <Box style={{minHeight: boxHeight}}>
                </Box>
            <Typography variant="subtitle1" style={{maxWidth:"700px"}}>Photo Credit Georgia Tech Institute Communications</Typography>

            </Grid>
            <Grid item>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>
                <Box style={{minHeight: boxHeight}}>
                </Box>    
            </Grid>
            <Grid item>
            <Link href="/[lang]/" as={`/${locale}/`} passHref >

            <Button
                variant="contained"
                color="secondary"
                startIcon={<ArrowBackIcon />}
            >
                Back to the home page
            </Button>
            </Link>
            </Grid>
        </Grid>
      </MediaContextProvider>
    </React.Fragment> 
}


export default withLocale(AboutMe) 