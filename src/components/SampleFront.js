import React, { Fragment, useEffect, useState } from 'react';
import { Button, Grid, TextField, Typography, Paper, Icon, ButtonGroup, InputBase, Divider, MenuList, MenuItem, FormControl, InputLabel, Select } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Work, Add, Search, School } from '@material-ui/icons';

// images for page
const image1 = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97";
const image2 = "https://images.unsplash.com/photo-1540745291638-2c71059043e5";
const image3 = "https://images.unsplash.com/photo-1594312915251-48db9280c8f1";
const logo = "../../../images/JSMlogoBlue.png";
const office1a = "../../../images/swagger/office1.jpeg";
const office2a = "../../../images/swagger/office2.jpeg";
const office3a = "../../../images/swagger/office3.jpeg";

const ColorButton = withStyles(() => ({
  root: {
    color: 'rgb(255, 255, 255)',
    height: '54px',
    backgroundColor: '#3e2dbd',
    '&:hover': {
      backgroundColor: '#3325a1',
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1
  },
  form: {
    width: '59vw',
    backgroundColor: theme.palette.background.paper,
  },
  headerText: {
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    top: '20vh',
    left: '50%',
    zIndex: '22'
  },
  searchButton: {
    borderRadius: '3px',
    color: 'white',
    minWidth: '10vw',
    margin: '1% 0 1% 1%'
  },
  inputBox: {
    fontSize: '24px',
    minWidth: '15vw',
    margin: '1% 0.5% 1% 1%'
  },
  hColor: {
    color: 'white', 
  },
  title: {
    fontSize: '36px',
    paddingTop: '25vh',
    fontWeight: 'bolder'
  },
  banner: {
    backgroundColor: 'black',
    position: 'relative',
    height: '70vh',
    overflow: 'hidden'
  },
  topBanner: {
    height: '70vh',
    opacity: '0.5',
  },
  office1: {
    background: `url(${office1a}) no-repeat`,
    backgroundPosition: 'center bottom',
  },
  office2: {
    background: `url(${office2a}) no-repeat`,
    backgroundPosition: 'center center',
  },
  office3: {
    background: `url(${office3a}) no-repeat`,
    backgroundPosition: 'center center',
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
  logoImg: {
    opacity: '.3'
  }
}));

const Splash = () => {
  const classes = useStyles();

  const [searchParam, setSearchParam] = useState('Jobs')

  const changeSearchParam = (event) => {
    setSearchParam(event.target.value)
}

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
            <Typography className={`${classes.title} ${classes.hColor}`} component='p'>The Job Hunt Reimagined</Typography>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: '30px'}}>
            <Typography className={`${classes.hColor}`} component='p'>Some small text</Typography>
          </Grid>
          <Grid item container xs={12} spacing={2} className={classes.form}>
            <Grid item xs={12} sm={6} md={3}>
              <Select
                  native
                  value={searchParam}
                  onChange={changeSearchParam}
                  label="Search for:"
                  fullWidth
                  variant='outlined'
                  inputProps={{
                      name: 'jobpostings',
                      id: 'outlined-experiencelevel-native-simple',
                  }}
              >
                <option aria-label="None" value="" />
                <option value={'Jobs'}>Jobs</option>
                <option value={'Companies'}>Companies</option>
                <option value={'Schools'}>Schools</option>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField id="keywords" label="keywords" variant='outlined' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField id="location" label="Location" variant='outlined' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ColorButton type="submit" aria-label="search" fullWidth>
                {/* <SearchIcon style={{fontSize: '40px'}} /> */}
                Find {searchParam}!
              </ColorButton>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Grid container direction='column' className={classes.root} spacing={5}>
        <Grid item container xs={6} direction='row' >
          <Grid item xs={12} md={3} className={classes.root}>                
            <Button startIcon={<Work />}>View Open Jobs</Button>
          </Grid>
          <Grid item xs={12} md={3} className={classes.root}>
            <Button startIcon={<Add />}>Post Jobs</Button>
          </Grid>
          <Grid item xs={12} md={3} className={classes.root}>
            <Button startIcon={<Search />}>Recruit on Jobs</Button>
          </Grid>
          <Grid item xs={12} md={3} className={classes.root}>
            <Button startIcon={<School />}>Schools</Button>
          </Grid>
        </Grid>
        <Grid item xs={8} className={classes.root}>
          <Typography className={classes.midTitle}>This is the beginning of the Features Section</Typography>
        </Grid>
        <Grid item container direction='row' xs={8} className={`${classes.root} ${classes.block}`}>
          <Grid item xs={12} md={4} className={classes.root}>
            <img src={image1} className={classes.imgTag}/>
          </Grid>
          <Grid item container direction='column' xs={12} md={8} spacing={4} className={classes.root}>
            <Grid item xs={8}>
              <Typography style={{ fontSize: '24px', fontWeight: 'bolder'}}>Nullam sit amet fermentum erat</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography style={{ fontSize: '16px'}}>a congue quam. Morbi vitae faucibus purus. Quisque eu commodo risus, non fringilla libero. Nulla faucibus neque vel eros accumsan.</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction='row' xs={8} className={`${classes.root} ${classes.block}`}>
          <Grid item container direction='column' xs={12} md={8} spacing={4} className={classes.root}>
            <Grid item xs={8}>
              <Typography style={{ fontSize: '24px', fontWeight: 'bolder'}}>Nullam sit amet fermentum erat</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography style={{ fontSize: '16px'}}>a congue quam. Morbi vitae faucibus purus. Quisque eu commodo risus, non fringilla libero. Nulla faucibus neque vel eros accumsan.</Typography>
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
              <Typography style={{ fontSize: '24px', fontWeight: 'bolder'}}>Nullam sit amet fermentum erat</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography style={{ fontSize: '16px'}}>a congue quam. Morbi vitae faucibus purus. Quisque eu commodo risus, non fringilla libero. Nulla faucibus neque vel eros accumsan.</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} className={classes.root}>
          <Typography className={classes.midTitle}>JobsMight has partnered with several companies.</Typography>
        </Grid>
        <Grid item container direction='row' xs={8} spacing={2} className={`${classes.root} ${classes.block}`}>
          <Grid item xs={6} sm={4} md={2} className={classes.root}>
            <img src={logo} className={classes.logoImg}/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} className={classes.root}>
            <img src={logo} className={classes.logoImg}/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} className={classes.root}>
            <img src={logo} className={classes.logoImg}/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} className={classes.root}>
            <img src={logo} className={classes.logoImg}/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} className={classes.root}>
            <img src={logo} className={classes.logoImg}/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} className={classes.root}>
            <img src={logo} className={classes.logoImg}/>
          </Grid>
        </Grid>
        <Grid item xs={8} className={classes.root}>
          <Typography className={classes.midTitle}>Here are some links to parts of the site.</Typography>
        </Grid>
        <Grid item container direction='row' xs={8} className={classes.root}>
          <Grid item container direction='column' xs={12} md={4} className={classes.root}>
            <Typography>Scorecards</Typography>
            <a href='/'><img src={image1} className={classes.sec6Img} /></a>
          </Grid>
          <Grid item container direction='column' xs={12} md={4} className={classes.root}>
            <Typography>Schools</Typography>
            <a href='/'><img src={image2} className={classes.sec6Img} /></a>
          </Grid>
          <Grid item container direction='column' xs={12} md={4} className={classes.root}>
            <Typography>About</Typography>
            <a href='/'><img src={image3} className={classes.sec6Img} /></a>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
};

export default Splash
