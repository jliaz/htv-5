import React from 'react';
import './AddNodeSidebar.css';
import Switch from '@mui/material/Switch';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';

const onDragStart = (event, nodeType) => {
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.effectAllowed = 'move';
};

const newNodeStyle = {
  display: 'flex', 
  justifyContent:'center', 
  alignItems:'center', 
  paddingRight:'10px', 
  paddingLeft:'10px'
}

const AddNodeSidebar = () => {

  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <FormControlLabel style={{padding: "0 10px 0 10px", marginRight:"0px"}}
        control={<Switch checked={checked} onChange={handleChange} />}
        label="+ Node"
      />
        <Collapse orientation="horizontal" in={checked}>
          <Box sx={{
            position: 'absolute', 
            left: 15, 
            top: 90, 
            width: 300, 
            padding: '0px 10px 30px 10px', 
            height: '72vh',
            overflowY:'scroll',
            backgroundColor: '#627f9a5a',
            zIndex: -1
            }}>
            <h1>Node Pocket</h1>
            <div className="description">Drag and drop nodes onto your canvas</div>
            <h4 style={{textAlign:"left"}}>Input Nodes</h4>
            <Grid container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}>
              <Grid item>
                <div className="flowboat-node start-node" style={newNodeStyle} onDragStart={(event) => onDragStart(event, 'fileUploadNode')} draggable>
                  <div className="pocket-node-text">File Upload</div>
                </div>
              </Grid>
              <Grid item>
                <div className="flowboat-node start-node" style={newNodeStyle} onDragStart={(event) => onDragStart(event, 'voiceUploadNode')} draggable>
                  <div className="pocket-node-text">Voice Upload</div>
                </div>
              </Grid>
            </Grid>
           
            <h4 style={{textAlign:"left"}}>Function Nodes</h4>
            <Grid container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}>
                  <Grid item>
                    <div className="flowboat-node middle-node" style={newNodeStyle} draggable>
                      <div className="pocket-node-text">Linear Regression</div>
                    </div>
                </Grid>
                <Grid item>
                    <div className="flowboat-node middle-node" style={newNodeStyle} onDragStart={(event) => onDragStart(event, 'middleNode')} draggable>
                      <div className="pocket-node-text">Multilinear Regression</div>
                    </div>
                </Grid>
            </Grid>
            
            <h4 style={{textAlign:"left"}}>Output Nodes</h4>
            <Grid container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}>
              <Grid item>
                <div className="flowboat-node end-node" style={newNodeStyle} onDragStart={(event) => onDragStart(event, 'endNode')} draggable>
                  <div className="pocket-node-text">Scatter Plot</div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Collapse>
    </>
  );
};

export default AddNodeSidebar