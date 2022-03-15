import React from "react";
import { TypeIngredients } from "../../types";

import "./listProductItems.css";

type TypeListProductItems = {
  itens: Array<TypeIngredients>;
};

const ListProductItems: React.FC<TypeListProductItems> = ({ itens }) => {
  console.log(itens);
  return <div className="c-list-prod"></div>;
};

export default ListProductItems;
