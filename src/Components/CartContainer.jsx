import React from "react";
import CartCard from "./CartCard.jsx";

export default function CartContainer({ cart, handleEmptyCart }) {
  const items = cart.length;
  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.currentPrice.replace('$', ''));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="CartContainer">
      <div className="CartHeader">
        <strong>Cart Items: {items}</strong>
        <span>Total: ${total.toFixed(2)}</span>
      </div>

      {cart.length === 0 ? (
        <div className="CartEmpty">No items in the cart</div>
      ) : (
        <>
          <div className="CartList">
            {cart.map((item) => (
              <CartCard
                key={item.id}
                id={item.id}
                productName={item.productName}
                brand={item.brand}
                quantity={item.quantity}
                price={item.currentPrice}
                image={item.image}
                handleAddQuantity={() => {}}
                handleRemoveQuantity={() => {}}
                handleRemoveFromCart={() => {}}
              />
            ))}
          </div>

          <div className="CartButtons">
            <button className="RemoveButton" onClick={handleEmptyCart}>
              Empty Cart
            </button>
            <button id="BuyButton">Checkout • ${total.toFixed(2)}</button>
          </div>
        </>
      )}
    </div>
  );
}