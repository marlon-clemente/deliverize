export type TypeItemsIngredients = {
  id: Number;
  nm_item: string;
  vl_item: Number;
};

export type TypeIngredients = {
  group: string;
  max_itens: Number;
  itens: Array<TypeItemsIngredients>;
  type: string;
};

export type TypeProduct = {
  createdAt: string;
  description: string;
  id: string;
  ingredients: Array<TypeIngredients>;
  nm_product: string;
  url_image: string;
  vl_discount: Number;
  vl_price: Number;
};
