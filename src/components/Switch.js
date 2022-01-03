import React, { useState } from "react";

// css
import "../css/Switch.css";

const Switch = () => {
  const [darkModeActive, setDarkModeActive] = useState(true);

  const handleClick = () => {
    setDarkModeActive(!darkModeActive);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={darkModeActive} onChange={handleClick} />
      <span className="slider round">
        <div className="sun">
          <span className="toggleIcon">🌞</span>
        </div>
        <div className="moon">
          <span className="toggleIcon">🌛</span>
        </div>
      </span>
    </label>
  );
};

export { Switch };
