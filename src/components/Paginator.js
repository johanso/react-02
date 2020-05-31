import React, { useState, useEffect } from 'react'
import styles from './paginator.module.css'

function Paginator({page, getPage, results}) {

   const [currenPage, setCurrentPage] = useState(page)

   const getPaginator = (e) => {
      if(e === 'prev') {
         setCurrentPage(currenPage - 1)
      } else if (e === 'next') {
         setCurrentPage(currenPage + 1)
      }
   }

   useEffect(()=>{
      getPage(currenPage)
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [currenPage])

   return (
      <nav aria-label="...">
         <ul className={`pagination pagination-lg justify-content-center`}>
            <li 
               className={ ` 'disabled' : null} page-item ${styles.itemCursor}` }>
               <span className="page-link" onClick={ () => getPaginator('prev')} >
                  <span aria-hidden="true">&laquo;</span>
               </span>
            </li>

            <li className="page-item active mx-1" aria-current="page">
               <span className="page-link">
                  { page }
                  <span className="sr-only">(current)</span>
               </span>
            </li> 

            <li 
               className={ `${currenPage >= results ? 'disabled' : null} page-item ${styles.itemCursor}` }>
               <span className="page-link" onClick={ () => getPaginator('next') }>
                  <span aria-hidden="true">&raquo;</span>
               </span>
            </li>
         </ul>
      </nav>
   )
}

export default Paginator
