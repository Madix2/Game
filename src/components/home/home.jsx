import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <h2 className="text-center text-2xl font-bold mb-4">Welcome to GameMatch</h2>
        <p className="text-center text-gray-700 text-sm mb-4">Join our community of gamers and find your perfect match!</p>
        <div className="flex justify-center mb-4">
          <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Log In</Link>
          <Link to="/signup" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
