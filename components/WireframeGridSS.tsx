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
export default function WireframeGrid(_props:any)
{
    const items = [
        {
            name: "Home",
            description: "Overview of all systems",
            filepath: "/low_fi_10.svg",
            alt: "Low Fidelity Mockup of System Status home screen",
            height: 1381,
            width: 1440,
        },
        {
            name: "Current Issues",
            description: "List of recent system outages",
            filepath: "/low_fi_11.svg",
            alt: "Low Fidelity Mockup of current issues screen",
            height: 1024,
            width: 1440,
        },
        {
            name: "Active Maintenance",
            description: "List of items undergoing maintenance",
            filepath: "/low_fi_12.svg",
            alt: "Low Fidelity Mockup of Dev Portal Product screen",
            height: 1024,
            width: 1440,
        },
        {
            name: "Issue Details",
            description: "Specific issue information",
            filepath: "/low_fi_13.svg",
            alt: "Low Fidelity Mockup of System Status issue details screen",
            height: 1024,
            width: 1440,
        },
        {
            name: "System Overview",
            description: "Used to track issues and uptime",
            filepath: "/low_fi_14.svg",
            alt: "System overview screen",
            height: 1024,
            width: 1440,
        },
        {
            name: "All Systems",
            description: "Overview of all systems",
            filepath: "/low_fi_15.svg",
            alt: "Overview of all systems",
            height: 1024,
            width: 1440,
        },
        
        {
            name: "Search",
            description: "Results of looking for an issue or system",
            filepath: "/low_fi_16.svg",
            alt: "Search results of looking for an issue or system",
            height: 1024,
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
        <Grid container direction="column" spacing={4} className="BannerGrid" style={{maxHeight:1800}} alignItems="center">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Grid>
        </Media>

        <Media at='lg'>
        <Grid container direction="column" spacing={4} className="BannerGrid" style={{maxHeight:1800}} alignItems="center">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Grid>
        </Media>

        <Media at='xl'>
        <Grid container direction="column" spacing={4} className="BannerGrid" style={{maxHeight:1700}}>
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
            style={{height:(props.item.height)/4.15, width:(props.item.width)/4.20}}
        >
            <CardContent>
            </CardContent>
        </CardMedia>
        </Card>
        </Grid>
        
        
    )
}

