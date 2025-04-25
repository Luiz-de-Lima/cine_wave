import axios from "axios";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3/discover/movie"


export const getMovies = async () => {
  const response = await axios.get(BASE_URL, {
    params: {
      api_key: API_KEY,
      language: "pt-BR",
    }
  })
  return response.data.results
};
