import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";
// Pages
import Home from './pages/home'
import MovieDetail from './pages/movieDetail'
// Components
import Navbar from './components/Navbar' 

function App() {
   return (
      <Router>
         <Navbar />
            <Switch>
               <Route path="/:movieId" exact>
                  <MovieDetail />
               </Route>
               <Route path="/" exact>
                  <Home />
               </Route>
            </Switch>
      </Router>
   );
}

export default App;
