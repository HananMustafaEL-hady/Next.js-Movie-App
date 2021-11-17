import type { NextPage, GetStaticProps } from 'next'
import React from 'react'
import { Moviespage } from '../../models/movies'
import { MoivesHoc } from "../../HOC/moives.hoc"

interface Props {
  moviespage: Moviespage
}
const Moives: NextPage<Props> = (props) => {

  return (

    <MoivesHoc initialData={props.moviespage} />
  )
}
export default Moives


export const getServerSideProps = async (context: { query: { page: string } }) => {
  const page = context.query.page
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=${page}`)
  const moviespage = await res.json()
  return {
    props: {
      moviespage
    },
  }
}