import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-yellow-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to JENIKS KITCHEN</h1>
        <p className="text-xl mb-4">Delicious meals delivered right to your door.</p>
        <button className="bg-yellow-400 text-white py-2 px-6 rounded hover:bg-yellow-500">
          Explore Our Menu
        </button>
      </div>
    </div>
  );
};

export default HomePage;
