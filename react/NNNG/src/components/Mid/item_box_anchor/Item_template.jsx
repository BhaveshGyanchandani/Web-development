import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../../../ContextHooks";
import Nav from "../../Navbar/Nav";
import "./Item_template.css";
// import { Product } from "../../Datasets/Products/Product";
import { Product } from "../../Datasets/Products/Final_Test_Product";

export function Item_template() {
  const { id } = useParams();
  const { Items, setItems } = useContext(CartContext);

  // const [hoveredItemName , setHoveredItemId] = useState("aj")

  // const handleMouseEnter = (name) => setHoveredItemId(name);
  //   const handleMouseLeave = () => setHoveredItemId("");

  //   const ArrowIcon = ({ isHovered , item}) => (
  //     console.log(item)
  //     // {isHovered ? item.src : item.HoveredSrc }
  //   );
  
  

  // // Load Items from localStorage on component mount
  // useEffect(() => {
  //   const storedCart = window.localStorage.getItem("cartItems");
  //   if (storedCart) {
  //     setItems(JSON.parse(storedCart)); // Load cartItems from localStorage
  //   }
  // }, [setItems]);

  // // // Save Items to localStorage whenever it changes
  // useEffect(() => {
  //   window.localStorage.setItem("cartItems", JSON.stringify(Items));
  // }, [Items]);

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

  const first_slice = Product.find((item) => item.product === id).Data
  // console.log(first_slice)
  // console.log(Product)
  
  // const second_slice = Product.find((item) => item.product === id).Data[0].SubData[0].DataSize
  
  return (
    <>
      <Nav />
      <div className="initial_box">
        {first_slice ? (
          <ul>
            {first_slice.map((item,index) => (
              <li key={index}>
                <Link style={{width:"100%"}} to={`/E-commerce-website/${id}/${item.name}`} >
                {/* onMouseEnter={()=>handleMouseEnter(item.name)} onMouseLeave={handleMouseLeave}  */}
                  <img className="initial_box_img" src={item.src} alt={item.name || "Image not available"} />
                  <div className="description">
                    <p>{item.name}</p>
                     
                     <p>
                      <del style={{ color: "red", marginRight: "8px" }}>
                        ${item.SubData[0].DataSize.InitialPrice}
                      </del>
                      <strong style={{ color: "green" }}>${item.SubData[0].DataSize.FinalPrice}</strong>
                    </p>
                    <p>{item.SubData[0].DataSize.Discount}% off</p>
                  </div>
                </Link>
                <button className="add-to-cart"
                  onClick={(event) => {
                    event.stopPropagation();
                    onAddItem(item.SubData[0].DataSize)
                  }
                  }>
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: "red", textAlign: "center" }}>
            No products found for this category.
          </p>
        )}
      </div>
    </>
  );
}
