import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;