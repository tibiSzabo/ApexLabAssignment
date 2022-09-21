import React from 'react'

import { Button, TextField } from "@mui/material"

import './Search.scss'

function Search() {
    return (
        <div className="search-container">
            <TextField label="Movie title" variant="outlined" />
            <Button variant="text">Search</Button>
        </div>
    )
}

export default Search
