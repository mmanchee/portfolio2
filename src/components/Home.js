import React, { Fragment, useEffect, useState } from 'react';
import { Button, Grid, TextField, Typography, Paper, Icon, ButtonGroup, InputBase, Divider, MenuList, MenuItem, FormControl, InputLabel, Select } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Contacts, FormatListNumbered, Build, GitHub } from '@material-ui/icons';
import PropTypes from 'prop-types';

// images for page
import dnd from '../img/jsDnD.png';
import star from '../img/StarRack2.png';
import good from '../img/GoodFoodLogo.png';
const image1 = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97";
const image2 = "https://images.unsplash.com/photo-1540745291638-2c71059043e5";
const image3 = "https://images.unsplash.com/photo-1594312915251-48db9280c8f1";
const office1a = "https://images.unsplash.com/photo-1494059980473-813e73ee784b";
const office2a = "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1";
const office3a = "https://images.unsplash.com/photo-1506718468845-7578aa47670b";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1
  },
  headerText: {
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    top: '20vh',
    left: '50%',
    zIndex: '22'
  },
  hColor: {
    color: 'white', 
  },
  title: {
    fontSize: '48px',
    paddingTop: '25vh',
    fontWeight: 'bolder',
  },
  underTitle: {
    fontSize: '24px',
  },
  banner: {
    backgroundColor: 'black',
    position: 'relative',
    height: '75vh',
    overflow: 'hidden'
  },
  topBanner: {
    height: '75vh',
    opacity: '0.5',
  },
  office1: {
    background: `url(${office1a}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  },
  office2: {
    background: `url(${office2a}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  },
  office3: {
    background: `url(${office3a}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  },
  midTitle: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  block: {
    marginBottom: '2%',
    background: 'rgba(173,205,255,.3)',
    borderRadius: '5px',
  },
  imgTag: {
    borderRadius: '50%',
    maxHeight: '250px'
  },
  sec6Img: {
    borderRadius: '10px',
    maxWidth: '250px',
    marginBottom: '2%'
  },
}));

const Home = (props) => {
  const classes = useStyles();

  const { onChangePage } = props;
  
  return (
    <Fragment>
      <div className={classes.banner}>
        <Grid container direction='row'>
          <Grid item xs={12} sm={6} md={4}>
            <div className={`${classes.office1} ${classes.topBanner}`} ></div>
          </Grid>
          <Grid item xs={0} md={4}>
            <div className={`${classes.office2} ${classes.topBanner}`}></div>
          </Grid>
          <Grid item xs={0} sm={6} md={4}>
            <div className={`${classes.office3} ${classes.topBanner}`}></div>
          </Grid>
        </Grid>
        <Grid container xs={12} direction='column' className={`${classes.headerText} ${classes.root}`}>
          <Grid item xs={12} >
            <Typography className={`${classes.title} ${classes.hColor}`} component='p'>Hello, I'm Mike Manchee</Typography>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: '30px'}}>
            <Typography className={`${classes.underTitle} ${classes.hColor}`} component='p'>Puzzles, Solutions, Balance</Typography>
          </Grid>
        </Grid>
      </div>
      <Grid container direction='column' className={classes.root} spacing={5}>
        <Grid item container xs={6} direction='row' >
          <Grid item xs={12} md={4} className={classes.root}>                
            <Button onClick = { () => onChangePage('AboutMe') } startIcon={<Contacts />}><strong>About Me</strong></Button>
          </Grid>
          <Grid item xs={12} md={4} className={classes.root}>
            <Button onClick = { () => onChangePage('ProjectList') } startIcon={<FormatListNumbered />}><strong>Projects</strong></Button>
          </Grid>
          <Grid item xs={12} md={4} className={classes.root}>
            <Button onClick = { () => onChangePage('Future') } startIcon={<Build />}><strong>Future Work</strong></Button>
          </Grid>
        </Grid>
        <Grid item xs={8} className={classes.root}>
          <Typography className={classes.midTitle}>Thoughts on Me</Typography>
        </Grid>
        <Grid item container direction='row' xs={8} className={`${classes.root} ${classes.block}`}>
          <Grid item xs={12} md={4} className={classes.root}>
            <img src={image1} className={classes.imgTag}/>
          </Grid>
          <Grid item container direction='column' xs={12} md={8} spacing={4} className={classes.root}>
            <Grid item xs={8}>
              <Typography style={{ fontSize: '24px', fontWeight: 'bolder'}}>Passion for programming</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography style={{ fontSize: '16px'}}>I am passionate about problem-solving, learning, contributing, and thinking critically, creatively and thoughtfully about what <strong>solutions</strong> are being built. </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction='row' xs={8} className={`${classes.root} ${classes.block}`}>
          <Grid item container direction='column' xs={12} md={8} spacing={4} className={classes.root}>
            <Grid item xs={8}>
              <Typography style={{ fontSize: '24px', fontWeight: 'bolder'}}>Challenging ideas, <br />Leads to growth!</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography style={{ fontSize: '16px'}}>Exploring the world around us and questioning ideas, helps build a model of reality to navigate the world in mutually beneficial and <strong>positive</strong> ways.</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} className={classes.root}>
            <img src={image2} className={classes.imgTag}/>
          </Grid>
        </Grid>
        <Grid item container direction='row' xs={8} className={`${classes.root} ${classes.block}`}>
          <Grid item xs={12} md={4} className={classes.root}>
            <img src={image3} className={classes.imgTag}/>
          </Grid>
          <Grid item container direction='column' xs={12} md={8} spacing={4} className={classes.root}>
            <Grid item xs={8}>
              <Typography style={{ fontSize: '24px', fontWeight: 'bolder'}}>Knowledge and <br />Communication are Key</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography style={{ fontSize: '16px'}}>Developing thoughtful solutions to challenging problems, combined with knowledge and the ability to communicate that growth to others is my life <strong>Goal</strong>.</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} className={classes.root}>
          <Button onClick = { () => onChangePage('ProjectList') }>
            <Typography className={classes.midTitle}>Projects</Typography>
          </Button>
        </Grid>
        <Grid item container direction='row' xs={8} className={classes.root}>
          <Grid item container direction='column' xs={12} md={4} className={classes.root}>
            <Button endIcon={<GitHub />} href='https://github.com/mmanchee/jsDnD'><strong>jsDnD</strong></Button>
            <Paper>
              <a href='https://github.com/mmanchee/jsDnD'><img src={dnd} className={classes.sec6Img} /></a>
            </Paper>
          </Grid>
          <Grid item container direction='column' xs={12} md={4} className={classes.root}>
            <Button endIcon={<GitHub />} href='https://github.com/mmanchee/StarRacks2'><strong>Star Racks 2</strong></Button>
            <Paper>
              <a href='https://github.com/mmanchee/StarRacks2.1'><img src={star} className={classes.sec6Img} /></a>
            </Paper>
          </Grid>
          <Grid item container direction='column' xs={12} md={4} className={classes.root}>
            <Button endIcon={<GitHub />} href='https://github.com/mmanchee/good-food'><strong>Good Foods</strong></Button>
            <Paper>
              <a href='https://github.com/mmanchee/good-food-demo'><img src={good} className={classes.sec6Img} /></a>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
};

Home.propTypes = {
  onChangePage: PropTypes.func
} 

export default Home
