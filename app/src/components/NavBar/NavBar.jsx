import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import dropIcon from './dropIcon.svg';
import flowboatLogo from './flowboatLogo.svg'
import AddNodeSidebar from '../AddNodeSidebar/AddNodeSidebar';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgb(98, 127, 154)',
  border: '2px solid black',
  boxShadow: 24,
  p: 4,
};

const titleStyle = {
  fontFamily: 'Work Sans',
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '20px',
  marginBottom: '5px'
}


const imgStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const helpStyle = {
  fontSize: '15px',
  fontFamily: 'Work Sans',
  color: 'white',
  lineHeight: '1.7',
  justifyText:'center',
  padding: '10px',
  paddingTop: 0
}

function NavBar(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpenHelp = () => setOpen(true);
  const handleCloseHelp = () => setOpen(false);

  return (
      <Box sx={{ flexGrow: 1, display: 'flex', borderBottom: '2px solid #627F9A', margin:'0px', height:'2 0px', width:'100%', alignItems:'center', position:'absolute', zIndex:'9999'}}>
        <AppBar position="static" elevation={0} sx={{fontFamily: 'Work-sans', backgroundColor:'#194769'}}>
          <Toolbar  >
            <IconButton sx={{marginBottom:'3px', paddingTop:"0px"}} href="/">
              <img src={dropIcon} alt="drop icon"/>
            </IconButton>
            <AddNodeSidebar/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:'center'}}>
              {props.title}
            </Typography>
            <Button color="inherit" sx={{ textTransform: 'none' }}>Share</Button>
            <Button onClick={handleOpenHelp} color="inherit" sx={{ textTransform: 'none' }}>Help</Button>
            <Modal 
              open={open}
              onClose={handleCloseHelp}
            >
              <Box sx={style}>
                <Typography sx={titleStyle}>
                  A guide to
                </Typography>
                <img src={flowboatLogo} alt='flowboat logo' style={imgStyle}/>
                <Typography sx={helpStyle}>
                  <ul style={{padding: '3px'}}>
                    <li>Click on a node and press backspace to delete it</li>
                    <li>Click on <i>+Node</i> on the navigation bar to toggle the Node Pocket Menu </li>
                    <li>Drag and drop nodes from the Node Pocket onto the canvas </li>
                    <li>To link two nodes together, click and drag from the coloured tab 
                    of one node to another node</li>
                    <li>Shift and drag to select multiple nodes</li>
                  </ul>
                </Typography>
              </Box>
            </Modal>
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default NavBar