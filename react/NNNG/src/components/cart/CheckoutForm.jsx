import React, { useState } from 'react';
import './CheckoutForm.css';

function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form Submitted', formData);
  };

  return (
    <div className="checkout-form-container">
      <h2>Checkout Form</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <section className="personal-details">
          <h3>Personal Details</h3>
          <div className="input-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </section>

        <section className="shipping-details">
          <h3>Shipping Address</h3>
          <div className="input-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Postal Code:</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
        </section>

        <section className="payment-details">
          <h3>Payment Information</h3>
          <div className="input-group">
            <label>Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Expiry Date:</label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>CVV:</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </section>

        <div className="submit-container">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
