export const typeDefs = `#graphql
    type Game {
        id: ID!    # ! is to tell id can't be null.
        title: String!
        platform: [String!]! # Array of Strings, Two ! here 
    }
    type Review {
        id: ID!,
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query { # this is a mandatory type. These tell the api entrypoints.
        reviews: [Review]
        games: [Game]
        authors: [Author]
    }
`



// There are 5 types in this schema - Int, Float, String, Boolean, ID