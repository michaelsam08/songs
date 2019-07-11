import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "start",
    height: "100%"
  },
  button: {
    minHeight: 25,
    border: "2px solid green"
  }
});
const SideNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavLink className={classes.button} to="/">
        <button>Home</button>
      </NavLink>

      <NavLink className={classes.button} to="/AboutMe">
        <button>About Me</button>
      </NavLink>

      <NavLink className={classes.button} to="/Resume">
        <button>Resume</button>
      </NavLink>
    </div>
  );
};

export default SideNav;
