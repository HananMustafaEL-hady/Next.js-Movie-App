import useSWR  from "swr";
import fetcher from "./fetcher";
import { Moviespage ,Movie } from "../models/movies";

interface Moviesresult{
    movies:Moviespage
    isLoading:boolean
    isError:boolean
  }
export function Page (index:number ,fallbackData:Moviespage  ):Moviesresult{
    console.log("index",index)
    const { data, error }  = useSWR(`https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=${index}`, fetcher,{fallbackData});
  
    return  {
        movies: data,
        isLoading: !data && !error,
        isError: error,
      } 
  }

