import { InputHTMLAttributes } from "react";
import "./input.css";

interface TypeInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<TypeInput> = (props) => {
  return (
    <div className="c-input">
      <input className="c-input__input" {...props} />
      <i />
    </div>
  );
};

export default Input;
