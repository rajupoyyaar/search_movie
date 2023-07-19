import React from "react"
import {Link} from "react-router-dom"

function Navbar() {
    return(
        <nav>
            <h3>MOVIES</h3>
            <Link to="/"> home </Link>
            <Link to="/watchlist"> watchlist </Link>
        </nav>
    )
}

export default Navbar