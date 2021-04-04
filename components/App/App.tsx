import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';




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

const App: React.FC = () => {
  const classes = useStyles();
  const imageSize = 310;
  const leftColumnWidth = 300;
  const textSize= 280;
  const headingHeight = 40;

    return (
      <React.Fragment>
      <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
              <Skeleton variant="text" style={{minWidth:leftColumnWidth}} height={headingHeight}></Skeleton>
            </Grid>
            <Grid item>
              
              <Grid container spacing={3} direction='column'  alignItems='flex-start' justify='flex-start' className={classes.root} >
                <Grid item>
                <Skeleton variant="text" width={textSize * 2.3}></Skeleton>
                </Grid>
                <Grid item>
                <Skeleton variant="text" width={textSize}></Skeleton>
                </Grid>
              </Grid>

            </Grid>
            
          </Grid>
          <Box style={{minHeight: "100px"}}>
          </Box> 
          <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
              <Skeleton variant="text" style={{minWidth:leftColumnWidth}} height={headingHeight}></Skeleton>
            </Grid>
            <Grid item style={{maxWidth:"700px"}}>
              <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} > 
                  <Grid item>
                    <Grid container spacing={1} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
                      <Grid item>
                        <Skeleton variant="text" width={textSize}></Skeleton>
                      </Grid>
                      <Grid item>
                        <Skeleton variant='text' width={textSize} height={headingHeight}></Skeleton>
                      </Grid>
                      <Grid item>
                        <Skeleton variant='text' width={textSize}></Skeleton>
                      </Grid>
                      <Grid item>
                      <Skeleton variant='rect' width={imageSize} height={imageSize}>
                        </Skeleton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                  <Grid container spacing={1} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
                    <Grid item>
                      <Skeleton variant="text" width={textSize}></Skeleton>
                    </Grid>
                    <Grid item>
                      <Skeleton variant='text' width={textSize} height={headingHeight}></Skeleton>
                    </Grid>
                    <Grid item>
                      <Skeleton variant='text' width={textSize}></Skeleton>
                    </Grid>
                    <Grid item>
                    <Skeleton variant='rect' width={imageSize} height={imageSize}>
                        </Skeleton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
              <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} > 
                  <Grid item>
                    <Grid container spacing={1} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
                      <Grid item>
                        <Skeleton variant="text" width={textSize}></Skeleton>
                      </Grid>
                      <Grid item>
                        <Skeleton variant='text' width={textSize} height={headingHeight}></Skeleton>
                      </Grid>
                      <Grid item>
                        <Skeleton variant='text' width={textSize} style={{maxWidth:300}}></Skeleton>
                      </Grid>
                      <Grid item>
                      <Skeleton variant='rect' width={imageSize} height={imageSize}>
                        </Skeleton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                  <Grid container spacing={1} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
                    <Grid item>
                      <Skeleton variant="text" width={textSize}></Skeleton>
                    </Grid>
                    <Grid item>
                      <Skeleton variant="text" width={textSize} height={headingHeight}></Skeleton>
                    </Grid>
                    <Grid item>
                      <Skeleton variant='text' width={textSize}></Skeleton>
                    </Grid>
                    <Grid item>
                      <Skeleton variant='rect' width={imageSize} height={imageSize}>
                        </Skeleton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
              </Grid>
            </Grid>
          </Grid>
      </React.Fragment>
      
    );
  }
  
  export default App;