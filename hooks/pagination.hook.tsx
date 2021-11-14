import useSWR from "swr";
import fetcher from "./fetcher";
import { Moviespage, Movie } from "../models/movies";

interface Moviesresult {
  movies: Moviespage
  isLoading: boolean
  isError: boolean
}
export function useMovies(index: number, fallbackData: Moviespage) {

  const { data, error } = useSWR<Moviespage>(`https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=${index}`, { fallbackData });

  return {
    movies: data,
    isLoading: !data && !error,
    isError: error,
  }
}

