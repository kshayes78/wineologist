import React from "react";
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";

function NavBar() {
  return (
    <header className="header">
      <Link to="/">
        <MuiLink className="link" underline="hover" color="crimson" href="/">
          {/* <MuiLink className="link" underline="hover" color="crimson"> */}
          Home
        </MuiLink>
      </Link>

      <Link to="/wines">
        <MuiLink
          className="link"
          underline="hover"
          color="crimson"
          href="/wines"
        >
          {/* <MuiLink className="link" underline="hover" color="crimson"> */}
          Wines
        </MuiLink>
      </Link>

      <Link to="/mywines">
        {/* <MuiLink
          className="link"
          underline="hover"
          color="crimson"
          href="MyWines"
        >
          My Wines
        </MuiLink> */}
        <MuiLink className="link" underline="hover" color="crimson">
          My Wines
        </MuiLink>
      </Link>

      <Link to="/signup">
        <MuiLink
          className="link"
          underline="hover"
          color="crimson"
          href="signup"
        >
          Sign Up
        </MuiLink>
        {/* <MuiLink className="link" underline="hover" color="crimson">
          Sign Up
        </MuiLink> */}
      </Link>
    </header>
  );
}

export default NavBar;
