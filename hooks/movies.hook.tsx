import useSWR  from "swr";
import { Moviespage ,Movie } from "../models/movies";
import fetcher from "./fetcher";
interface Moviesresult{
  movies:Moviespage
  isLoading:boolean
  isError:boolean
}

export const useMovies = (fallbackData:Moviespage ):Moviesresult => {
    const { data, error } = useSWR("https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=1",  fetcher,{fallbackData});
      return  {
        movies: data,
        isLoading: !data && !error,
        isError: error,
      }  
}