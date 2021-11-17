import type { NextPage, GetStaticProps } from 'next'
import React, { useState } from 'react'
import { useMovies } from "../../hooks"
import { Moviespage } from '../../models/movies'
import { MoiveCard } from '../../components/Card/moiveCard'

interface Props {
  moviespage: Moviespage
}
const Moives: NextPage<Props> = (props) => {
  const [pageIndex, setPageIndex] = useState(1);
  const { movies, isLoading, error } = useMovies(pageIndex, props.moviespage);
  if (error) return <h1>An error has occurred.</h1>
  else if (isLoading) return <div className="lds-ripple"><div></div><div></div></div>
  return (
    <div className="row g-0 ">
      {
        movies?.map((item, index) => {

          return <MoiveCard moive={item} key={index * item.id} />

        })}

      <ul className="pagination__movies mt-4">

        <button className="page-item   btn btn-info  btn__pag" onClick={() => setPageIndex(pageIndex - 1)} disabled={pageIndex <= 1 ? true : false}>
          Previous
        </button>

        <button className="page-item    btn btn-info btn__pag" onClick={() => setPageIndex(pageIndex + 1)} disabled={pageIndex >= 500 ? true : false}>
          Next
        </button>

      </ul>
    </div>

  )
}
export default Moives


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=1')
  const moviespage = await res.json()
  return {
    props: {
      moviespage
    },
  }
}