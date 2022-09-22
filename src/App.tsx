import React, { useState } from 'react'
import Search from "./components/search/Search"
import Movie from "./components/movie/Movie"
import Movies from "./components/movies/Movies"
import { MovieType, useSearchMovies } from "./useRequest"

import { CircularProgress, Grid } from "@mui/material"

import './App.scss'

function App() {
    const [queryString, setQueryString] = useState<string>('')
    const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null)
    const { data: movies, isSuccess, isLoading, isError } = useSearchMovies(queryString)

    const handleSearch = (queryString: string) => {
        setQueryString(queryString)
        setSelectedMovie(null)
    }

    const handleMovieClicked = (movie: MovieType) => setSelectedMovie(movie)

    return (
        <div className="App">
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 }>
                    <Search onSearch={ handleSearch }/>
                </Grid>
                <Grid item xs={ 4 }>
                    { isError && <div>Something went wrong...</div> }
                    { isLoading && <CircularProgress className="spinner" size={80}/> }
                    { !isLoading && isSuccess && <Movies onMovieClicked={ handleMovieClicked } movies={ movies }/> }
                </Grid>
                <Grid item xs={ 8 }>
                    { selectedMovie && <Movie movie={ selectedMovie }/> }
                </Grid>
            </Grid>
        </div>
    )
}

export default App
