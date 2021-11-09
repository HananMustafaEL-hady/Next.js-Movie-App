import type { NextPage  , GetStaticProps } from 'next'
import React ,{useState}from 'react'
import {useMovies ,Page} from "../../hooks"
import { Moviespage } from '../../models/movies'
import { Card } from '../../components/Card'
import Link from 'next/link'
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

        const [pageIndex, setPageIndex] = useState(1);

  // let result= useMovies(props.moviespage)
  let pagination=Page({index:pageIndex})
  if(pagination.isError) return  <h1>An error has occurred.</h1>
  else if(pagination.isLoading) return <div className="lds-ripple"><div></div><div></div></div>
  return (
<div className="row g-0 ">    
{pagination?.movies?.results?.map(item=>{

   return <Link href={`usemoive/${item.id}`} >
     <a className="col-lg-3  col-md-6 col-sm-12 d-flex justify-content-center mt-5 "> <Card 
       original_title={item.original_title} poster_path={item.poster_path} vote_average={item.vote_average} release_date={item.release_date} adult={item.adult} backdrop_path={item.backdrop_path} genre_ids={[]} id={item.id} original_language={item.original_language} overview={''} popularity={item.popularity} title={item.title} video={item.video} vote_count={item.vote_count} />
   </a>
   </Link>
})}

  <ul className="pagination__movies mt-4">

      <button   className="page-item btn btn-info"onClick={() => setPageIndex(pageIndex - 1)} disabled={pageIndex<=1?true:false}>
     Previous
      </button>
 
    <button className="page-item btn btn-info" onClick={() => setPageIndex(pageIndex +1)} disabled={pageIndex>=500?true:false}>
      Next
      </button>
      
  </ul>
  </div>
   
  )
}
export default moives