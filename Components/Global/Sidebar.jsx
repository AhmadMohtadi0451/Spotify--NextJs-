import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material/";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Drawer } from "@mui/material";

const drawerWidth = 240;
const Sidebar = () => {
  return (
    <Box display="flex">
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography
          variant="h4"
          sx={{ ml: "20px", color: "white", mt: "25px" }}
        >
          Spotify
        </Typography>
        <List sx={{ mt: "50px" }}>
          <Box sx={{ marginBottom: "40px" }}>
            <ListItem
              sx={{ display: "flex", gap: "10px", height: "35px", mb: "10px" }}
            >
              <HomeIcon sx={{ color: "rgb(145, 145, 145)", fontSize: 30 }} />
              <Typography
                sx={{
                  cursor: "pointer",
                  color: "rgb(145, 145, 145)",
                  fontSize: "12px",
                  fontWeight: "bolder",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Home
              </Typography>
            </ListItem>
            <ListItem
              sx={{ display: "flex", gap: "10px", height: "35px", mb: "10px" }}
            >
              <SearchIcon sx={{ color: "#b2b2b2", fontSize: 30 }} />
              <Typography
                sx={{
                  color: "rgb(145, 145, 145)",
                  fontSize: "12px",
                  fontWeight: "bolder",
                  cursor: "pointer",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Search
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", gap: "10px", height: "35px" }}>
              <VideoLibraryIcon sx={{ color: "rgb(145, 145, 145)" }} />
              <Typography
                sx={{
                  color: "rgb(145, 145, 145)",
                  fontSize: "12px",
                  fontWeight: "bolder",
                  cursor: "pointer",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Your Library
              </Typography>
            </ListItem>
          </Box>
          <Box>
            <ListItem
              sx={{ display: "flex", gap: "10px", height: "35px", mb: "10px" }}
            >
              <AddBoxIcon sx={{ color: "#b2b2b2", fontSize: 30 }} />
              <Typography
                sx={{
                  color: "#b2b2b2",
                  fontSize: "12px",
                  fontWeight: "bolder",
                  cursor: "pointer",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Create Playlist
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", gap: "10px", height: "35px" }}>
              <FavoriteIcon sx={{ color: "#b2b2b2", fontSize: 30 }} />
              <Typography
                sx={{
                  color: "#b2b2b2",
                  fontSize: "12px",
                  fontWeight: "bolder",
                  cursor: "pointer",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Liked Songs
              </Typography>
            </ListItem>
          </Box>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
