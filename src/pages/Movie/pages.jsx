"use client";
import React, { useState } from "react";

import { Header } from "@/components/Header/Header";
import { MovieList } from "@/components/MovieList";
import { MovieSearchResults } from "@/components/MovieSearchResults";

const Movie = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const searchMovies = async () => {
    if (!search.trim()) {
      setResult([]);
      return;
    }

    const BASE_URL = "https://api.themoviedb.org/3/search/movie";
    const API_KEY = `${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
    const params = {
      api_key: API_KEY,
      query: search,
      language: "pt-BR",
    };
    setCarregando(true);
    const response = await axios.get(`${BASE_URL}`, {
      params: params,
    });
    setResult(response.data.results);
    setCarregando(false);
  };
  return (
    <>
      <Header
        valorBusca={search}
        onChangeBusca={setSearch}
        onBuscar={searchMovies}
      />
      <section>
        {carregando && <p>Carregando...</p>}
        {!carregando && search && result.length > 0 && (
          <MovieSearchResults movie={result} />
        )}
        {!carregando && search && result.lengt === 0 && (
          <p>
            Nenhum resultado encontrado para: <strong>{search}</strong>
          </p>
        )}
      </section>
      {!search && <MovieList />}
    </>
  );
};

export default Movie;
