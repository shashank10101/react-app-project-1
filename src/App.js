import React from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';
import { useState } from "react";
// c78d0dc6

const API_url = 'http://www.omdbapi.com?apikey=c78d0dc6';


const movie = {
    "Poster": "https://flxt.tmsimg.com/assets/p14569140_v_h10_ag.jpg",
    "Title": "Spider-Man Title Reveal",
    "Type": "movie",
    "Year": "2021",
    "imdbID": "tt14122734"
}


const App = () =>{
    const [movies, setMovies] = useState([]);

    const SearchMovies = async (title) => {
        const response = await fetch(`${API_url}&s={title}`);
        const data = await response.json();

        setMovies(data.Search);

    }

    useEffect(() => {
        SearchMovies('Spiderman');

    },[]);


    return(
        <div className="app">
            <h1>MoviesSelect</h1>

            <div className="search">
                <input placeholder="Search for movies"
                value="Superman"
                onChange={() => {}}
                />
                <img
                src={SearchIcon}
                alt="Search"
                onClick={() => {}}
                />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) =>(
                            <MovieCard movie={movie}/>
                        ))}

                    </div>
                ) :(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        
        </div> 
    ); 

}

export default App;