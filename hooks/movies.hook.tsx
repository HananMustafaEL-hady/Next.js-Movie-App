import useSWR from "swr";
import { Moviespage, Movie } from "../models/movies";
import { useRouter } from 'next/router'
import { AxiosError } from "axios";
interface returnType {
  movies?: [Movie],
  isLoading: boolean,
  error?: AxiosError
}
export function useMovies(fallbackData: Moviespage): returnType {
  const router = useRouter()
  const { page } = router.query
  const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=${page}`, { fallbackData });
  return {
    movies: data?.results,
    isLoading: !data && !error,
    error: error,
  }
}

