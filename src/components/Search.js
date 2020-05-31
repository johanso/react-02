import React, { useState } from "react";
import "./search.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search({ getSearch }) {

   const [ termSearch, setTermSearch ] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault();
      getSearch(termSearch)
   }

   return (
      <form 
         onSubmit={handleSubmit}
         className="bg-dark mt-1 py-3 shadow-sm">
         <div className="container">
            <div className="form-group m-0">
               <div className="icon-search">
                  <FontAwesomeIcon icon={faSearch} size="lg" />
               </div>
               <input
                  type="search"
                  className="form-control"
                  placeholder="Search movie..."
                  onChange={e => setTermSearch(e.target.value)}
               />
            </div>
         </div>
      </form>
   );
}

export default Search;
