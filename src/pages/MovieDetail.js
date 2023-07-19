import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"

function MovieDetails() {
    const [movieDetail,setMovieDetail] = useState("")
    const {id} = useParams()

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=38cef71a&i=${id}`)
        .then(res => res.json())
        .then(data => setMovieDetail(data))
    },[id])

    console.log(movieDetail)
    const {Poster,Title,imdbRating,Year,Genre,Plot} = movieDetail
    return(
        <div>
            <img src={Poster} alt={Title} />
            <h2>{`${Title}   -   ${Year}`}</h2>
            <h4>{`Rating : ${imdbRating}`}</h4>
            <p>{`Genre: ${Genre}`}</p>
            <p>{`Story : ${Plot}`}</p>

        </div>
    )
}

export default MovieDetails