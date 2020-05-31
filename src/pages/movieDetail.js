import React, {useState, useEffect} from 'react'
import { useLocation } from "react-router";
// Components
import JumbotromDetail from '../components/JumbotromDetail'
import Breadcrumb from '../components/Breadcrumb'
import MovieFigures from '../components/MovieFigures'
import ActorsList from '../components/ActorsList'
import Loading from '../components/Loading'
// config home
import useFetch from '../hooks/useFetch'
import {API_URL, API_KEY} from '../config'

function MovieDetail() {

   const [ movie, setMovie ] = useState(null);
   const [ credit, setCredit ] = useState(null);

   const location = useLocation();
   const { response, loading } = useFetch(`${API_URL}movie${location.pathname}?api_key=${API_KEY}&language=en-US`);

   
   useEffect(()=>{
      if(response) {
         setMovie(response)
         async function getCredit() {
            const resp = await fetch(`${API_URL}movie/${response.id}/credits?api_key=${API_KEY}&language=en-US`) 
            const data = await resp.json()
            setCredit(data)
         }
         getCredit()
      }
   }, [response])

   return (
      <>
         {
            !loading && movie && credit
            ?  <>
                  <Breadcrumb 
                     title={movie.title}
                     
                     />
                  <JumbotromDetail 
                     crew={credit.crew}
                     movie={movie}
                  />
                  <MovieFigures />
                  <div className="container my-4">
                     <h2 className="h4 mb-4">Actors</h2>
                     <ActorsList 
                        actors={credit.cast}
                     />
                  </div>
               </>
            : <Loading />
         }
         
      </>
   )
}

export default MovieDetail
