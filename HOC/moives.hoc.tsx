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
    const router = useRouter()
    const { movies, isLoading, error } = useMovies(initialData);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [moivesScroll, setMoivesScroll] = useState<[Movie] | any>();
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        router.replace(
            {
                query: {
                    page: pageIndex
                },
            },
        );

    }, [pageIndex])

    useEffect(() => {
        if (movies && !isLoading) {
            setMoivesScroll((preState: any) => [...preState, ...movies]);
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
