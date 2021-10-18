// import logo from './logo.svg';
import './App.css';
// import Editor from './components/Editor/Editor';
// import PlotGraph from './components/ScatterPlot/PlotGraph';
import "@fontsource/work-sans";
// import NavBar from './components/NavBar/NavBar'; 
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import EditorPage from './EditorPage';

function App() {
  return (
    // <div className="App">
    //   <NavBar title="Demo Canvas"/>
    //   <Editor />
    //   {/* <PlotGraph /> */}
    // </div>

    <BrowserRouter>
      <div>
        {/* <NavBar title="Demo Canvas"/> */}
        <Route exact path='/' component={Home} />
        <Route path='/editor' component={EditorPage} />
      </div> 
    </BrowserRouter>
  );
}

export default App;
