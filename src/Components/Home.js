import React, {useState} from "react"
import MoviesList from "../Movies"

function Home() {
    const [query,setQuery] = useState("")
    const [movies,setMovies] = useState([])

    const searchQuery = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch(`https://www.omdbapi.com/?apikey=38cef71a&s=${query}`)
            const data = await response.json()
            const {Search} = data
            if(Search){
                setMovies(Search)
            }
            else{
                setMovies([])
            }
        }
        catch(error){
            console.error(error)
        }  
    }
 
    const movieListElement =   <MoviesList movies={movies} />

    return(
        <div>
            <form onSubmit={searchQuery}>
                <label htmlFor="movie"></label>
                <input name="movie" type="text" placeholder="Zuracic park" value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            { movieListElement  }   
        </div>
    )
}

export default Home