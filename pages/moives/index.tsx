import type { NextPage, GetStaticProps } from 'next'
import React, { useState } from 'react'
import { useMovies } from "../../hooks"
import { Moviespage } from '../../models/movies'
import { MoiveCard } from '../../components/moiveCard'
import Router from 'next/router'
import { useRouter } from 'next/router'
import { MoivesHoc } from "../../HOC/moives.hoc"

interface Props {
  moviespage: Moviespage
}
const Moives: NextPage<Props> = (props) => {
  const router = useRouter()
  const initialPage: string = router.query?.page as string
  const [pageIndex, setPageIndex] = useState<number>(+initialPage || 1);
  // const { movies, isLoading, isError } = useMovies(pageIndex, props.moviespage);
  // if (isError) return <h1>An error has occurred.</h1>
  // else if (isLoading) return <div className="lds-ripple"><div></div><div></div></div>
  function pushQuery() {
    Router.replace(
      {
        query: {
          page: pageIndex
        },
      },
    );
  }
  return (
    <div >

      <MoivesHoc pageIndex={pageIndex} moviespage={props.moviespage} />
      <ul className="pagination__movies mt-4">

        <button className="page-item   btn btn-info  btn__pag" onClick={() => { setPageIndex(pageIndex - 1), pushQuery() }} disabled={pageIndex <= 1 ? true : false}>
          Previous
        </button>

        <button className="page-item    btn btn-info btn__pag" onClick={() => { setPageIndex(pageIndex + 1), pushQuery() }} disabled={pageIndex >= 500 ? true : false}>
          Next
        </button>

      </ul>
    </div>

  )
}
export default Moives


export const getServerSideProps = async (context: { query: { page: string } }) => {
  const page = context.query.page
  console.log(page)
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=${page}`)
  const moviespage = await res.json()
  console.log(moviespage)
  return {
    props: {
      moviespage
    },
  }
}