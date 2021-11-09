import React, { FunctionComponent } from 'react'; 
import {Movie} from "../models/movies"
import Image from 'next/image'
  import styles from "../styles/Card.module.css"
  

  export const Card: FunctionComponent<Movie> = ({ title, poster_path,release_date,vote_average }) =>{
    
    return <div >
    <div className={`card ${styles.widthCard} `}>
      <Image className="card-img-top" src={`https://image.tmdb.org/t/p/w300${poster_path}`}  alt="Picture of the author"
        width={1000}
        height={1000}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="d-flex justify-content-between"> 
             <p> 
            <svg viewBox="0 0 511.998 511.998" className={`${styles.img__svg}`} xmlns="http://www.w3.org/2000/svg"><path d="m414.168 500.62-158.169-83.155-158.169 83.155 30.207-176.121-128.037-124.735 176.86-25.689 79.139-162.697 79.139 162.697 176.86 25.689-128.037 124.734z"/></svg>     
            <span className={`${styles.span}`}>{vote_average }</span>
            </p>
            <span className={`${styles.span}`}>{release_date}</span>
            </div>
      </div>
    </div>
  </div>


  }

