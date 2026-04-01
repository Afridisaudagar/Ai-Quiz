import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button onClick={() => navigate("/user")}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => navigate("/quiz")}>
          <ListItemText primary="Take Quiz" />
        </ListItem>
        <ListItem button onClick={() => navigate("/admin")}>
          <ListItemText primary="Admin Panel" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;