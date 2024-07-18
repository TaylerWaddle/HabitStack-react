import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <Outlet />
      <div className="nav-bar">
        <p>Link</p>
        <p>Link</p>
        <p>Link</p>
        <p>Link</p>
      </div>
    </Fragment>
  );
};

export default Navigation;
