import axios from "axios";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"


export const getMovies = async () => {
  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      language: "pt-BR",
    }
  })
  return response.data.results
};
export const searchMovies = async (nome) => {
  if (nome.length > 0) {
    const params = {
      api_key: API_KEY,
      query: nome,
      language: "pt-BR",
    };

    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: params,
    });
    return response.data.results
  }

};