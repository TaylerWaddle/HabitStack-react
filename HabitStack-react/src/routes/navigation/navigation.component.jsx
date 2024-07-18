import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <Outlet />
      <div className="nav-bar">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/stacks">
          Stacks
        </Link>
        <Link className="nav-link" to="/pillars">
          Pillars
        </Link>
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
      </div>
    </Fragment>
  );
};

export default Navigation;
