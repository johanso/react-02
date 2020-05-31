import React, { useState, useEffect } from 'react'
// Components
import Jumbotrom from '../components/Jumbotrom'
import Search from '../components/Search'
import MovieCard from '../components/MovieCard'
import Paginator from '../components/Paginator'
import Loading from '../components/Loading'
// config home
import useFetch from '../hooks/useFetch'
import {API_URL, API_KEY} from '../config'

function Home() {
   
   const [ movies, setMovies ] = useState(null);
   const [ moviePoster, setMoviePoster ] = useState(null)
   const [ page, setPage ] = useState(1)
   const [ totalPages, setTotalPages ] = useState(0)
   const [ results, setTotalResults ] = useState(0)
   const [ termSearch, setTermSearch ] = useState(null)

   const getMovies = () => {
      if(termSearch) {
         return `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${termSearch}&page=${page}`
      } else if(!termSearch && page !== 0 ) {
         return `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      } else {
         return `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      }
   }
   
   const { response, loading } = useFetch(getMovies());

   const getSearch = (term) => {
      setTermSearch(term)
   }

   const getPage = (page) => {
      setPage(page)
      document.getElementById('root').scrollIntoView({
         block: 'start',
         behavior: 'smooth'
      })
   }
   
   useEffect(()=>{
      if(response) {
         setMovies(response.results)
         setPage(response.page)
         setTotalPages(response.total_results)
         setTotalResults(response.total_pages)
         setMoviePoster(response.results[0])
      }
      getMovies()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [response])

   return (
      <> 
         {
            !loading && moviePoster &&
            <Jumbotrom 
               moviePoster={moviePoster}
            />
         }
         <Search 
            getSearch={getSearch}
         />
         <div className="container my-4">
            <h2 className="h4 mb-4">Popular Movies</h2>
            <div className="row">
               {
                  !loading && movies
                  ? movies.map( movie => (
                     <MovieCard 
                        key={movie.id}
                        movie={movie} 
                     />
                  ))
                  : <Loading />
               }
            </div>
            {
               totalPages > page && !loading 
               ?  <Paginator
                     page={page}
                     results={results}
                     getPage={getPage}
                  /> 
               :  null
            }
            
         </div>
      </>
   )
}

export default Home
