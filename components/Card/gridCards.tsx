import React, { useState } from 'react'
import { MoiveCard } from './moiveCard'
import { Movie } from '../../models/movies'
import { Pagination } from "../pagination"
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
    moivesArray: [Movie],
    hasMore: boolean,
    getMorePost: any,

}

export const GridCard: React.FC<Props> = ({ moivesArray, hasMore, getMorePost }) => {
    console.log("moivesArray", moivesArray)
    return (
        <InfiniteScroll
            dataLength={moivesArray.length}
            next={getMorePost}
            hasMore={hasMore}
            loader={<h3> Loading...</h3>}
            endMessage={<h4>Nothing more to show</h4>}
        >
            <div className="row g-0 "> {
                moivesArray?.map((item, index) => {

                    return <MoiveCard moive={item} key={index * item.id} />

                })}

                {/* <Pagination /> */}
            </div>
        </InfiniteScroll>

    )
}
