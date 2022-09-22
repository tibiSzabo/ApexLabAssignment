import React, { useEffect, useState } from 'react'
import { MovieType } from "../../useRequest"

import './Movie.scss'

type MovieProps = {
    movie: MovieType
}

function Movie({ movie }: MovieProps) {
    const [movieWikipediaData, setMovieWikipediaData] = useState<any>(null)

    const fetchMovieFromWiki = async () => {
        const searchParams = {
            format: 'json',
            action: 'query',
            prop: 'extracts',
            titles: movie.name,
            origin: '*'
        }
        return fetch('https://en.wikipedia.org/w/api.php?' + new URLSearchParams(searchParams))
            .then((response) => response.json())
    }

    useEffect(() => {
        fetchMovieFromWiki().then((data) => {
            const dataKey = Object.keys(data.query.pages)[0]
            const { extract } = data.query.pages[dataKey]
            setMovieWikipediaData(extract)
        })
    }, [movie])

    return (
        <div className="movie-container" dangerouslySetInnerHTML={ { __html: movieWikipediaData }}></div>
    )
}

export default Movie
