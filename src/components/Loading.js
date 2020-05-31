import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner  } from '@fortawesome/free-solid-svg-icons';

function Loading() {
   return (
      <div className="my-3 text-center w-100 my-3">
         <FontAwesomeIcon icon={faSpinner} pulse size="3x" />
      </div>
   )
}

export default Loading
