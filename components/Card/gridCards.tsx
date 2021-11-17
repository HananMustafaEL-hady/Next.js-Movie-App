import React, { useState } from 'react'
import { MoiveCard } from './moiveCard'
import { Movie } from '../../models/movies'
import { Pagination } from "../pagination"
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
    moivesArray: [Movie],


}

export const GridCard: React.FC<Props> = ({ moivesArray }) => {
    console.log("moivesArray", moivesArray)
    return (


        <div className="row g-0 "> {
            moivesArray?.map((item, index) => {

                return <MoiveCard moive={item} key={index * item.id} />

            })}

            {/* <Pagination /> */}
        </div>


    )
}
