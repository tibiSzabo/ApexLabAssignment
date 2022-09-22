import { useQuery } from "react-query"
import { GraphQLClient, gql } from "graphql-request"

const API_URL = `https://tmdb.sandbox.zoosh.ie/dev/graphql`

const graphQLClient = new GraphQLClient(API_URL, {})

export type GenreType = {
    name: string
}

export type MovieType = {
    name: string,
    score: number,
    genres: GenreType [],
    id: string
}

export function useSearchMovies(title: string) {
    return useQuery<MovieType[]>(title, async () => {
        const { searchMovies } = await graphQLClient.request(gql`
        query SearchMovies {
          searchMovies(query: "${ title }") {
            name
            score
            genres {name}
            id
          }
        }
        `)
        return searchMovies
    }, { refetchOnWindowFocus: false, enabled: !!title })
}