import React from 'react'
import { useMovie } from "../hooks"
import { Spinner } from '../components/spinner'
import { CardDetails } from '../components/Card/CardDetails'
import PageNotFound from "../pages/404"
import { Toast } from '../components/toast'
export const MoiveHoc: React.FC = () => {

    const { movie, isLoading, error } = useMovie();
    if (movie) return <CardDetails movie={movie} />
    if (isLoading) return <Spinner />
    if (error) return <Toast error={error} />

    return <PageNotFound />
}


