import React, { useState, useEffect } from 'react'
import { useMovies } from "../hooks"
import { Moviespage, Movie } from '../models/movies'
import { GridCard } from '../components/Card/gridCards'
import { ErrorPage } from '../components/Error/errorPage'
import { Spinner } from '../components/spinner'
import { useRouter } from 'next/router'
import { Toast } from '../components/toast'
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
    initialData: Moviespage

}export const MoivesHoc: React.FC<Props> = ({ initialData }) => {
    const [pageIndex, setPageIndex] = useState<number>(1)
    const { movies, isLoading, error } = useMovies(pageIndex, initialData)
    const [moivesScroll, setMoivesScroll] = useState<any>([])
    const [hasMore, setHasMore] = useState(true)
    useEffect(() => {
        if (movies && !isLoading) {
            setMoivesScroll((prevState: any) => [...prevState, ...movies])
        }
    }, [movies, isLoading])



    if (error) return <Toast error={error} />
    if (isLoading) <Spinner />
    return (
        <InfiniteScroll
            dataLength={moivesScroll.length || 0}
            next={() => setPageIndex(pageIndex + 1)}
            hasMore={hasMore}
            loader={<h3> Loading...</h3>}
            endMessage={<h4>Nothing more to show</h4>}
        >
            <GridCard moivesArray={moivesScroll} />
        </InfiniteScroll>
    )
}