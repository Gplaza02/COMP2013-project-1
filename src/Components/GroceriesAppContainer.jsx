// https://www.w3schools.com/react/react_usestate.asp
// https://www.w3schools.com/react/react_components.asp
import { useState } from "react";
import products from "../data/products.js";
import NavBar from "../Components/NavBar.jsx";
import ProductCardsContainer from "./ProductCardContainer.jsx";
import CartContainer from "./CartContainer.jsx";

export default function GroceriesAppContainer() {
    
    const [productQuantity, setProductQuantity] = useState(
        products.map((prod) => ({
            id: prod.id,
            quantity: 0,
            priceOptions: [prod.price],
            currentPrice: prod.price,
        }))
    );

    
    const [cart, setCart] = useState([]);

    
    const handleOnChangePrice = (productId, e) => {
        const newProductQuantity = productQuantity.map((prod) =>
            prod.id === productId ? { ...prod, currentPrice: `$${e.target.value}` } : prod
        );
        setProductQuantity(newProductQuantity);
    };

  
    const handleAddToQuantity = (productId) => {
        const newProductQuantity = productQuantity.map((prod) =>
            prod.id === productId ? { ...prod, quantity: prod.quantity + 1 } : prod
        );
        setProductQuantity(newProductQuantity);
    };

   
    const handleRemoveQuantity = (productId) => {
        const newProductQuantity = productQuantity.map((prod) =>
            prod.id === productId && prod.quantity > 0
                ? { ...prod, quantity: prod.quantity - 1 }
                : prod
        );
        setProductQuantity(newProductQuantity);
    };

    // https://www.w3schools.com/react/react_jsx_if_statements.asp
    const handleAddToCart = (productToAdd) => {
        if (productToAdd.quantity === 0) {
            alert("Please add quantity before adding to cart!");
            return;
        }

        const productInCart = cart.find((item) => item.id === productToAdd.id);
        if (!productInCart) {
            const fullProduct = products.find((p) => p.id === productToAdd.id);
            setCart((prevCart) => [...prevCart, { 
                ...fullProduct,
                quantity: productToAdd.quantity,
                currentPrice: productToAdd.currentPrice
            }]);
        } else {
            alert("Item is already in the cart!");
        }
    };

   
    const handleEmptyCart = () => {
        setCart([]);
    };

    return (
        <div className="GroceriesApp-Container">
            <NavBar />
            <ProductCardsContainer
                data={products}
                productQuantity={productQuantity}
                handleOnChangePrice={handleOnChangePrice}
                handleAddToQuantity={handleAddToQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
                handleAddToCart={handleAddToCart}
            />
            <CartContainer cart={cart} handleEmptyCart={handleEmptyCart} />
        </div>
    );
}