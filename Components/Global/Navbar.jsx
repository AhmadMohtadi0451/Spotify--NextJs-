import Grid from "@mui/material/Grid";
import React from "react";
import AppBar from "@mui/material/AppBar";
import { IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "#101010" }}>
      <Toolbar
        sx={{
          marginLeft: "230px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid>
          <IconButton>
            <ArrowBackIosIcon sx={{ color: "#b2b2b2", fontSize: 20 }} />
          </IconButton>
          <IconButton>
            <ArrowForwardIosIcon sx={{ color: "#b2b2b2", fontSize: 20 }} />
          </IconButton>
        </Grid>
        <Grid sx={{ display: "flex", gap: "15px" }}>
          <Typography
            sx={{
              cursor: "pointer",
              alignSelf: "center",
              color: "#b2b2b2",
              fontSize: "14px",
              fontWeight: "bolder",
              "&:hover": {
                color: "white",
              },
            }}
          >
            Sign up
          </Typography>
          <Button
            sx={{
              backgroundColor: "white",
              color: "#000",
              borderRadius: "30px",
              ml: "10px",
              padding: "12px 30px",
              fontSize: "13px",
              fontWeight: "bolder",
              "&:hover": {
                backgroundColor: "white",

                padding: "13px 32px",
              },
            }}
          >
            Log in
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
