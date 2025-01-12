import { useContext, useEffect, useState } from 'react'
import { ItemImg, CartContext } from '../../../../ContextHooks'
import './RightItem.css'
import { Product } from "../../../Datasets/Products/Final_Test_Product";
import { useParams } from 'react-router-dom'


export function RightItem() {

    const { setImage } = useContext(ItemImg)
    const { Items, setItems } = useContext(CartContext);

    
    
    const { id, aboutId } = useParams();
    const size = 300
    
    const product = Product.find((item) => item.product === id).Data.find((item) => item.name === aboutId)?.SubData.find((item) => item.size === size)?.DataSize
    
    const [Data , setData] = useState(product)
    

    useEffect(() => {
        const storedCart = window.localStorage.getItem("cartItems");
        if (storedCart) {
            setItems(JSON.parse(storedCart)); // Load cartItems from localStorage
        }
    }, [setItems]); /// imortant bcz if we go to next tab to select new items it will restore the items in items array everytime....

    // Save Items to localStorage whenever it changes

    useEffect(() => {
        window.localStorage.setItem("cartItems", JSON.stringify(Items));
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

    const ForSizes = Product.find((item) => item.product === id).Data.find((item) => item.name === aboutId).SubData

    function handleDataEntry(size) {

        const NewData =ForSizes.find((item)=>item.size===size).DataSize

        setData(NewData)

    }

    // console.log(ForSizes)


    return (
        <>
            <div className='RI' >
                <h2 style={{ margin: "0px", fontSize: "35px" }} >{Data.name} </h2>
                <p className="item_name" style={{ margin: '20px 0px 0px 0px', fontSize: '1rem', fontWeight: '600' }}>Price</p>
                <p className="item_name">
                    <strong style={{ color: "green", fontSize: "35px", margin: "0px 20px 0px 0px" }}>${Data.FinalPrice}</strong>
                    <del style={{ color: "red", marginRight: "20px", fontSize: "20px" }}>
                        ${Data.InitialPrice}
                    </del>
                    <strong style={{ fontWeight: '600', fontFamily: 'fangsong', border: '1px solid red', backgroundColor: 'red', color: 'white', padding: '2px 7px', borderRadius: '7px' }}>Save {Data.Discount}%</strong>
                </p>

                <p className="item_name" style={{ margin: '30px 0px 0px 0px', fontSize: '1rem', fontWeight: '600' }} > Available Colors : </p>
                <ul className='ul-of-color-images'>
                    {Data.images.map((item, index) => {
                        const [key, value] = Object.entries(item)[0];
                        return (
                            <li className='li-of-color-images' key={index}>

                                <img className='color-images'
                                    onClick={() => { setImage(value); }}
                                    src={value} alt={`${key} not available`} />
                                <p style={{ textAlign: 'center' }}>{key}</p>
                            </li>
                        );
                    })}
                </ul>

                <p
                    className="item_name"
                    style={{
                        margin: '20px 0 10px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: '#333',
                        textTransform: 'uppercase',
                    }}
                >
                    Available sizes:
                </p>
                <ul className="ul-of-color-images" style={{ display: 'flex', gap: '10px', listStyle: 'none', padding: '0', margin: '0', }}>
                    {ForSizes.map((item, index) => {
                        return (
                            <li onClick={() => handleDataEntry(item.size)}
                                className='Size-list'
                                key={index}
                            >
                                <span>{item.size}</span>
                            </li>
                        );
                    })}
                </ul>


                <button className="add-to-cart"
                    onClick={(event) => {
                        event.stopPropagation();
                        onAddItem(Data)
                    }
                    }>
                    Add to Cart
                </button>

            </div>
        </>
    )

}


// const Itemname = content.name