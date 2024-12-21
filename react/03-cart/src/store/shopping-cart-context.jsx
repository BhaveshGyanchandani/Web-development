import { children, createContext ,useReducer,useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

// useReducer is a function which is used to reduce one or kore complex values into a simpler one....

function shoppingCartReducer(  {state ,action} ) {

     return state; // it will return the new or updated state
}


// this createContext() can take any thing as input like string , object , integer etc
//the createContext will always gives an object in return irrespective of its input type, so thats why we have that .Provider in app components to access it
export const CartContext = createContext({
    items : [] ,
    addItemToCart : ()=>{},
    updateItemQuantity : () =>{}
});

export function CartContextProvider({children}){

     const [ shoppingCartState , shoppingCartDispatch ] = useReducer(shoppingCartReducer , { items : [] ,} );
     // it takes 2 things as input , 1st is the reducer function and second one is the initial state
        // it also gives 2 things as  a outoput ,1st will be the currwnt state of it and 2nd will be a "dispatcher" caled as "dispatch" allows to dispatch so called actions which then be handled by the to be defined reducer funcion

    const [shoppingCart, setShoppingCart] = useState({
        items: [],
    });
    
    function handleAddItemToCart(id) {
        setShoppingCart((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];
    
            const existingCartItemIndex = updatedItems.findIndex(
                (cartItem) => cartItem.id === id
            );
            const existingCartItem = updatedItems[existingCartItemIndex];
    
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                const product = DUMMY_PRODUCTS.find((product) => product.id === id);
                updatedItems.push({
                    id: id,
                    name: product.title,
                    price: product.price,
                    quantity: 1,
                });
            }
    
            return {
                items: updatedItems,
            };
        });
    }
    
    function handleUpdateCartItemQuantity(productId, amount) {
        setShoppingCart((prevShoppingCart) => {
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
    
    const ctxVlaue = {
        items: shoppingCart.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
    };
        return (
        <CartContext.Provider value={ctxVlaue} >
            {children}
        </CartContext.Provider >
        );
    
}

