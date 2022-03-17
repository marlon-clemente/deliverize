import React from "react";
import { Popover as Pop } from "react-tiny-popover";
import { usePopoverCard } from "../../hooks/usePopoverCard";
import "./popover.css";

interface TypepPopover {
  prodTitle?: string;
}

const Popover: React.FC<TypepPopover> = () => {
  const { isShowPopover, dataPropover } = usePopoverCard();

  const contentPopover = () => (
    <>
      <div className="c-popover" />
      <div className="c-popover__header">Adicionado com sucesso</div>

      <div className="c-popover__body">
        <div className="c-popover__title">{dataPropover?.titleProduct}</div>
        <div className="c-popover__subtitle">Ingredientes</div>
        <ul className="c-popover__list">
          {[dataPropover?.ingredients].map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <Pop
      content={contentPopover()}
      positions={["bottom"]}
      /* Define se o Popover é visivel */
      isOpen={isShowPopover}
    >
      <div />
    </Pop>
  );
};

export default Popover;
