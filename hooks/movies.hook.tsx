import useSWR  from "swr";
import { Moviespage } from "../models/movies";
import fetcher from "./fetcher";
export const useMovies = (fallbackData:Moviespage ) => {
    const { data, error } = useSWR("https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=1",  fetcher,{fallbackData});

      if (error) return  <h1>An error has occurred.</h1>;
      if (!data) return <div className="lds-ripple"><div></div><div></div></div>

    return (
        <div>
            
        </div>
    )
}

 
