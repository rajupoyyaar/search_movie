import React from "react"
import Home from "./Components/Home"
import MovieWatchlist from "./Components/MovieWatchlist"
import MovieDetails from "./pages/MovieDetail"
import {Route,Routes} from "react-router-dom"
import Navbar from "./Components/Navbar"

function App() {
  return (
   <div className="app-container">
      <Navbar />
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/watchlist" element={<MovieWatchlist />} />
          <Route path="/moviedetails/:id" element={<MovieDetails />}/>
       </Routes>
   </div>
  );
}

export default App;
