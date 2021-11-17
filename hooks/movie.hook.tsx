import useSWR from "swr";
import { useRouter } from 'next/router'

export const useMovie = () => {
  const router = useRouter()
  const { moiveID } = router.query

  const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${moiveID}?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US`)

  return {
    movie: data,
    isLoading: !data && !error,
    error: error,
  }
}
