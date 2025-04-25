"use client";
import React, { useState } from "react";
import { searchMovies } from "@/services/services";
import { Header } from "@/components/Header/Header";
import { MovieList } from "@/components/MovieList";
import { MovieSearchResults } from "@/components/MovieSearchResults";

const Movie = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const handleBuscar = async () => {
    if (!search.trim()) {
      return;
    }
    setCarregando(true);
    try {
      const resultado = await searchMovies(search);
      setResult(resultado);
    } catch (err) {
      console.log(err);
    } finally {
      setCarregando(false);
    }
  };
  return (
    <>
      <Header
        valorBusca={search}
        onChangeBusca={setSearch}
        onBuscar={handleBuscar}
      />
      <section>
        {carregando && <p>Carregando...</p>}
        {!carregando && search && result.length > 0 && (
          <MovieSearchResults movie={result} />
        )}
        {!carregando && search && result.length === 0 && (
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
