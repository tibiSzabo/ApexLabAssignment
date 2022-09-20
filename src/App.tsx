import React from 'react'
import './App.css'
import { useSearchMovies } from "./useRequest"

function App() {
    const { data: movies, isLoading, isSuccess, error } = useSearchMovies()
    return (
        <div className="App">
        </div>
    )
}

export default App
