import React from "react";
import { TypeProduct } from "../../types";
import ListProductItems from "../ListProductItems";

import "./showProduct.css";

type TypeShowProduct = {
  product: TypeProduct;
};

const ShowProduct: React.FC<TypeShowProduct> = ({ product }) => {
  return (
    <div className="c-show-prod">
      <div className="c-show-prod__prod-description">
        {/*!! A imagem da API está off
        <img src={product.url_image} alt="" />*/}
        <div className="c-show-prod__prod-description__c-img">
          <img
            className="c-show-prod__prod-description__img"
            src="product-img.png"
            alt=""
          />
        </div>
        <h1 className="c-show-prod__prod-description__nm-product">
          {product.nm_product}
        </h1>
        <strong className="c-show-prod__prod-description__description">
          {product.description}
        </strong>
        <div className="c-show-prod__prod-description__c-price">
          <strong className="c-show-prod__prod-description__c-price__price--discount">
            R${product.vl_discount}
          </strong>
          <strong className="c-show-prod__prod-description__c-price__price">
            R${product.vl_price}
          </strong>
        </div>
      </div>
      <div className="c-show-prod__prices">
        <ListProductItems itens={product.ingredients} />
      </div>
    </div>
  );
};

export default ShowProduct;
