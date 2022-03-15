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
        <span className="title-header"> Lista de pendientes</span>
      </div>
      <div className="darkMode">
        {/* <Switch>
          <div className="sun">
            <span className="toggleIcon">🌞</span>
          </div>
          <div className="moon">
            <span className="toggleIcon">🌛</span>
          </div>
        </Switch> */}
      </div>
    </div>
  );
};

export { Header };
