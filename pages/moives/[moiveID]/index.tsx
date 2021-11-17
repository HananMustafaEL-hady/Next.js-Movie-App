import React from 'react'
import { useRouter } from 'next/dist/client/router'
import type { NextPage } from 'next'
import { useMovie } from '../../../hooks'
import { CardDetails } from '../../../components/Card/CardDetails'
import { MoiveHoc } from "../../../HOC/moive.hoc"



const Moive = () => {



  return <MoiveHoc />



}


export default Moive
