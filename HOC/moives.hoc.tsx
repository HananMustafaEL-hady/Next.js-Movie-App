import React, { useState, useEffect } from 'react'
import { useMovies } from "../hooks"
import { Moviespage, Movie } from '../models/movies'
import { GridCard } from '../components/Card/gridCards'
import { ErrorPage } from '../components/Error/errorPage'
import { Spinner } from '../components/spinner'
import { useRouter } from 'next/router'
import { Toast } from '../components/toast'


interface Props {
    initialData: Moviespage

}
export const MoivesHoc: React.FC<Props> = ({ initialData }) => {
    const [pageIndex, setPageIndex] = useState<number>(1);
    const { movies, isLoading, error } = useMovies(pageIndex, initialData);
    const [moivesScroll, setMoivesScroll] = useState<Movie | any>(movies);
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        if (movies && !isLoading && pageIndex != 1) {
            setMoivesScroll([...moivesScroll, ...movies]);
        }


    }, [movies, isLoading])

    const getMorePost = () => {
        pageIndex == 500 ? setHasMore(false) : setPageIndex(pageIndex + 1);

    };


    if (movies) return <GridCard moivesArray={moivesScroll} getMorePost={getMorePost} hasMore={hasMore} />
    if (error) return <Toast error={error} />
    if (isLoading) <Spinner />
    return <div></div>
}
