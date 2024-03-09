import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { History } from '@mui/icons-material';

function Navbar() {
  return (
    <AppBar position="static">
      <div style={{ padding: '0 24px', backgroundColor: "#F5F6FA", color: "#000" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            OCR
          </Typography>
          <IconButton color="inherit" aria-label="history">
            <History />
          </IconButton>
        </Toolbar>
      </div>
    </AppBar>
  );
}

export default Navbar;
