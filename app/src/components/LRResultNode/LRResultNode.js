import React from "react";
import ScatterPlot from "../ScatterPlot/ScatterPlot";
import * as d3 from "d3";
import data from '../../data/sample.csv';
import { Box } from "@mui/system";
// import { spacing } from "@mui/system";
// import { Divider } from "@mui/material";

export default class LRResultNode extends React.Component {
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

  componentDidMount() {
      // Load data when the component mounts
      d3.csv(data, (err, data) => {
        this.setState({ data: data });
    });
  }
  render() {
    function getAllData (x, y, data) {
      const allData = data.map((d) => {
        return {
            x: parseInt(d[x], 10),
            y: parseInt(d[y], 10),
            label: d.county + ", " + d.state
        }; 
      });
      return allData;
    }

    return (
      <div className="container">
        { this.props.nodeId !== "" ? 
        <> 
            <div className="control-container">
              <div className="control-wrapper">
                <label htmlFor="xVar">X Variable:</label>
                {/* <select id="xVar" value={this.state.xVar} className="custom-select" onChange={(d) => this.setState({ xVar: d.target.value })}>
                  {this.state.options.map((d) => {
                      return <option key={d}>{d}</option>
                  })}
                </select> */}
                <div style={{display: "inline"}}>&nbsp;{this.state.xVar}</div>
              </div>

            <div className="control-wrapper">
              <label htmlFor="yVar">Y Variable:</label>
              {/* <select id="yVar" value={this.state.yVar} className="custom-select" onChange={(d) => this.setState({ yVar: d.target.value })}>
                {this.state.options.map((d) => {
                    return <option key={d}>{d}</option>
                })}
              </select> */}
              <div style={{display: "inline"}}>&nbsp;{this.state.yVar}</div>
            </div>                        
          </div>
          <p></p>
          <ScatterPlot
            xTitle={this.state.xVar}
            yTitle={this.state.yVar}
            data={getAllData(this.state.xVar, this.state.yVar, this.state.data)}
            />
         </> : <><Box>Please connect a linear regression node</Box></>

        }
        </div>
    )
  }
}