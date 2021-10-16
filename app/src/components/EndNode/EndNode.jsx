import React from 'react';
// import { useState } from 'react';
import { Handle } from 'react-flow-renderer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "@fontsource/work-sans";
import { IconButton, Typography } from '@mui/material';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import { Colors } from '../../Colors';

function EndNode({ data }) {
  return (
    <>
      <Grid container spacing={0.5} direction="column" alignItems="flex-start">
        <Grid item>
          <IconButton onClick={() => {console.log("hel")}}>
            <ClearSharpIcon />
          </IconButton>
          <Typography variant="p"> {data.label} </Typography>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Box sx={{
                height: 100,
                width: 15,
                backgroundColor: Colors.red,
                borderRadius: '15px 0px 0px 15px'
            }}>
              <Handle
                type="target"
                position="left"
                id="a"
                style={{ width: '20px', top: '60%', height: '70px', background: 'none', border:'none' }}
                isConnectable={true}
              />
            </Box>
            <Box sx={{
                backgroundColor: '#21415E',
                border: '1px solid white',
                padding: 5,
                minHeight: '100px',
                color: 'white'
            }}>
                { data.body }
            </Box>
        </Grid>
      </Grid>
      
    </>
  );
}
  
  export default EndNode;
  