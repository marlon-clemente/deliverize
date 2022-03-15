import React, { useState } from "react";

import "./buttonGroup.css";

interface TypeButtonGroup {
  /** variant size component ". */
  variant?: "small";
  defaultValue?: Number;
}

const ButtonGroup: React.FC<TypeButtonGroup> = ({ variant, defaultValue }) => {
  const [value, setValue] = useState<Number>(defaultValue ? defaultValue : 0);

  const handleIncrement = () => setValue(Number(value) + 1);
  const handleDecrement = () => setValue(Number(value) - 1);

  return (
    <div className={variant === "small" ? "bt-g--small" : "bt-g"}>
      <button
        onClick={handleDecrement}
        className={value === 0 ? "bt-g__sides--disable" : "bt-g__sides"}
      >
        <img src="icons/vector-.svg" alt="-" />
      </button>
      <strong
        className={variant === "small" ? "bt-g__value--small" : "bt-g__value"}
      >
        {value}
      </strong>
      <button onClick={handleIncrement} className="bt-g__sides">
        <img src="icons/vector+.svg" alt="-+" />
      </button>
    </div>
  );
};

export default ButtonGroup;
