import React, { createContext,useState} from "react"
const watchListContext = createContext()

function MovieContext({children}) {
    const [watchList,setWatchList] = useState([])

    function addToWatchList(movie){
        const newWatchList = [...watchList, movie]
        setWatchList(newWatchList)
    }

    function removeWatchList(movie){
       const newWatchList = watchList.filter(newlist => {
           return  newlist.imdbID !== movie.imdbID
        })
        setWatchList(newWatchList)
    }

    return(
        <watchListContext.Provider value={{addToWatchList,watchList,removeWatchList}}>
            {children} 
        </watchListContext.Provider>
    )
}

export {MovieContext,watchListContext}
