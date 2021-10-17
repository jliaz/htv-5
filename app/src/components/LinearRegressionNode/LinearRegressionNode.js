import React from "react";
// import ScatterPlot from "../ScatterPlot/ScatterPlot";
// import * as d3 from "d3";
// import data from '../../data/sample.csv';
import { Box } from "@mui/system";
// import { spacing } from "@mui/system";
// import { Divider } from "@mui/material";



function getData (props) {
  let fetch = require('node-fetch');

  fetch('http://localhost:5000/getLinearRegression', {
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
      "json_data": props.data, 
      "x_coord_name": "percasian",
      "y_coord_name": "percwhite"})
  }).then(response => {
    return response.json();
  }).catch(err => {console.log(err);});
}



export default class LinearRegressionNode extends React.Component {
  constructor(props) {
      super(props);

      // Set initial state
      this.state = {
          data: [],
          options: [],
          allData: [],
          xVar: "percprof",
          yVar: "percollege"
      };
  }

  componentDidUpdate(prevProps) {
    if (this.props.nodeId !== prevProps.nodeId) {
      const localData = localStorage.getItem(`${this.props.nodeId}_data`);
      console.log("localData: ", localData, " id: ", this.props.nodeId);
      if (localData !== undefined && localData !== "undefined" && this.props.nodeId !== "" && localData.data !== null) {
        const data = JSON.parse(localData).data;
        let options = data.length === 0 ? [] : Object.keys(data[0]);
        console.log("options", options);
        options = options.filter((d) => d !== "county" && d !== "state");
        this.setState({ 
          data: JSON.parse(localData).data,
          options
        });
      }
    }
  }

  componentDidMount() {
      // Load data when the component mounts
      const localData = localStorage.getItem(`${this.props.nodeId}_data`);
      console.log("localData: ", localData, " id: ", this.props.nodeId);
      if (localData !== undefined && localData !== "undefined" && this.props.nodeId !== "" && localData.data !== null) {
        const data = JSON.parse(localData).data;
        let options = data.length === 0 ? [] : Object.keys(data[0]);
        console.log("options", options);
        options = options.filter((d) => d !== "county" && d !== "state");
        this.setState({ 
          data: JSON.parse(localData).data,
          options
        });
        getData(data)
      }
      // d3.csv('./data/sample.csv').then(data => this.setState({ data }));
  }

  getData


  render() {
    // function getAllData (x, y, data) {
    //   const allData = data.map((d) => {
    //     return {
    //       x: parseInt(d[x], 10),
    //       y: parseInt(d[y], 10),
    //       label: d.county + ", " + d.state
    //     }; 
    //   });
    //   return allData;
    // }

    return (
      <div className="container">
        { this.props.nodeId !== "" ? 
          <> 
            <div className="control-container">
              <div className="control-wrapper">
                <label htmlFor="xVar">X Variable:</label>
                <select id="xVar" value={this.state.xVar} className="custom-select" onChange={(d) => this.setState({ xVar: d.target.value })}>
                  {this.state.options.map((d) => {
                      return <option key={d}>{d}</option>
                  })}
                </select>
              </div>

              <div className="control-wrapper">
                <label htmlFor="yVar">Y Variable:</label>
                <select id="yVar" value={this.state.yVar} className="custom-select" onChange={(d) => this.setState({ yVar: d.target.value })}>
                  {this.state.options.map((d) => {
                      return <option key={d}>{d}</option>
                  })}
                </select>
              </div>                        
            </div>
            <p></p>
            {/* <ScatterPlot
              xTitle={this.state.xVar}
              yTitle={this.state.yVar}
              data={getAllData(this.state.xVar, this.state.yVar, this.state.data)}
              /> */}
          </> : <><Box>Please connect a file node</Box></>

        }
      </div>
    )
  }
}

