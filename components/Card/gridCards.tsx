import React, { useState } from 'react'
import { MoiveCard } from './moiveCard'
import { Movie } from '../../models/movies'
import { Pagination } from "../pagination"
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from "../spinner"

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
            loader={<h3> <Spinner /></h3>}
            endMessage={<h4>Nothing more to show</h4>}

        // pullDownToRefresh
        // pullDownToRefreshContent={
        //     <h3 style={{ textAlign: 'center' }}>
        //         &#8595; Pull down to refresh
        //     </h3>
        // }
        // releaseToRefreshContent={
        //     <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        // }
        // refreshFunction={getMorePost}    

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
