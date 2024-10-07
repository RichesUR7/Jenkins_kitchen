import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm';

// Load Stripe
const stripePromise = loadStripe('your-publishable-key-from-stripe');

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-lg">
        <p className="text-lg mb-4">Total: ${total}</p>
        <Elements stripe={stripePromise}>
          <CheckoutForm total={total} />
        </Elements>
      </div>
    </div>
  );
};

export default CheckoutPage;
