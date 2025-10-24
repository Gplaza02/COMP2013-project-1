export default function CartCard({
    id,
    productName,
    brand,
    quantity,
    price,
    image,
    handleAddQuantity,
    handleRemoveQuantity,
    handleRemoveFromCart,
}) {
    return (
        <div className="CartCard">
            <div className="CartImageDiv">
                <img src={image} alt={productName} />
            </div>

            <div className="CartInfoDiv">
                <h4>{productName}</h4>
                <p>{brand}</p>
                <p>{price}</p>
            </div>

            <div className="CartQuantityDiv">
                <button onClick={() => handleRemoveQuantity(id, "cart")}>-</button>
                <p>{quantity}</p>
                <button onClick={() => handleAddQuantity(id, "cart")}>+</button>
            </div>

            <div className="CartRemoveDiv">
                <button onClick={() => handleRemoveFromCart(id)}>Remove</button>
            </div>
        </div>
    );
}