import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <NavLink to="/AboutMe">About Me</NavLink>
      <NavLink to="/Resume">Resume</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
    </div>
  );
}
