import { NextPage } from 'next';
import React from 'react'
import { useMovies } from "../hooks"
import { Moviespage } from '../models/movies'
import { MoiveCard } from '../components/moiveCard'
import { GridCard } from '../components/gridCards'

interface Props {
    pageIndex: number
    moviespage: Moviespage
}
export const MoivesHoc: React.FC<Props> = ({ moviespage }) => {
    const { movies, isLoading, isError } = useMovies(moviespage);
    if (isError) return <h1>An error has occurred.</h1>
    else if (isLoading) return <div className="lds-ripple"><div></div><div></div></div>
    return <GridCard moivesArray={moviespage.results} />
}
