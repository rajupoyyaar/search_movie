import React, { useContext } from "react"
import {Link} from "react-router-dom"
import {watchListContext} from "./Context"

function MoviesList({movies}) {
    const {addToWatchList} = useContext(watchListContext)
    return(
        <div>
            {movies.map(movie => {
                const {Poster,Title,imdbID} = movie
                return (
                    <div key={imdbID} className="single-movie">
                        <img src={Poster} alt={Title}/>
                        <span className="single-movie-btn">
                        <Link to={`/moviedetails/${imdbID}`}>details</Link>
                        <button onClick={() => addToWatchList(movie)}>
                            Add to Watchlist
                        </button>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default MoviesList
