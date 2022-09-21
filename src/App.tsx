import React from 'react'
import Search from "./components/search/Search"
import Movie from "./components/movie/Movie"
import Movies from "./components/movies/Movies"

import { Grid } from "@mui/material"

import './App.scss'

function App() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Search />
            </Grid>
            <Grid item xs={6}>
                <Movie />
            </Grid>
            <Grid item xs={6}>
                <Movies />
            </Grid>
        </Grid>
    )
}

export default App
