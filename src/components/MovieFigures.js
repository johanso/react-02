import React from 'react'
import styles from './movieFigures.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMoneyBillAlt, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

function MovieFigures() {
   return (
      <div className={styles.figures}>
         <div className="container">
            <div className="row">
               <div className="col-sm-4 d-flex align-items-center">
                  <FontAwesomeIcon icon={faClock} size="2x" className="mr-2" />
                  <strong>Running time: 2h 8m</strong>
               </div>
               <div className="col-sm-4 d-flex align-items-center">
                  <FontAwesomeIcon icon={faMoneyBillAlt} size="2x" className="mr-2" />
                  <strong>Budget: $170,000,000</strong>
               </div>
               <div className="col-sm-4 d-flex align-items-center">
                  <FontAwesomeIcon icon={faTicketAlt} size="2x" className="mr-2" />
                  <strong>Revenue: $1,202,110,361</strong>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MovieFigures
