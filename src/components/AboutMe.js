import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';

import mike from '../img/mikeheadshot.jpg'

function AboutMe() {
  return (
    <React.Fragment>
      <Grid container >
        <Grid item xs={12}>
          <a href='https://www.linkedin.com/in/mikemanchee/' ><LinkedIn /></a>
          <img src={mike} className='mikeImage'/>
        </Grid>
        <Grid item xs={12}>
          <Typography>Experience</Typography>          
          <Typography>Interest in Programming:</Typography>
          <Typography className='info'><strong>I have always wanted to use my brain in a job.</strong> Retail has never been mentally demanding, even in the management positions I have done. I am a naturally curious person and love problem solving and expanding my brain. Programming taps into all of those and more, or so far that I have seen with my experience. So, I joined Epicodus to further my knowledge and get the skills I need to be a Developer. Also, the education on diversity and career searching are not a bad side benifit!</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Job Experience:</Typography>
          <Typography className='info'><strong>I have been a jack-of-all-trades for most of my life.</strong> Retail Management, Delivery driver, Warehouse, Retail/Sales, and B2B Customer Servivice. The best time I have had though was my time as a basic programmer at a start-up. If you would to know more, you can go to my <a href="https://www.linkedin.com/in/mikemanchee">Linkedin</a> profile and read all about my job history.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Education:</Typography>
          <Typography>Chemeketa Community College</Typography>
          <ul className='info'>
            <li>Studies: <em>Graphic Design, Business Management, Accounting, Programming</em></li>
            <li>Dates: <em>1996-2004 (off and on)</em></li>
          </ul>
          <Typography>Self-training (work with SAM Advising)</Typography>
          <ul className='info'>
            <li>Studies: <em>HTML, CSS, JavaScript, PHP, MySQL</em></li>
            <li>Dates: <em>2012-2015</em></li>
          </ul>
          <Typography>Epicodus</Typography>
          <ul className='info'>
            <li>Studies: <em>HTML, CSS, JavaScript, C#/.NET, MySQL, React</em></li>
            <li>Dates: <em>2020-2021</em></li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography>More about Me</Typography>
          <ul className='info'>
            <li>I like Gaming: RPG, Puzzle games, and D&D</li>
            <li>I like learning on YouTube about Science, Politics, and lifes curiosities</li>
            <li> I like Movies and TV</li>
          </ul>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default AboutMe;