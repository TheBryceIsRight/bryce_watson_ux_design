/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { CardMedia, Card, CardContent, CardHeader  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Media, MediaContextProvider } from "../utils/media";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "680",
        width: "595",
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
export default function PersonaCarousel(_props:any)
{
    const items = [
        {
            name: "Julia",
            description: "Front end developer",
            filepath: "/persona_01.png",
            alt: "Persona 1",
            height: 660,
            width: 595,
        },
        {
            name: "Sami",
            description: "Full stack developer",
            filepath: "/persona_02.png",
            alt: "Persona 2",
            height: 660,
            width: 595,
        },
        {
            name: "Olivia",
            description: "Dev Lead",
            filepath: "/persona_03.png",
            alt: "Persona 3",
            height: 660,
            width: 595,
        },

    ]

    return (
        

        <MediaContextProvider>
        {/*Mobile */}
        <Media at='sm'>
        <Carousel>
            {
                items.map( (item, i) => <ItemMobile key={i} item={item} /> )
            }
        </Carousel>

        </Media>
        <Media at='mo'>
        <Carousel>
            {
                items.map( (item, i) => <ItemTablet key={i} item={item} /> )
            }
        </Carousel>
        </Media>

        <Media at='md'>
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </Media>

        <Media at='lg'>
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </Media>

        <Media at='xl'>
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </Media>


        <Media greaterThanOrEqual='el'>
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </Media>
        </MediaContextProvider>
            
        
    )
}

function Item(props:any)
{
    const classes = useStyles();

    return (
            <Card className={classes.root} >
            <CardHeader
                title={props.item.name}
                subheader={props.item.description}
            />
            <CardMedia
            className="Media"
            image={props.item.filepath}
            title={props.item.name}
            style={{height:(props.item.height*1.6), width:(props.item.width*1.9)}}

        >
            <CardContent>
            </CardContent>
        </CardMedia>
        </Card>
        
        
    )
}

function ItemTablet(props:any)
{
    const classes = useStyles();

    return (
            <Card className={classes.root} >
            <CardHeader
                title={props.item.name}
                subheader={props.item.description}
            />
            <CardMedia
            className="Media"
            image={props.item.filepath}
            title={props.item.name}
            style={{height:(props.item.height*0.75), width:(props.item.width*.93)}}

        >
            <CardContent>
            </CardContent>
        </CardMedia>
        </Card>
        
        
    )
}

function ItemMobile(props:any)
{
    const classes = useStyles();

    return (
            <Card className={classes.root} >
            <CardHeader
                title={props.item.name}
                subheader={props.item.description}
            />
            <CardMedia
            className="Media"
            image={props.item.filepath}
            title={props.item.name}
            style={{height:(props.item.height*0.40), width:(props.item.width*.48)}}

        >
            <CardContent>
            </CardContent>
        </CardMedia>
        </Card>
        
        
    )
}
