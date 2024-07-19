// Cart.js
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Cart.css";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../Stripe";
import CheckoutForm from "./CheckoutForm";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price || 0),
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${Number(item.price || 0).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
