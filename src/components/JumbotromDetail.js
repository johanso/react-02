import React, {useState, useEffect} from 'react'
import styles from './jumbotromDetail.module.css'
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../config";

function JumbotromDetail({movie, crew}) {

   const [director, setDirector] = useState('')

   useEffect(()=>{
      if( crew ) {
         const director = crew.filter( ocupation => (
            ocupation.job === 'Director'
         ))
         setDirector(director)
      }
   },[crew])
   
   console.log(director)

   return (
      <div
         style={{
            backgroundImage: movie
            ? `url(${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${movie.backdrop_path})`
            : null,
         }}
         className={`${styles.jumbt} jumbotron rounded-0 py-4 mb-0`}
      >
         <div className={`${styles.detail} container`}>
            
            <div className="row">
               <div className="col-md-3">
                  <img 
                     src={ 
                        movie.poster_path 
                        ? `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}` 
                        :  `../images/no_image.jpg` 
                     } 
                     className="card-img-top img-fluid d-none d-md-block" 
                     alt={movie.title} />
               </div>
               <div className="col-md-9 align-self-center my-3">

                  <div className="col-md-12 mb-3">
                     <h3 className="mb-3">{movie.title}</h3>
                     <div className="font-weight-bold mb-2">PLOT</div>
                     <p>{movie.overview}</p>
                  </div>
                  <div className="col-md-12 mb-3">
                     <div className="font-weight-bold mb-2">IMDB RATING</div>
                     <div className="progress w-50 bg-white">
                        <div style={{width: `${(movie.vote_average * 10)}%`}}
                           className="progress-bar bg-warning" 
                           role="progressbar" 
                           aria-valuenow="100" 
                           aria-valuemin="0" 
                           aria-valuemax="100">
                        </div>
                     </div>
                  </div>

                  <div className="col-md-12 mb-3">
                     {
                        director &&
                        <>
                           <div className="font-weight-bold mb-2">
                              { director.length > 1 ? 'DIRECTORS' : 'DIRECTOR' }
                           </div>
                           <span>
                              { director && director.map( dir => ( dir.name )) }
                           </span>
                        </>
                     }
                  </div>

               </div>
            </div>

         </div>
      </div>
   )
}

export default JumbotromDetail
