import React from 'react'
import { GenreType, MovieType } from "../../useRequest"

import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Link } from "@mui/material"

import './Movies.scss'

type MoviesProps = {
    movies: MovieType [],
    onMovieClicked: (Movie: MovieType) => void
}

function Movies({ movies, onMovieClicked }: MoviesProps) {

    const createGenreString = (genres: GenreType[]) => genres.map(genre => genre.name).join(', ')

    return (
        <TableContainer className="table-container">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Genres</TableCell>
                        <TableCell>Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { movies?.map((movie) =>
                        <TableRow
                            key={ movie.id }
                        >
                            <TableCell>
                                <Link className="movie-title" onClick={() => onMovieClicked(movie)}>{ movie.name }</Link>
                            </TableCell>
                            <TableCell>{ createGenreString(movie.genres) }</TableCell>
                            <TableCell>{ movie.score }</TableCell>
                        </TableRow>
                    ) }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Movies
