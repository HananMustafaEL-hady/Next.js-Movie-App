import React from 'react';
import { Movie } from "../../models/movies"
import Image from 'next/image'
import styles from "../../styles/CardDetails.module.css"

export const CardDetails = ({ movie }: { movie: Movie }) => {

  return <div className={`row g-0 text-center   mt-5 border-0 mx-auto align-items-center  d-flex ${styles.widthbody} ${styles.bg}`}>
    <div className=" col-lg-5 col-md-12 " >
      <Image
        width={400}
        height={600} src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="Card image cap"></Image>
    </div>

    <div className=" col-lg-7  g-4 col-md-12 col-sm-12 text-center   ">
      <h5 className="card-title text-success">{movie.original_title}</h5>
      <p className="card-text">{movie.overview}</p>
      <div className="d-flex justify-content-between">
        <p>
          <svg viewBox="0 0 511.998 511.998" className={`${styles.img__svg}`} xmlns="http://www.w3.org/2000/svg"><path d="m414.168 500.62-158.169-83.155-158.169 83.155 30.207-176.121-128.037-124.735 176.86-25.689 79.139-162.697 79.139 162.697 176.86 25.689-128.037 124.734z" /></svg>
          <span className={`${styles.span}`}>{movie.vote_average}</span>
        </p>
        <span className={`${styles.span}`}>{movie.release_date}</span>
      </div>  </div>
  </div>

}

