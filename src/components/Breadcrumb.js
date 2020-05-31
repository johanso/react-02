import React from 'react'

function Breadcrumb({title}) {
   return (
      <nav aria-label="breadcrumb">
         <div className="container">
            <ol className="breadcrumb m-0">
               <li className="breadcrumb-item">Home</li>
               <li className="breadcrumb-item active" aria-current="page">{title}</li>
            </ol>
         </div>
      </nav>
   )
}

export default Breadcrumb
