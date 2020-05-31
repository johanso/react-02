import React from 'react'
import styles from './actor.module.css'
import { IMAGE_BASE_URL, PROFILE_SIZE } from "../config";

function Actor({actor}) {
   return (
      <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
         <div className={styles.actor}>
            <div className="col-5 p-0">
               <img 
                  src={ 
                     actor.profile_path
                     ? `${IMAGE_BASE_URL}/${PROFILE_SIZE}/${actor.profile_path}` 
                     :  `../images/no_image.jpg` 
                  }
                  className="img-fluid" 
                  alt={actor.name} />
            </div>
            <div className="col-7 bg-dark d-flex ">
               <div className="actor-detail align-self-center">
                  <p className={styles.actorName}>{actor.name}</p>
                  <p className={styles.actorNameMovie}>{actor.character}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Actor
