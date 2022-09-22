import React, { useEffect, useState } from 'react'
import { MovieType } from "../../useRequest"

import { CircularProgress } from "@mui/material"

import './Movie.scss'

type MovieProps = {
    movie: MovieType
}

function Movie({ movie }: MovieProps) {
    const [movieWikipediaData, setMovieWikipediaData] = useState<any>(null)
    const [isFetchingData, setIsFetchingData] = useState<boolean>(false)
    const [noDataFound, setNoDataFound] = useState<boolean>(false)
    const [isFetchError, setIsFetchError] = useState<boolean>(false)

    const getFirstSearchResultTitle = async () => {
        const searchParams = {
            format: 'json',
            action: 'query',
            list: 'search',
            srsearch: movie.name,
            origin: '*'
        }
        return fetch('https://en.wikipedia.org/w/api.php?' + new URLSearchParams(searchParams))
            .then((response) => response.json())
            .then((data) => {
                if (data.query.search.length < 1) {
                    return null
                }
                return data.query.search[0].title
            })
            .catch((err) => {
                setIsFetchError(true)
                console.log(err)
            })
    }

    const fetchMovieFromWiki = async () => {
        setIsFetchingData(true)
        setIsFetchError(false)
        setNoDataFound(false)
        setMovieWikipediaData(null)

        const title = await getFirstSearchResultTitle()

        if (!title) {
            setNoDataFound(true)
            return
        }

        const searchParams = {
            format: 'json',
            action: 'query',
            prop: 'extracts',
            titles: title,
            origin: '*'
        }
        fetch('https://en.wikipedia.org/w/api.php?' + new URLSearchParams(searchParams))
            .then((response) => {
                setIsFetchingData(false)
                return response.json()
            })
            .then((data) => {
                const dataKey = Object.keys(data.query.pages)[0]
                const { extract } = data.query.pages[dataKey]
                setMovieWikipediaData(extract)
            })
            .catch((err) => {
                setIsFetchError(true)
                console.log(err)
            })
    }

    useEffect(() => {
        fetchMovieFromWiki()
    }, [movie])

    return (
        <>
            {isFetchingData && <CircularProgress className="spinner" size={80}/>}
            { noDataFound && <div>No data found on wikipedia</div> }
            { isFetchError && <div>Something went wrong during wikipedia search</div> }
            { movieWikipediaData &&
                <div className="movie-container" dangerouslySetInnerHTML={ { __html: movieWikipediaData } }></div> }
        </>
    )
}

export default Movie
