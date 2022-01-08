import React, { useState } from "react";

// css
import "../css/Switch.css";

const Switch = (props) => {
  const [darkModeActive, setDarkModeActive] = useState(true);

  const handleClick = () => {
    setDarkModeActive(!darkModeActive);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={darkModeActive} onChange={handleClick} />
      <span className="slider round">{props.children}</span>
    </label>
  );
};

export { Switch };
