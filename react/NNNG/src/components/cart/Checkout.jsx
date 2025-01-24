import Nav from "../Navbar/Nav";
import { Price } from "./Price";
import CheckoutForm from "./CheckoutForm";
import './CheckoutForm.css'

export function Checkout() {
    return (
        <>
            <Nav />
            <div className="checkout-page">
                <div className="checkout-container">
                    <CheckoutForm />
            </div>
            
             <Price />
                
            </div>
        </>
    );
}
