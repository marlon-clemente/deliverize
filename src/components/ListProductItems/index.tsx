import React, { useState } from "react";
import { TypeIngredients } from "../../types";
import BoxInputRadio from "../BoxInputRadio";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import CardIngredientsPrice from "../CardIngredientsPrice";

import "./listProductItems.css";

type TypeListProductItems = {
  itens: Array<TypeIngredients>;
};

const ListProductItems: React.FC<TypeListProductItems> = ({ itens }) => {
  const [valueBoxInputRadio, setValueBoxInputRadio] = useState<boolean>(false);

  return (
    <div className="c-list-prod">
      <div className="c-list-prod__body">
        {itens.map((i: TypeIngredients) => (
          <>
            <div className="c-list-prod__body__header-list">
              <strong className="c-list-prod__header-list__title">
                {/* !!! CONDIÇÃO CRIADA PARA
                MANTER INFORMAÇÃO REAL DA
              INTEFACE */}
                {i.group === "Ingredientes Extras" ? (
                  <>Adicionar Ingredientes</>
                ) : (
                  i.group
                )}
              </strong>
              <p className="c-list-prod__header-list__max-items">
                {i.type === "number" && <>Até {i.max_itens} ingredientes</>}
              </p>
            </div>
            {i.type === "boolean" && (
              <BoxInputRadio setValueBoxInputRadio={setValueBoxInputRadio} />
            )}
            {i.type === "number" && <CardIngredientsPrice items={i.itens} />}
          </>
        ))}
      </div>
      <div className="c-list-prod__footer">
        <ButtonGroup />
        <Button>Adicionar</Button>
      </div>
    </div>
  );
};

export default ListProductItems;
