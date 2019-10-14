import { GraphQLClient } from 'graphql-request'
export let gql
export const checkToken = () => {
    if (localStorage.authToken) {
        return (gql = new GraphQLClient('/graphql', {
            headers: { Authorization: `Bearer ${localStorage.authToken}` }
        }))
    }
    else {
        return (gql = new GraphQLClient("/graphql", { headers: {} }))
    }
}