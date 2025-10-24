import React from "react";
import ProductCard from "./ProductCard.jsx";

// https://www.w3schools.com/react/react_forms_select.asp
export default function ProductCardsContainer({
  data,
  productQuantity,
  handleOnChangePrice,
  handleAddToQuantity,
  handleRemoveQuantity,
  handleAddToCart,
}) {
  return (
    <div className="ProductCardsContainer">
      {data.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          productQuantity={productQuantity}
          handleOnChangePrice={handleOnChangePrice}
          handleAddToQuantity={handleAddToQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
