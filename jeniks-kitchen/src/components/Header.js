import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-2xl font-bold">JENIKS KITCHEN</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/menu" className="hover:text-yellow-400">Menu</Link></li>
          <li><Link to="/order" className="hover:text-yellow-400">Order Online</Link></li>
          <li><Link to="/promotions" className="hover:text-yellow-400">Promotions</Link></li>
          <li><Link to="/news" className="hover:text-yellow-400">News</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
          <li><Link to="/locations" className="hover:text-yellow-400">Locations</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
