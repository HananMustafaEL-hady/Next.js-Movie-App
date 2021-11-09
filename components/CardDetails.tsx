import React, { FunctionComponent } from 'react'; 
import {Movie} from "../models/movies"
import moive from '../pages/usemoive/[moiveID]';
import styles from "../styles/CardDetails.module.css"

  export const CardDetails = ({movie}:{movie:Movie}) =>{
  //   return <div className="col-lg-12  col-md-6 col-sm-12 d-flex justify-content-center mt-5  ">
  //   <div className={`card ${styles.widthbody} `}>
  //     <img className="card-img-top" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="Card image cap"></img>
  //     <div className={`card-body ${styles.widthbody}` }>
  //       <h5 className="card-title">{movie.original_title}</h5>
  //       <h2>{movie.overview}</h2>
  //       <div className="d-flex justify-content-between"> 
  //            <p> 
  //           <svg viewBox="0 0 511.998 511.998" className={`${styles.img__svg}`} xmlns="http://www.w3.org/2000/svg"><path d="m414.168 500.62-158.169-83.155-158.169 83.155 30.207-176.121-128.037-124.735 176.86-25.689 79.139-162.697 79.139 162.697 176.86 25.689-128.037 124.734z"/></svg>     
  //           <span className={`${styles.span}`}>{movie.vote_average}</span>
  //           </p>
  //           <span className={`${styles.span}`}>{movie.release_date}</span>
  //           </div>
  //     </div>
  //   </div>
  // </div>

  return <div className={`card text-center mx-auto d-flex ${styles.widthCard}` }>
  <div className="card-img-top">
  <img className={` ${styles.widthCard} `} src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="Card image cap"></img>
  </div>
  <div className="card-body">
    <h5 className="card-title text-success">{movie.original_title}</h5>
    <p className="card-text">{movie.overview}</p>
  </div>
  <div className="card-footer text-muted">
  <div className="d-flex justify-content-between"> 
         <p> 
          <svg viewBox="0 0 511.998 511.998" className={`${styles.img__svg}`} xmlns="http://www.w3.org/2000/svg"><path d="m414.168 500.62-158.169-83.155-158.169 83.155 30.207-176.121-128.037-124.735 176.86-25.689 79.139-162.697 79.139 162.697 176.86 25.689-128.037 124.734z"/></svg>     
          <span className={`${styles.span}`}>{movie.vote_average}</span>
        </p>
         <span className={`${styles.span}`}>{movie.release_date}</span>
         </div>  </div>
</div>

  }

