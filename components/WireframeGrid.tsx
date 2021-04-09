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
            description: "Main home screen",
            filepath: "/low_fi_01.svg",
            alt: "Low Fidelity Mockup of Dev Portal home screen",
            height: 2955,
            width: 1440,
        },
        {
            name: "Contact Us",
            description: "Contact information and support form",
            filepath: "/low_fi_02.svg",
            alt: "Low Fidelity Mockup of Dev Portal contact us screen",
            height: 2465,
            width: 1440,
        },
        {
            name: "Product",
            description: "Our main API offerings",
            filepath: "/low_fi_03.svg",
            alt: "Low Fidelity Mockup of Dev Portal Product screen",
            height: 4735,
            width: 1440,
        },
        {
            name: "Documentation home",
            description: "Overview of a product's documentation",
            filepath: "/low_fi_04.svg",
            alt: "Low Fidelity Mockup of Dev Portal documentation home screen",
            height: 3538,
            width: 1440,
        },
        {
            name: "Contact Us Diasmbiguation",
            description: "Used to distinguish from sales or support as well as internal vs external",
            filepath: "/low_fi_05.svg",
            alt: "Low Fidelity Mockup of Dev Portal Contact Us screen",
            height: 1338,
            width: 1440,
        },
        {
            name: "Plug-in Marketplace",
            description: "Marketplace for various dev tools such as instacart",
            filepath: "/low_fi_06.svg",
            alt: "Low Fidelity Mockup of Dev Portal Marketplace screen",
            height: 2746,
            width: 1440,
        },
        
        {
            name: "API Category Details",
            description: "Drilling down into a category of APIs",
            filepath: "/low_fi_08.svg",
            alt: "Low Fidelity Mockup of Dev Portal API Category Details screen",
            height: 2452,
            width: 1440,
        },
        {
            name: "API Category Details expanded",
            description: "Showing many api cards",
            filepath: "/low_fi_09.svg",
            alt: "Low Fidelity Mockup of Dev Portal API Category Details screen",
            height: 2140,
            width: 1440,
        },
        {
            name: "User Profile",
            description: "Basic user email and phone number",
            filepath: "/low_fi_07.svg",
            alt: "Low Fidelity Mockup of Dev Portal User Profile screen",
            height: 1720,
            width: 1440,
        },
    ]

    return (
        <MediaContextProvider>
        {/*Mobile */}
        <Media at='sm'>
        <Grid container direction="column" spacing={4} className="BannerGrid" style={{maxHeight:7000}} alignItems="center">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Grid>

        </Media>
        <Media at='mo'>
        <Grid container direction="column" spacing={4} className="BannerGrid" style={{maxHeight:7000}} alignItems="center">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Grid>
        </Media>

        <Media at='md'>
        <Grid container direction="column" spacing={4} className="BannerGrid" style={{maxHeight:7000}} alignItems="center">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Grid>
        </Media>

        <Media at='lg'>
        <Grid container direction="column" spacing={4} className="BannerGrid" style={{maxHeight:6500}} alignItems="center">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Grid>
        </Media>

        <Media at='xl'>
        <Grid container direction="column" spacing={4} className="BannerGrid" style={{maxHeight:4000}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Grid>
        </Media>


        <Media greaterThanOrEqual='el'>
        <Grid container direction="column" spacing={4} className="BannerGrid" style={{maxHeight:2900}}>
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

