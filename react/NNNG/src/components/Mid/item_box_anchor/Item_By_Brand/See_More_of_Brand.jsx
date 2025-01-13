import Nav from '../../../Navbar/Nav';
import './See_More.css'
import { BrandWise_Product } from '../../../Datasets/Products/Final_BrandWise_Product_Data';
import { useParams,Link } from 'react-router-dom';


export function See_More_of_Brand_Item() {
    const { SeeMore, Brands } = useParams();
    const ProductSlice = BrandWise_Product.find((item) => item.Brand === Brands).BrandData.find((item) => item.product === SeeMore).Data;

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

    return (
        <>
            <Nav />
            <div className="see-more-container">
                <ul className="product-list">
                    {ProductSlice.map((item, index) => (
                        <Link  key={index} to={`/E-commerce-website/${SeeMore}/${item.name}`}>
                            <li className="product-card">
                                <img src={item.src} alt="Not available" className="product-image" />
                                <p className="product-name">{item.name}</p>
                                <p className="product-price">
                                    <del className="product-original-price">
                                        ${item.SubData[0].DataSize.InitialPrice}
                                    </del>
                                    <strong className="product-discounted-price">
                                        ${item.SubData[0].DataSize.FinalPrice}
                                    </strong>
                                </p>
                                <p className="product-discount">
                                    {item.SubData[0].DataSize.Discount}% off
                                </p>

                                <button
                                    className="add-to-cart-btn"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        onAddItem(item.SubData[0].DataSize);
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
}
