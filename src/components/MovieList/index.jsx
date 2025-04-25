"use client";
import React, { useEffect, useState } from "react";
import { getMovies } from "@/services/services";
import { MovieCard } from "../MovieCard";

export const MovieList = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const carregarFilmes = async () => {
      const data = await getMovies();
      setMovies(data);
    };
    carregarFilmes();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-24">
      {movies &&
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} className="w-full" />
        ))}
    </div>
  );
};
