import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"

import {
    Card,
    CardMedia,
    CardHeader,
    CardActionArea,
    Typography,
    Grid,
    Checkbox,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormLabel,
    Slider
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Image from 'next/image'


const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);




function Project(props) {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const items = [];
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;


    for (let i = 0; i < mediaLength-1; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item key={item.Name}>
                <Card >
                    
                <CardHeader
                    title={item.Name}
                    subheader={item.Description}
                />
                <CardActionArea onClick={handleClickOpen}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                    style={{minHeight:350, minWidth:500}}
                >
                </CardMedia>
                </CardActionArea>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        {item.Name}
                    </DialogTitle>
                    <DialogContent dividers>
                        <Image
                        src={item.Image}
                        alt="Persona"
                        width={800}
                        height={700}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                        Close 
                        </Button>
                    </DialogActions>
                    </Dialog>
                </Card>
                
            </Grid>
        )

        items.push(media);
    }

    return (
        <Grid container spacing={2} justify="center">
            {items}
        </Grid>
    )
}

const items = [
    {
        Name: "Personas",        
        contentPosition: "left",
        Items: [
            {
                Name: "Jacob",
                Image: "/persona_05.png",
                Description: "Paralegal",
            },
        ]
    },
    {
        Name: "Personas",        
        contentPosition: "left",
        Items: [
            {
                Name: "Thiago",
                Image: "/persona_06.png",
                Description: "Graphic Designer",
            },
            
        ]
    },
    {
        Name: "Personas",
        contentPosition: "left",
        Items: [
            {
                Name: "Lea",
                Image: "/persona_07.png",
                Description: "Magazine Editor",
            }
        ]
    }
]


class BannerExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: true,
            animation: "fade",
            indicators: true,
            timeout: 800,
            navButtonsAlwaysVisible: false,
            navButtonsAlwaysInvisible: false,
            cycleNavigation: true
        }

        autoBind(this);
    }

    toggleAutoPlay() {
        this.setState({
            autoPlay: !this.state.autoPlay
        })
    }

    toggleIndicators() {
        this.setState({
            indicators: !this.state.indicators
        })
    }

    toggleNavButtonsAlwaysVisible() {
        this.setState({
            navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
        })
    }

    toggleNavButtonsAlwaysInvisible() {
        this.setState({
            navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
        })
    }

    toggleCycleNavigation() {
        this.setState({
            cycleNavigation: !this.state.cycleNavigation
        })
    }

    changeAnimation(event) {
        this.setState({
            animation: event.target.value
        })
    }

    changeTimeout(event, value) {
        this.setState({
            timeout: value
        })
    }

    render() {
        return (
            <div>
                <Carousel
                    className="Example"
                    autoPlay={this.state.autoPlay}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    cycleNavigation={this.state.cycleNavigation}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                    next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    // fullHeightHover={false}
                    // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
                    // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
                    // indicatorContainerProps={{style: {margin: "20px"}}}
                    // NextIcon='next'
                >
                    {
                        items.map((item, index) => {
                            return <Project item={item} key={index} />
                        })
                    }
                </Carousel>


                <FormLabel component="legend">Options</FormLabel>
                <FormControlLabel
                    control={
                        <Checkbox onChange={this.toggleAutoPlay} checked={this.state.autoPlay} value="autoplay"
                            color="primary" />
                    }
                    label="Auto-play"
                />
                <FormControlLabel
                    control={
                        <Checkbox onChange={this.toggleIndicators} checked={this.state.indicators} value="indicators"
                            color="primary" />
                    }
                    label="Bottom dot indicators"
                />
                <FormControlLabel
                    control={
                        <Checkbox onChange={this.toggleNavButtonsAlwaysVisible} checked={this.state.navButtonsAlwaysVisible} value="NavButtonsAlwaysVisible" color="primary" />
                    }
                    label="Nav Buttons Always Visible"
                />

                <FormControlLabel
                    control={
                        <Checkbox onChange={this.toggleNavButtonsAlwaysInvisible} checked={this.state.navButtonsAlwaysInvisible} value="NavButtonsAlwaysInvisible" color="primary" />
                    }
                    label="Nav Buttons Always Invisible"
                />
                <FormControlLabel
                    control={
                        <Checkbox onChange={this.toggleCycleNavigation} checked={this.state.cycleNavigation} value="CycleNavigation" color="primary" />
                    }
                    label="CycleNavigation"
                />

                <FormControlLabel
                    control={
                        <RadioGroup name="animation" value={this.state.animation} onChange={this.changeAnimation} row
                            style={{ marginLeft: "10px" }}>
                            <FormControlLabel value="fade" control={<Radio color="primary" />} label="Fade" />
                            <FormControlLabel value="slide" control={<Radio color="primary" />} label="Slide" />
                        </RadioGroup>
                    }
                />

                <FormControlLabel
                    control={
                        <div style={{ width: 300 }}>
                            <Typography id="discrete-slider" gutterBottom>
                                Animation Duration (Timeout) in ms
                            </Typography>
                            <Slider
                                defaultValue={800}
                                getAriaValueText={() => `${this.state.timeout}ms`}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={100}
                                marks
                                min={100}
                                max={2500}
                                onChange={this.changeTimeout}
                            />
                        </div>
                    }
                />

            </div>

        )
    }
}

export default BannerExample;