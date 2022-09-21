import React from 'react'

import { Button, TextField } from "@mui/material"

import './Search.scss'

type SearchProps = {
    onSearch: (queryString: string) => void
}

function Search({ onSearch }: SearchProps) {
    let inputValue = ''

    const onInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        inputValue = event.target.value
    }

    const handleSearch = () => {
        if (inputValue.trim() !== '') {
            onSearch(inputValue)
        }
    }

    return (
        <div className="search-container">
            <TextField onChange={ onInputValueChange } label="Movie title" variant="outlined"/>
            <Button onClick={ handleSearch } variant="text" size="large">Search</Button>
        </div>
    )
}

export default Search
