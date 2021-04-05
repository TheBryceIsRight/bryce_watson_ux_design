/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
// import Carousel from 'react-material-ui-carousel'
import { CardMedia, Card, CardContent, CardHeader, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
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
export default function Example(_props:any)
{
    const items = [
        {
            name: "Home",
            filepath: "/low_fi_01.svg",
            alt: "Low Fidelity Mockup of Dev Portal home screen",
            height: 2955,
            width: 1440,
        },
        {
            name: "Contact Us",
            filepath: "/low_fi_02.svg",
            alt: "Low Fidelity Mockup of Dev Portal contact us screen",
            height: 2465,
            width: 1440,
        },
        {
            name: "Product",
            filepath: "/low_fi_03.svg",
            alt: "Low Fidelity Mockup of Dev Portal Product screen",
            height: 4735,
            width: 1440,
        },
        {
            name: "Documentation home",
            filepath: "/low_fi_04.svg",
            alt: "Low Fidelity Mockup of Dev Portal documentation home screen",
            height: 3538,
            width: 1440,
        },
        {
            name: "Contact Us Diasmbiguation",
            filepath: "/low_fi_05.svg",
            alt: "Low Fidelity Mockup of Dev Portal Contact Us screen",
            height: 1338,
            width: 1440,
        },
        {
            name: "Plug-in Marketplace",
            filepath: "/low_fi_06.svg",
            alt: "Low Fidelity Mockup of Dev Portal Marketplace screen",
            height: 2746,
            width: 1440,
        },
        
        {
            name: "API Category Details",
            filepath: "/low_fi_08.svg",
            alt: "Low Fidelity Mockup of Dev Portal API Category Details screen",
            height: 2452,
            width: 1440,
        },
        {
            name: "API Category Details expanded",
            filepath: "/low_fi_09.svg",
            alt: "Low Fidelity Mockup of Dev Portal API Category Details screen",
            height: 2140,
            width: 1440,
        },
        {
            name: "User Profile",
            filepath: "/low_fi_07.svg",
            alt: "Low Fidelity Mockup of Dev Portal User Profile screen",
            height: 1720,
            width: 1440,
        },
    ]

    return (
        <Grid container direction="column" spacing={6} className="BannerGrid" style={{maxHeight:2900}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Grid>
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
                subheader={props.item.alt}
            />
            <CardMedia
            className="Media"
            image={props.item.filepath}
            title={props.item.name}
            style={{height:(props.item.height)/4.20, width:"100%"}}
        >
            <CardContent>
            </CardContent>
        </CardMedia>
        </Card>
        </Grid>
        
        
    )
}

