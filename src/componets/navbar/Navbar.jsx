import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navbar.css'

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#003b95"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <div className="name">Booking</div> 
          </Typography>
          <div className="buttons">
          <Button color="inherit" style={{backgroundColor:"white",marginLeft: "0.7rem",color: "#003580"}}>Register</Button>
          <Button color="inherit" style={{backgroundColor:"white",marginLeft: "0.7rem",color: "#003580"}}>Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar