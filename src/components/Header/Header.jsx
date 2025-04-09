import React from "react";
import { FiSearch } from "react-icons/fi";

export const Header = () => {
  return (
    <header className="bg-gray-900 py-5 sticky top-0 z-50 shadow-lg mb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-blue-400">CINE</span>
              <span className="text-white"> WAVE</span>
            </h1>
          </div>

          <div className="relative w-full md:w-64 lg:w-96">
            <input
              type="text"
              placeholder="Buscar filmes..."
              className="w-full py-2 px-4 pr-10 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute right-3 top-0.5 text-gray-400 text-xl" />
          </div>
        </div>
      </div>
    </header>
  );
};
