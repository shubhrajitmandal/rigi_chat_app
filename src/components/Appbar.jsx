import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Appbar = () => {
  const authenticated = localStorage.getItem("token");

  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <AppBar position="static" color="primary" sx={{ px: { xl: 20, lg: 0 } }}>
      <Toolbar>
        <Typography
          color="inherit"
          variant="h4"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          RIGI
        </Typography>
        <Button color="inherit" sx={{ fontSize: 20 }}>
          About
        </Button>
        <Button color="inherit" sx={{ fontSize: 20 }}>
          Contact
        </Button>
        {authenticated && (
          <Button color="inherit" sx={{ fontSize: 20 }} onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
