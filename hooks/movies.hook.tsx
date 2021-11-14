import useSWR from "swr";
import fetcher from "./fetcher";
import { Moviespage } from "../models/movies";
import { useRouter } from 'next/router'



export function useMovies(fallbackData: Moviespage) {
  const router = useRouter()
  const { page } = router.query

  const { data, error } = useSWR<Moviespage>(`https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=${page}`, { fallbackData });

  return {
    movies: data,
    isLoading: !data && !error,
    isError: error,
  }
}

