import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      // Create PaymentIntent on your server and confirm payment
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: total * 100, // Stripe expects amount in cents
        }),
      });

      const paymentResult = await response.json();
      if (paymentResult.error) {
        setError(paymentResult.error);
        setLoading(false);
      } else if (paymentResult.paymentIntent.status === 'succeeded') {
        setPaymentSuccess(true);
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="p-4 border rounded mb-4" />
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {paymentSuccess ? (
        <div className="text-green-500 text-lg">Payment Successful!</div>
      ) : (
        <button
          type="submit"
          disabled={!stripe || loading}
          className="bg-yellow-400 text-white py-2 px-6 rounded hover:bg-yellow-500"
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      )}
    </form>
  );
};

export default CheckoutForm;
