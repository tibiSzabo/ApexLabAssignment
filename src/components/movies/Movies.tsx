import React from 'react'
import { Movie } from "../../useRequest"

import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from "@mui/material"

import './Movies.scss'

type MoviesProps = {
    movies: Movie [] | undefined
}

function Movies({ movies }: MoviesProps) {
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
                            <TableCell>genres</TableCell>
                            <TableCell>{ movie.score }</TableCell>
                        </TableRow>
                    ) }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Movies
