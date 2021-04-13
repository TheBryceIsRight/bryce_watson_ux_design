/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
// import Carousel from 'react-material-ui-carousel'
import { CardMedia, Card, CardContent, CardHeader, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Media, MediaContextProvider } from "../utils/media";



const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 340,
    },
    media: {
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
  }));


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function HighFidelityGrid(_props:any)
{
    const items = [
        {
            name: "Home",
            description: "Main overview and filter",
            filepath: "/hifi_17.svg",
            alt: "High Fidelity Mockup of ACME home screen",
            height: 3339,
            width: 1440,
        },
        {
            name: "API Details",
            description: "Our main API offerings",
            filepath: "/hifi_18.svg",
            alt: "Updates and point of contact",
            height: 1825,
            width: 1440,
        },
        {
            name: "Home",
            description: "Main overview and filter",
            filepath: "/hifi_dark_17.svg",
            alt: "High Fidelity Mockup of ACME home screen",
            height: 3339,
            width: 1440,
        },
        {
            name: "API Details",
            description: "Our main API offerings",
            filepath: "/hifi_dark_18.svg",
            alt: "Updates and point of contact",
            height: 1825,
            width: 1440,
        }

    ]

    return (
        <MediaContextProvider>
        {/*Mobile */}
        <Media at='sm'>
        <Grid container direction="column" spacing={4} className="BannerGrid" style={{maxHeight:3000}} alignItems="center">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Grid>

        </Media>
        <Media at='mo'>
        <Grid container direction="column" spacing={4} className="BannerGrid" style={{maxHeight:3000}} alignItems="center">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Grid>
        </Media>

        <Media at='md'>
        <Grid container direction="column" spacing={4} className="BannerGrid" style={{maxHeight:2400}} alignItems="center">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Grid>
        </Media>

        <Media at='lg'>
        <Grid container direction="column" spacing={4} className="BannerGrid" style={{maxHeight:2000}} alignItems="center">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Grid>
        </Media>

        <Media at='xl'>
        <Grid container direction="column" spacing={4} className="BannerGrid" style={{maxHeight:1800}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Grid>
        </Media>


        <Media greaterThanOrEqual='el'>
        <Grid container direction="column" spacing={4} className="BannerGrid" style={{maxHeight:1600}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Grid>
        </Media>
        </MediaContextProvider>
    )
}

function Item(props:any)
{
    const classes = useStyles();

    return (
        <Grid item>
            <Card className={classes.root} >
            <CardHeader
                title={props.item.name}
                subheader={props.item.description}
            />
            <CardMedia
            className="Media"
            image={props.item.filepath}
            title={props.item.name}
            style={{height:(props.item.height)/4.20, width:(props.item.width)/4.20}}
        >
            <CardContent>
            </CardContent>
        </CardMedia>
        </Card>
        </Grid>
        
        
    )
}

