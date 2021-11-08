import React, { FunctionComponent } from 'react'; 
type CardProps = {
  name: string,
    image: string,
    date:string,
    rate:number
  }
  import styles from "../styles/Card.module.css"
  

  export const Card: FunctionComponent<CardProps> = ({ name, image,date,rate }) =>{
    
    return <div className="col-lg-3  col-md-6 col-sm-12 d-flex justify-content-center mt-5  ">
    <div className={`card ${styles.widthCard} `}>
      <img className="card-img-top" src={`https://image.tmdb.org/t/p/w400${image}`} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="d-flex justify-content-between"> 
             <p> 
            <svg viewBox="0 0 511.998 511.998" className={`${styles.img__svg}`} xmlns="http://www.w3.org/2000/svg"><path d="m414.168 500.62-158.169-83.155-158.169 83.155 30.207-176.121-128.037-124.735 176.86-25.689 79.139-162.697 79.139 162.697 176.86 25.689-128.037 124.734z"/></svg>     
            <span className={`${styles.span}`}>{rate}</span>
            </p>
            <span className={`${styles.span}`}>{date}</span>
            </div>
      </div>
    </div>
  </div>


  }
