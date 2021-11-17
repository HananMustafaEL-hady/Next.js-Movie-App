import useSWR from "swr";
import { Moviespage, Movie } from "../models/movies";
import { useRouter } from 'next/router'
import { AxiosError } from "axios";
interface returnType {
  movies?: [Movie],
  isLoading: boolean,
  error?: AxiosError
}
export function useMovies(page: number, fallbackData: Moviespage | undefined): returnType {
  fallbackData = page == 1 ? fallbackData : undefined
  const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=${page}`, { fallbackData });
  return {
    movies: data?.results,
    isLoading: !data && !error,
    error: error,
  }
}

