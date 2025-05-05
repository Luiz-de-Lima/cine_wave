import React from "react";
import { MovieCard } from "../MovieCard";

export const MovieSearchResults = ({ movie }) => {
  return (
    <div className="grid grid-cols-1 p-8 sm:grid-cols-2  lg:grid-cols-3 gap-6 ">
      {movie &&
        movie.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};
