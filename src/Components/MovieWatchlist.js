import React, { useContext } from "react"
import {watchListContext} from "../Context"

function MovieWatchlist() {
    const {watchList,removeWatchList} = useContext(watchListContext)
    if(watchList.length < 1){
        return <h1 className="empty-msg"> Watchlist is Empty...</h1>
    }
    return(
        <div>
            {watchList.map(movie =>{
                const {Poster,Title,imdbID} = movie
                return (
                    <div key={imdbID} className="movie-watchlist">
                        <img src={Poster} alt={Title}/>
                        <button onClick={()=>removeWatchList(movie)}>Remove watchlist</button>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieWatchlist