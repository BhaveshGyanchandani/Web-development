import Nav from "../Navbar/Nav";
import { Cart_list } from "./cart_list";
import "./cart.css";
import { Price } from "./Price";

export function Cart() {

    return (
        <>
            <Nav />
            
                <div className="cart-container">
                    <Cart_list />
                    <Price />
                    
                </div>
        </>
    );
}
