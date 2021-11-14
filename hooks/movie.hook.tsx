import useSWR from "swr";
import { Movie } from "../models/movies";
import fetcher from "./fetcher";

interface Movieresult {
  movie: Movie
  isLoading: boolean
  isError: boolean
}

export const useMovie = (id: string | string[] | undefined): Movieresult => {

  const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${id}?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US`)
  return {
    movie: data,
    isLoading: !data && !error,
    isError: error,
  }
}
