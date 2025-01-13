import { useContext,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../../../../ContextHooks.jsx";
import Nav from "../../../Navbar/Nav.jsx";
import { BrandWise_Product } from "../../../Datasets/Products/Final_BrandWise_Product_Data.js";
import './Brand_template.css';
import { Footer } from "../../../Footer/Footer.jsx";

export function Brand_template() {
  const { Brands } = useParams();
  const { Items, setItems } = useContext(CartContext);

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

  const first_slice = BrandWise_Product.find((item) => item.Brand === Brands).BrandData;

  return (
    <>
      <Nav />
      <div className="brand-template-box">
        <h1 className="brand-title">{Brands}</h1>
        {first_slice ? (
          <ul className="brand-list">
            {first_slice.map((item, index) => (
              <li key={index} className="product-item">
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <strong className="product-title">{item.product}</strong>
                <Link to={`/E-commerce-website/Home/${Brands}/${item.product}`} ><strong className="product-title SeeMore" >See More &gt; </strong></Link>
                </div>
                <ul className="product-grid">
                  {item.Data.map((content, contentIndex) => (
                    <li key={contentIndex} className="product-card">
                      <Link to={`/E-commerce-website/${item.product}/${content.name}`} className="product-link">
                        <img
                          src={content.src}
                          alt={content.name}
                          className="product-image"
                        />
                        <p className="product-name">{content.name}</p>
                        <p className="product-price">
                          <del className="product-original-price">
                            ${content.SubData[0].DataSize.InitialPrice}
                          </del>
                          <strong className="product-discounted-price">
                            ${content.SubData[0].DataSize.FinalPrice}
                          </strong>
                        </p>
                        <p className="product-discount">
                          {content.SubData[0].DataSize.Discount}% off
                        </p>
                      </Link>
                      <button
                        className="add-to-cart"
                        onClick={(event) => {
                          event.preventDefault(); // Prevent Link redirection
                          onAddItem(content.SubData[0].DataSize);
                        }}
                      >
                        Add to Cart
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-products-message">
            No products found for this category.
          </p>
        )}
      </div>
      <Footer />
    </>
  );
}
