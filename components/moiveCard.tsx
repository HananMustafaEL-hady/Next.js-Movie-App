import React from 'react'
import type { NextPage } from 'next'

import { Movie } from "../models/movies"
import Image from 'next/image'
import styles from "../styles/Card.module.css"
import Link from 'next/link'
interface Props {
    moive: Movie
}

export const MoiveCard: NextPage<Props> = ({ moive }) => {
    return (
        <Link href={`moives/${moive?.id}`} >
            <a className="col-lg-6 col-xl-3 card__text col-md-6 col-sm-12 d-flex justify-content-center mt-5 ">
                <div className={`card  ${styles.widthCard} `}>
                    <img className="card-img-top embed-responsive-item  embed-responsive" src={`https://image.tmdb.org/t/p/w300${moive?.poster_path}`} alt="Picture of the author"
                        width={1000}
                        height={1000} />
                    <div className="card-body">
                        <h5 className="card-title ">{moive?.title}</h5>
                        <div className="d-flex justify-content-between">
                            <p>
                                <svg viewBox="0 0 511.998 511.998" className={`${styles.img__svg}`} xmlns="http://www.w3.org/2000/svg"><path d="m414.168 500.62-158.169-83.155-158.169 83.155 30.207-176.121-128.037-124.735 176.86-25.689 79.139-162.697 79.139 162.697 176.86 25.689-128.037 124.734z" /></svg>
                                <span className={` ${styles.span}`}>{moive?.vote_average}</span>
                            </p>
                            <span className={` ${styles.span}`}>{moive?.release_date}</span>
                        </div>
                    </div>
                </div>
            </a>
        </Link>

    )
}
