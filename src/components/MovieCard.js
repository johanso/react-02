import React from 'react'
import { Link } from 'react-router-dom'
import './movieCard.css'
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

function MovieCard({movie}) {
   return (
      <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
         <div className="card shadow">
            <Link to={{ pathname: `/${movie.id}` }}>
               <img src={ 
                  movie.poster_path 
                  ? `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}` 
                  :  `../images/no_image.jpg` } 
                  className="card-img-top" alt="movie" 
               />
               <div className="card-body">
                  <p className="card-text">
                     <span className="title">{ movie.title }</span>
                     <small className="year">({ movie.release_date })</small>
                  </p>
               </div>
            </Link>
         </div>
      </div>
   )
}

export default MovieCard
