import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header';
import moment from 'moment';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    boxShadow: 'none',
  },
  root: {
    flexGrow: 1,
    // backgroundImage: `url(${"../images/blackboard.jpg"})`,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    fontFamily: 'attractive',
  },
  date: {
    fontSize: 18,
  },
  text: {
    textAlign: 'center',
    fontSize: 17,
  },
  noPadding: {
    padding: '0px !important',
  }
});

function CompletedPage(props) {
  const { classes } = props;

  const handleClick = (pageLink) => () => {
    props.history.push(pageLink);
  }

  // Date.now() will return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
  const date = Date.now();
  const formattedDate = moment(date).format("MMMM Do, YYYY");
  // We can then take those milliseconds and format them with moment which will output the correct date for the respective timezone

  return (
    <div className={classes.root}>
       <Header title="Box Lunch Lifestyle" />
       <audio src="/audio/trumpet_fanfare.mp3" autoPlay />
    <Grid container spacing={24} >
        <Grid item xs={12}>
          <div className='completedDate'>
            <Paper className={classes.paper}>
            <div className={classes.date}>
            {formattedDate}
            </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={24} alignItems={'center'} justify={'center'} direction={'column'}>
        <Grid item className={classes.noPadding}>
          <div className='completedMessage'>
            <h2>Nicely done!</h2>
          </div>
        </Grid>
        <Grid item xs={12} className={classes.noPadding}>
          <div className='completedImg'>
            <img src='images/stickman.png' alt='boxingBoy' width='100%' />
          </div>
        </Grid>
        <Grid item xs={8} className={classes.noPadding}>
          <h3 className={classes.text}>Everyday matters. <br/> Keep it up! </h3>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={handleClick('/home')} variant="contained" color="primary" className={classes.button}>Home</Button>
        </Grid>
      </Grid>
    </div>

  )
}

export default withStyles(styles)(CompletedPage);