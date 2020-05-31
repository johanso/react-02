import React from 'react'

function BtnLoadMore({text, getLoadMore}) {
   return (
      <div className="mt-2">
         <button 
            onClick={getLoadMore}
            className="btn btn-block btn-success p-2"
         >
            {text}
         </button>
      </div>
   )
}

export default BtnLoadMore
