import React, { useState } from "react";

import "./boxInputRadio.css";

type TypeBoxInputRadio = {
  setValueBoxInputRadio: React.Dispatch<React.SetStateAction<boolean>>;
};

const BoxInputRadio: React.FC<TypeBoxInputRadio> = ({
  setValueBoxInputRadio,
}) => {
  const [controlValue, setControlValue] = useState<boolean>(true);

  const handleYes = () => {
    setValueBoxInputRadio(true);
    setControlValue(!controlValue);
  };

  const handleNo = () => {
    setValueBoxInputRadio(false);
    setControlValue(!controlValue);
  };

  return (
    <div className="c-input-box">
      <label className="c-input-box__label">
        <p className="c-input-box__p">Sim</p>
        <input
          className="c-input-box__check"
          type="radio"
          checked={!controlValue}
          onChange={handleYes}
        />
      </label>
      <label className="c-input-box__label">
        <p className="c-input-box__p">Não</p>
        <input type="radio" checked={controlValue} onChange={handleNo} />
      </label>
    </div>
  );
};

export default BoxInputRadio;
