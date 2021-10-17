// import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor/Editor';
// import PlotGraph from './components/ScatterPlot/PlotGraph';
import "@fontsource/work-sans";
import NavBar from './components/NavBar/NavBar'; 
import { BrowerRoute as Router, Route } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <NavBar title="Demo Canvas"/>
      {/* <Editor /> */}
      {/* <PlotGraph /> */}
    </div>
  );
}

export default Home;