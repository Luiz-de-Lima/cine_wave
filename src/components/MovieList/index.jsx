"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieCard } from "../MovieCard";

export const MovieList = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: `${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
        language: "pt-BR",
      },
    }).then((response) => {
      if (response) {
        setMovies(response.data.results);
      }
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-24">
      {movies &&
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} className="w-full" />
        ))}
    </div>
  );
};
