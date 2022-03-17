import { useState } from "react";

type TypeDataPropover = {
  titleProduct: string;
  ingredients: Array<string>;
};

export function usePopoverCard() {
  const [isShowPopover, setIsShowPopover] = useState(false);

  const [dataPropover, setDataPropover] = useState<TypeDataPropover>();

  const showPopover = (titleProduct: string, ingredients: Array<string>) => {
    setDataPropover({
      titleProduct,
      ingredients,
    });
    setIsShowPopover(false);
  };

  return {
    isShowPopover,
    showPopover,
    dataPropover,
  };
}
