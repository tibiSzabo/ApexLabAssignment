import { useQuery } from "react-query"
import { GraphQLClient, gql } from "graphql-request"

const API_URL = `https://tmdb.sandbox.zoosh.ie/dev/graphql`

const graphQLClient = new GraphQLClient(API_URL, {})

export type Genre = {
    name: string
}

export type Movie = {
    name: string,
    score: number,
    genres: Genre [],
    id: string
}

export function useSearchMovies(title: string) {
    return useQuery<Movie[], Error>(title, async () => {
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