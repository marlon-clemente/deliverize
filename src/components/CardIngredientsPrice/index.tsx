import React from "react";
import { TypeItemsIngredients } from "../../types";
import ButtonGroup from "../ButtonGroup";

import "./cardIngredientsPrice.css";

type TypeCardIngredientsPrice = {
  items: Array<TypeItemsIngredients>;
};

const CardIngredientsPrice: React.FC<TypeCardIngredientsPrice> = ({
  items,
}) => {
  return (
    <div className="c-card-ing">
      {items.map((i: TypeItemsIngredients) => (
        <>
          <div className="c-card-ing__item">
            <div className="c-card-ing__item__c-left">
              <strong className="c-card-ing__item__nm-item">{i.nm_item}</strong>
              <strong className="c-card-ing__item__vl-item">
                {"+ R$"}
                {/* DUAS CASAS DECIMAIS E 
              TROCA O PONTO PELA VIRGULA */}
                {i.vl_item.toFixed(2).replace(".", ",")}
              </strong>
            </div>
            <div className="c-card-ing__item__c-right">
              <ButtonGroup variant="small" />
            </div>
          </div>
          <div className="c-card-ing__divider" />
        </>
      ))}
    </div>
  );
};

export default CardIngredientsPrice;
