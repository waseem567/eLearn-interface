import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label aria-checked={isChecked} role="switch" className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span className="slider">
        <span className="slider-inner"></span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
