const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        greeting: String
    }
`
const resolvers = {
    Query: {
        greeting: () => 'Hello GraphQL world!'
    }
}

// console.log(typeDefs)

const server = new ApolloServer({typeDefs, resolvers})
server.listen({port: 9000})
    .then((serverInfo) => console.log(`Server running on ${serverInfo.url}`))

// same thing with url destructured
// server.listen({port: 9000})
//     .then(({url}) => console.log(`Server running on ${url}`))
