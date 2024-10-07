import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const OrderPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Order</h1>
      {cartItems.length > 0 ? (
        <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-lg">
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-4 flex justify-between">
                <span>{item.name}</span>
                <span>${item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline ml-4"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-lg font-bold">
            Total: ${total}
          </div>
          <Link to="/checkout">
            <button className="bg-yellow-400 text-white py-2 px-6 rounded hover:bg-yellow-500 mt-4">
              Checkout
            </button>
          </Link>
        </div>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
    </div>
  );
};

export default OrderPage;
