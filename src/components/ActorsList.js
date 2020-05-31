import React from 'react'
import Loading from '../components/Loading'
import Actor from './Actor'

function ActorsList({ actors }) {
   return (
      <div className="row">
         {  actors ?
            actors.map( actor => (
               <Actor 
                  key={actor.cast_id}
                  actor={actor}
               />
            )) : <Loading />
         }
      </div>
   )
}

export default ActorsList
