import React from "react";

export default function ProductCard({
  product,
  productQuantity,
  handleAddToQuantity,
  handleRemoveQuantity,
  handleAddToCart,
  handleOnChangePrice,
}) {
  // Find the quantity object for this product
  const currentProduct = productQuantity.find((item) => item.id === product.id);

  return (
    <div className="ProductCard">
      <img src={product.image} alt={product.productName} />

      <h4>{product.productName}</h4>
      <div>{product.brand}</div>
      <div>Quantity: {currentProduct.quantity}</div>
      <div>
        Price: 
        <input
          type="number"
          value={currentProduct.currentPrice.replace('$', '')}
          onChange={(e) => handleOnChangePrice(product.id, e)}
          min="0"
          step="0.01"
        />
      </div>
  
      
      <div className="Quantity">
        <button onClick={() => handleRemoveQuantity(product.id)}>-</button>  
        <span>{currentProduct.quantity}</span>
        <button onClick={() => handleAddToQuantity(product.id)}>+</button>
      </div>

      <button onClick={() => handleAddToCart(currentProduct)}>
        Add to Cart
      </button>
    </div>
  );
}
// https://www.w3schools.com/react/react_class.asp
//https://www.w3schools.com/react/react_class.asp