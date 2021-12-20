import React from "react";

type CardProductPropsType = {
  product: {
    productName: string;
    priceProduct: number;
    stockBalanceProduct: number | string;
  };
};

const CardProduct: React.FC<CardProductPropsType> = (props) => {
  const {
    product: {
      productName,
      priceProduct,
      stockBalanceProduct = "Нет в наличии",
    },
  } = props;

  return (
    <div className="product_counter">
      <h1>{productName}</h1>
      <span>{priceProduct}</span>
      <span>{stockBalanceProduct}</span>
    </div>
  );
};

export default CardProduct;
