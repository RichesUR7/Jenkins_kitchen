import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch('/data/menu.json');
      const data = await response.json();
      setMenuItems(data);
    };

    fetchMenu();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded-lg"/>
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
            <p className="text-lg text-gray-700 mb-2">{item.description}</p>
            <p className="text-xl font-bold text-yellow-600">${item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="bg-yellow-400 text-white py-2 px-6 rounded hover:bg-yellow-500 mt-4"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
