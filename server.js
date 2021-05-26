const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')
const app = express()

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Helloworld',
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => 'Hello World'
      }
    })
  })
})

app.use('/graphql', expressGraphQL({
  schema: schema,  
  graphiql: true

}))
app.listen(8000., () => console.log('server is running '))

