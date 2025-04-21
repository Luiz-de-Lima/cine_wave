import React from "react";
import { FaStar, FaRegBookmark, FaPlay } from "react-icons/fa";


export const MovieCard = ({ movie, className = "" }) => {
  return (
    <>
     

      <div
        className={`group bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] ${className} `}
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}.jpg`}
            alt={movie.title}
            className="w-full h-full object-center"
          />

          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3">
              <FaPlay size={20} />
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-white font-semibold truncate">{movie.title}</h3>
            <button className="text-gray-400 hover:text-yellow-400">
              <FaRegBookmark size={18} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-white text-sm">
                {movie.vote_average?.toFixed(1) || "N/A"}
              </span>
            </div>
            <span className="text-gray-400 text-sm">
              {movie.release_date?.split("-")[0] || "N/A"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
