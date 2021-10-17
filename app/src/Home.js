// import logo from './logo.svg';
import './App.css';
import "@fontsource/work-sans";
import HomePageNavBar from './components/HomePageNavBar/HomePageNavBar';
import { Grid, Container } from '@mui/material';
import jumbotronImg from './images/jumbotron.png';

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
        <Grid container xs={12}>
          <Grid xs={6}  mt={7}>
            <h1>Machine Learning and Data Analysis with zero line of code</h1>
            <h2>flowboat - A node based application that supports allows you to do work on ML/DA in a painless way</h2>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;