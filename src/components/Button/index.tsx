import React, { ButtonHTMLAttributes, ReactNode } from "react";

import "./button.css";

interface TyppeButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: React.FC<TyppeButton> = ({ children }) => {
  return <div className="bt">{children}</div>;
};

export default Button;
