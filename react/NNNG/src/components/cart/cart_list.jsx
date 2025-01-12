import { useContext, useEffect } from "react";
import { CartContext } from "../../ContextHooks";
import "./cart_list.css";

export function Cart_list() {
    const { Items, setItems } = useContext(CartContext); // Get `Items` and `setItems` from context

    // useEffect(() => {
    //     window.localStorage.setItem("cartItems", JSON.stringify(Items));
    // }, [Items]);
    
    function handleItemQuantity(productId, amount) {
        setItems((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];
            const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === productId
            );

            const updatedItem = {
                ...updatedItems[updatedItemIndex],
            };

            updatedItem.quantity += amount;

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
            };
        });
    }

    return (
        <div className="Items">
            {Items.items.length === 0 ? (
                <p style={{ color: "black" }}>Your cart is empty.</p>
            ) : (
                Items.items.map((item) => (
                    <li className="Items_list" key={item.id}>
                        <div className="cart">
                            <img alt="unavailable" />
                            <div className="about_item">
                                <span>{item.name}</span>
                                <span>Inital Price: {item.InitialPrice}</span>
                                <span>Final price {item.FinalPrice}</span>
                                <span>Discount: {item.Discount}%</span>
                                <span>Quantity: {item.quantity}</span>
                            </div>
                        </div>
                        <div className="change_quantity">
                            <button onClick={() => handleItemQuantity(item.id, -1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleItemQuantity(item.id, 1)}>+</button>
                        </div>
                    </li>
                ))
            )}
        </div>
    );
}
