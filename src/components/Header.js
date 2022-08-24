import React from "react";

// css
import "../css/Header.css";

// Components
// import { Switch } from "./Switch";

const Header = () => {
  return (
    <div className="header">
      <div className="title-header-left">
        <span className="icon">✅</span>
        <span className="title-header"> TODO list</span>
      </div>
    </div>
  );
};

export { Header };
