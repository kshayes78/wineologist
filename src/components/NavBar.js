import React from "react";
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";

function NavBar() {
  return (
    <header className="header">
      <Link to="/" className="link">
        {/* <MuiLink className="link" underline="hover" color="crimson" href="/">
         
          Home
        </MuiLink> */}
        Home
      </Link>

      <Link to="/wines" className="link">
        Wines
        {/* <MuiLink
          className="link"
          underline="none"
          color="crimson"
          // href="/wines"
        >
          Wines
        </MuiLink> */}
      </Link>

      <Link to="/mywines" className="link">
        {/* <MuiLink
          className="link"
          underline="hover"
          color="crimson"
          href="MyWines"
        >
          My Wines
        </MuiLink> */}
        {/* <MuiLink className="link" underline="hover" color="crimson">
          My Wines
        </MuiLink> */}
        My Wines
      </Link>

      <Link to="/signup" className="link">
        {/* <MuiLink
          className="link"
          underline="hover"
          color="crimson"
          href="signup"
        >
          Sign Out
        </MuiLink> */}
        Sign Out
        {/* <MuiLink className="link" underline="hover" color="crimson">
          Sign Up
        </MuiLink> */}
      </Link>
    </header>
  );
}

export default NavBar;
