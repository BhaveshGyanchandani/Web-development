import React, { useContext } from 'react';
import './Price.css';
import { CartContext } from '../../ContextHooks';

export function Price() {
  const { Items,setItems } = useContext(CartContext)
  
  const totalPrice = Items.items.reduce(
    (acc, item) => acc + item.FinalPrice * item.quantity,
    0
  );

  const totalInitialPrice = Items.items.reduce(
    (acc, item) => acc + item.InitialPrice * item.quantity,
    0
  );

  const DeliveryFees = 5;
  const formattedTotalPrice = `${(totalPrice + DeliveryFees).toFixed(2)}`; // calculated after delivery and discount
  const formattedfinalPrice = `${(totalPrice).toFixed(2)}`; // calulated after discount before delivery
  const formattedInitialPrice = `${totalInitialPrice.toFixed(2)}`; // price without discount and without delivery
  const Discount = ((totalInitialPrice - totalPrice)).toFixed(2); // amount of discount done
  const MoneySaved = (formattedInitialPrice - formattedTotalPrice).toFixed(2); // amount of money saved

  return (
    <li className="price">
      <span className="price-row">
        <strong>Initial Price ({Items.items.length} items)</strong>
        <span>${formattedInitialPrice}</span>
      </span>
      <span className="price-row">
        <strong>Discount</strong>
        <span>${Discount === 'NaN' ? 0 : Discount}</span>
      </span>
      <span className="price-row">
        <strong>Final Price</strong>
        <span>${formattedfinalPrice}</span>
      </span>
      <span className="price-row">
        <strong>Delivery Fees</strong>
        <span>${Items.items.length === 0 ? 0 : DeliveryFees}</span>
      </span>
      <span className="price-row">
        <strong>Total Amount to Pay</strong>
        <span>${Items.items.length === 0 ? 0 : formattedTotalPrice}</span>
      </span>
      {MoneySaved > 0 && (
        <>
          <span className="price-row">
            <strong>Money Saved after Delivery Fees</strong>
            <span>
              ${Items.items.length === 0 ? 0 : MoneySaved}
            </span>
          </span>


        </>
      )}

    </li>
  );
}
