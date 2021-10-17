import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import dropIcon from './dropIcon.svg';
// import addNode from './addNode.svg';
import AddNodeSidebar from '../AddNodeSidebar/AddNodeSidebar';

function NavBar(props) {
  return (
      <Box sx={{ flexGrow: 1, display: 'flex', borderBottom: '2px solid #627F9A', margin:'0px', height:'2 0px', width:'100%', alignItems:'center', position:'absolute', zIndex:'9999'}}>
        <AppBar position="static" elevation={0} sx={{fontFamily: 'Work-sans', backgroundColor:'#194769'}}>
          <Toolbar  >
            <IconButton sx={{marginBottom:'3px'}}>
              <img src={dropIcon} alt="drop icon"/>
            </IconButton>
            <AddNodeSidebar/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:'center'}}>
              {props.title}
            </Typography>
            <Button color="inherit" sx={{ textTransform: 'none' }}>Share</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>View</Button>
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default NavBar