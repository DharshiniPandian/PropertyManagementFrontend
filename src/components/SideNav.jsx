import React from "react";
import Divider from "@mui/material/Divider";
import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import { NavLink, useLocation } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";

import dashboardIcon from "../assets/dashboard.png";
import leadIcon from "../assets/lead.svg";
import buildingIcon from "../assets/building.svg";
import ticketIcon from "../assets/ticket.svg";
import settingIcon from "../assets/settings.png";
import cloudIcon from "../assets/cloud.svg";
import documentIcon from "../assets/document.svg";
import peoplegroupIcon from "../assets/peoplegroup.svg";
import commentIcon from "../assets/comment.svg";
import reportIcon from "../assets/document.svg";

const drawerWidth = 270;
const topNavHeight = 54;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `73px;`,
  marginTop: `${topNavHeight}px`,
  padding:'0px',
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": {
    marginTop: `${topNavHeight}px`,
    ...((open && openedMixin(theme)) || closedMixin(theme)),
    background: "#333333 0% 0% no-repeat padding-box",
    opacity: 1,
    color: "#C1C5CB",
  },
}));

function SideNav({ open, handleDrawerOpen, handleDrawerClose }) {
  const theme = useTheme();
  const location = useLocation(); 

  const menuItems = [
    { text: "Dashboard", imgSrc: dashboardIcon, path: "/dashboard" },
    { text: "Company", imgSrc: peoplegroupIcon, path: "/company" },
    { text: "Owner", imgSrc: leadIcon, path: "/owner" },
    { text: "Property", imgSrc: buildingIcon, path: "/property" },
    { text: "Pricing", imgSrc: ticketIcon, path: "/pricing" },
    { text: "Setting", imgSrc: settingIcon, path: "/setting" },
    { text: "Data Management", imgSrc: cloudIcon, path: "/data-management" },
    { text: "Reports", imgSrc: reportIcon, path: "/reports" },
    { text: "Documents", imgSrc: documentIcon, path: "/documents" },
    { text: "Comments", imgSrc: commentIcon, path: "/comments" },
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <Box
        aria-label="open drawer"
        onClick={open ? handleDrawerClose : handleDrawerOpen}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          mb:'10px'
        }}
      >
       <IconButton>
  {open ? (
    <ChevronLeftIcon sx={{ color: "#FFFFFF",alignItems:'center',
        backgroundColor: "#5078E1", 
        borderRadius: "50%", p: 1}} />
  ) : (
    <ChevronRightIcon sx={{ color: "#FFFFFF",alignItems:'center',
        backgroundColor: "#5078E1", 
        borderRadius: "50%", p: 1 }} />
  )}
</IconButton>

      </Box>

      <Divider
              variant="middle"
              flexItem
              sx={{
                mx: 2,
                borderColor: '#4E5A6B',
                borderWidth: '1px',
              }}
            />

      <List>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path; 

          return (
            <ListItem key={item.text} disablePadding sx={{ display: "block", margin: '0px', padding:'0px',background:  isActive ?  '#4D4D4D 0% 0% no-repeat padding-box' : "transparent", alignItems:'center' }}>
              <NavLink
                to={item.path}
                style={{
                  textDecoration: "none", 
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    pt:0, 
                    justifyContent: open ? "initial" : "center",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      alignItems:'center',
                      backgroundColor: isActive ? "#5078E1" : "transparent",
                      padding: '0px',
                      mr: open ? '12px': '0px', 
                      borderRadius: "50%", 
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    <img src={item.imgSrc} alt={item.text} height="24px" width="24px"  style={{ padding: 0, margin: 0 }}/>
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0, color: isActive ? '#FFFFFF' : '#C1C5CB', font: 'normal normal normal 14px/19px Nunito Sans' }} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}

export default SideNav;
