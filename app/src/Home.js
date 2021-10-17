// import logo from './logo.svg';
import './App.css';
import "@fontsource/work-sans";
import HomePageNavBar from './components/HomePageNavBar/HomePageNavBar';
import { Grid } from '@mui/material';
import jumbotronImg from './images/jumbotron.png';
import easyToUse from './images/easy-to-use.png';
import nodePack from './images/node-pack.png';
import oneConnect from './images/one-connect.png';
import guide from './images/guide.png';
import IconButton from '@mui/material/IconButton';
import githubIcon from './images/GitHub-Mark-Light-64px.png'

function Home() {
  return (
    <div className="App">
      <HomePageNavBar title="flowboat"/>
      <div className="home-page-jumbotron">
        <Grid container xs={12} justifyContent="center">
          <Grid xs={4}  mt={7}>
            <h1>Machine Learning and Data Analysis with zero line of code</h1>
            <h2>flowboat - A node based application that supports allows you to do work on ML/DA in a painless way</h2>
          </Grid>
          <Grid xs={6}>
            <img src={jumbotronImg} alt="jumbotron" />
          </Grid>
        </Grid>
      </div>
      <div className="home-page-section1">
        <h1 style={{textAlign:"center", paddingBottom:"50px"}}>Features</h1>
        <Grid container xs={12} justifyContent="center">
          <Grid xs={5}>
            <img src={easyToUse} alt="easy to use" />
          </Grid>
          <Grid xs={3}  mt={7}>
            <h1>Easy to use UI</h1>
            <h2>Drag 'n' drop to create your own amazing Machine Learning workflow</h2>
          </Grid>
        </Grid>
        <Grid container xs={12} justifyContent="center" mt={10}>
          <Grid xs={3} ml={34} mr={24} mt={12}>
            <h1>Abundant Node Pack</h1>
            <h2>Find the nodes you need here. Use them to build whatever you want!</h2>
          </Grid>
          <Grid xs={3}>
            <img src={nodePack} alt="node pack" />
          </Grid>
        </Grid>
        <Grid container xs={12} justifyContent="center" mt={10}>
          <Grid xs={5}>
            <img src={oneConnect} alt="easy to use" />
          </Grid>
          <Grid xs={3} mt={7} ml={6}>
            <h1>Data Visualizer</h1>
            <h2>Visualize your dataset in just one connection.</h2>
          </Grid>
        </Grid>
        <Grid container xs={12} justifyContent="center" mt={10}>
          <Grid xs={3} ml={24} mr={20} mt={12}>
            <h1>Beginner Friendly Guide</h1>
            <h2>Take a look at the general guide by clicking 'Help' on the top right corner before you start.</h2>
          </Grid>
          <Grid xs={3}>
            <img src={guide} alt="node pack" />
          </Grid>
        </Grid>
      </div>
      <footer className="home-page-footer">
        <Grid xs={12} mt={7}>
          <IconButton sx={{marginBottom:'3px', paddingTop:"0px"}} href="https://github.com/jliaz/htv-5">
            <a href="https://github.com/jliaz/htv-5" target="_blank" rel="noopener noreferrer">            
              <img src={githubIcon} alt="github icon"></img>
            </a>
          </IconButton>
          <h3>© Copyright 2021 flowboat</h3>
        </Grid>
      </footer>
    </div>
  );
}

export default Home;