import { SelectHTMLAttributes } from "react";

import "./dropdown.css";

interface TypeDropdown {
  label?: string;
  props?: SelectHTMLAttributes<HTMLSelectElement>;
}

const Value = "R. Antonio Braune, 222";

const Dropdown = ({ label, props }: TypeDropdown) => {
  return (
    <div className="dropdownComponent">
      {label && <label>{label}</label>}
      <select {...props}>
        <option value={Value}>{Value}</option>
      </select>
    </div>
  );
};

export default Dropdown;
