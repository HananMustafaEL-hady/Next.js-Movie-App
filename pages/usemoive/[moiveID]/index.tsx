import React from 'react'
import { useRouter } from 'next/dist/client/router'
import type { NextPage } from 'next'
import { useMovie } from '../../../hooks'
import { CardDetails } from '../../../components/CardDetails'
import { Movie } from '../../../models/movies'


  
const moive: NextPage = () => {
    const router=useRouter()
    const id = router.query.moiveID
    // console.log(typeof id)
    let result= useMovie(id)
     console.log(result)
     if(result.isError) return  <h1>An error has occurred.</h1>
      if(result.isLoading) return <div className="lds-ripple"><div></div><div></div></div>
    return <CardDetails movie={result.movie} />
    return <div></div>
    
}

export default moive