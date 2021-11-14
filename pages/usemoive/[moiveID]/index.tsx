import React from 'react'
import { useRouter } from 'next/dist/client/router'
import type { NextPage } from 'next'
import { useMovie } from '../../../hooks'
import { CardDetails } from '../../../components/CardDetails'


  
const Moive = () => {
    const router=useRouter()
    const id = router.query.moiveID
    // console.log(typeof id)
    let result= useMovie(id)
     console.log(result)
     if(result.isError) return  <h1>An error has occurred.</h1>
      if(result.isLoading) return <div className="lds-ripple"><div></div><div></div></div>
    return <CardDetails movie={result.movie} />
    
}
// export async function getStaticProps(context:object){

//   const {params} = context
//   const response= await fetch('')
//   const data =await response.json()
//   return {
//     props:{
//       moive:data
//     }
//   }
// }
  


export default Moive
