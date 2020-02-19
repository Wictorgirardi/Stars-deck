import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import AddIcon from "@material-ui/icons/Add";
import TimelineIcon from "@material-ui/icons/Timeline";

export const mainListItems = (
  <div>
    <a href="/home" style={{ textDecoration: 'none', color: "#757575" }}> 
    <ListItem button>
      <ListItemIcon>
        <TimelineIcon />
      </ListItemIcon>
      <ListItemText primary="Ranking" />
    </ListItem>
    </a>
    <a href="/Eventos" style={{ textDecoration: 'none', color: "#757575" }}> 
    <ListItem button>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Adicionar eventos" />
    </ListItem>
    </a>
    
  </div>
);

export const secondaryListItems = <div></div>;
