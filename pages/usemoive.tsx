import type { NextPage  , GetStaticProps } from 'next'
import React from 'react'
import {useMovies} from "../hooks"
import { Moviespage } from '../models/movies'
import { Card } from '../components/Card'
export const getStaticProps: GetStaticProps = async () => {
    
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=1')
    const moviespage = await res.json()
    return {
      props: {
        moviespage
      },
    }
  }
interface Props{
  moviespage:Moviespage
}

 const moives: NextPage<Props> = (props) => {
   useMovies(props.moviespage)
  //  console.log(props.moviespage?.results)
  //  console.log(props.moviespage)

  return (
<div className="row ">    
{props.moviespage?.results?.map(item=>{
  return <Card name={item.original_title} image={item.poster_path} rate={item.vote_average} date={item.release_date}/>
})}

  </div>
   
  )
}
export default moives