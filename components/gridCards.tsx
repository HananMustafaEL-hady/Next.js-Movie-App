import React from 'react'
import { MoiveCard } from './moiveCard'
import { Movie } from '../models/movies'
interface Props {
    moivesArray: [Movie]
}

export const GridCard: React.FC<Props> = ({ moivesArray }) => {

    return (
        <div className="row g-0 "> {
            moivesArray?.map(item => {

                return <MoiveCard moive={item} />

            })}</div>
    )
}
