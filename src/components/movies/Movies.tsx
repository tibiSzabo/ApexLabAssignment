import React from 'react'
import { Genre, Movie } from "../../useRequest"

import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from "@mui/material"

import './Movies.scss'

type MoviesProps = {
    movies: Movie []
}

function Movies({ movies }: MoviesProps) {

    const createGenreString = (genres: Genre[]) => genres.map(genre => genre.name).join(', ')

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
                                { movie.name }
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
