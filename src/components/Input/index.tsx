import { InputHTMLAttributes } from "react";
import "./input.css";

interface TypeInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<TypeInput> = (props) => {
  return (
    <div className="inputComponent">
      <input {...props} />
      <i />
    </div>
  );
};

export default Input;
