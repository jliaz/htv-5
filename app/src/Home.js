// import logo from './logo.svg';
import './App.css';
import "@fontsource/work-sans";
import HomePageNavBar from './components/HomePageNavBar/HomePageNavBar';
import { Grid, Container } from '@mui/material';

function Home() {
  return (
    <div className="App">
      <HomePageNavBar title="flowboat"/>
      <div className="home-page-jumbotron">
        
      </div>
    </div>
  );
}

export default Home;