import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger menu icon
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

export default function Sidebar() {

  // state for opening the menu
  const [open, setOpen] = React.useState(false);

  // handler for the state changes
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // array of menu items with literal objects for each line
  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Books", icon: <BookIcon />, path: "/books" },
    { text: "Users", icon: <PersonIcon />, path: "/users" },
    { text: "Borrows", icon: <AssignmentIcon />, path: "/borrows" },
  ];

  // render component that will show depending on state
  const DrawerList = (
    // whats role?
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              {/* link is something from reactrouterdom */}
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {/* Hamburger Icon */}
      <IconButton
        color="inherit"
        edge="start"
        // change the state of the menu
        onClick={toggleDrawer(true)}
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer */}
      {/* when closed change the state again */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
