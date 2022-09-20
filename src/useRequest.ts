import { useQuery } from "react-query"
import { GraphQLClient, gql } from "graphql-request"

const API_URL = `https://tmdb.sandbox.zoosh.ie/dev/graphql`

const graphQLClient = new GraphQLClient(API_URL, {})

type Genre = {
    name: string
}

type Movie = {
    name: string,
    score: number,
    genres: Genre []
}

export function useSearchMovies() {
    return useQuery<Movie[], Error>("get-posts", async () => {
        const { searchMovies } = await graphQLClient.request(gql`
        query SearchMovies {
          searchMovies(query: "fight club") {
            name
            score
            genres {name}
          }
        }
        `)
        return searchMovies
    })
}