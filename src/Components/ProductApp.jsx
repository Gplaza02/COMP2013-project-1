import React, { useState } from "react";
import products from "../data/products";
import NavBar from "./NavBar";
import ProductCardsContainer from "./ProductCardsContainer";
import CartContainer from "./CartContainer";

function ProductApp() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, quantity = product.quantity) => {
    if (quantity <= 0) {
      alert("Please add at least one item!");
      return;
    }

    const productInCart = cart.find((c) => c.id === product.id);

    if (!productInCart) {
      setCart([...cart, { ...product, quantity }]);
    } else {
      const updatedCart = cart.map((c) =>
        c.id === product.id ? { ...c, quantity: c.quantity + quantity } : c
      );
      setCart(updatedCart);
    }
  };

  const handleEmptyCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // https://www.w3schools.com/react/react_class.asp
  return (
    <div>
      <NavBar username="Guzman" cartCount={cartCount} />
      <div className="GroceriesAppContainer">
        <ProductCardsContainer
          products={products}
          addToCart={handleAddToCart}
        />
        <CartContainer
          cart={cart}
          handleEmptyCart={handleEmptyCart}
        />
      </div>
    </div>
  );
}

export default ProductApp;
