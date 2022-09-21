import React, { useState } from 'react'
import Search from "./components/search/Search"
import Movie from "./components/movie/Movie"
import Movies from "./components/movies/Movies"

import { CircularProgress, Grid } from "@mui/material"

import './App.scss'
import { useSearchMovies } from "./useRequest"

function App() {
    const [queryString, setQueryString] = useState<string>('')
    const { data: movies, error, isSuccess, isLoading, isError } = useSearchMovies(queryString)

    const handleSearch = (queryString: string) => {
        setQueryString(queryString)
    }

    return (
        <div className="App">
            <Grid container spacing={ 2 }>
                <Grid item xs={ 4 }>
                    <Search onSearch={ handleSearch }/>
                </Grid>
                <Grid item xs={ 8 }>
                    <Movie/>
                </Grid>
                <Grid item xs={ 4 }>
                    { isLoading && <CircularProgress /> }
                    { !isLoading && isSuccess && <Movies movies={movies} /> }
                </Grid>
            </Grid>
        </div>
    )
}

export default App
