import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Cart_items } from "../../../App";
import Nav from "../../Navbar/Nav";
import "./Item_template.css";

import { Bottles,Dinner_set,Kids_Lunch_Box,Office_Lunch_Box,Thermosteel_Bottles} from "../../Datasets/Products/Products";


export function Item_template() {
  const { id } = useParams();
  const { Items, setItems } = useContext(Cart_items);

 
  // Save Items to localStorage whenever it changes
  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(Items)); // Save entire Items object
    
  }, [Items]);

  function onAddItem(item) {
    setItems((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({
          id: item.id,
          name: item.name,
          InitialPrice: item.InitialPrice,
          Discount: item.Discount,
          FinalPrice: item.FinalPrice,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  const Data = {
    Bottles,
    Dinner_set,
    Kids_Lunch_Box,
    Office_Lunch_Box, Thermosteel_Bottles
  };
  const MapData = Data[id] || [];


  return (
    <>
      <Nav />
      <div className="initial_box">
        <ul>
          {MapData.map((item) => (
            <li key={item.id}>
              <img src={item.src || "/default-image.jpg"} alt="image not available" />
              <div className="description">
                <span>{item.name}</span>
                <span>
                  <del style={{ color: "red", marginRight: "8px" }}>
                    ${item.InitialPrice}
                  </del>
                  <strong style={{ color: "green" }}>${item.FinalPrice}</strong>
                </span>
                <span>{item.Discount}% off</span>
                <button className="add-to-cart" onClick={() => onAddItem(item)}>
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
