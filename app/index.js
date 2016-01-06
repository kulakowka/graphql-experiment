import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import graphqlHTTP from 'express-graphql'
import express from 'express'

// Import our data set from above
var data = require('./data.json')

// Define our user type, with two string fields; `id` and `name`
var userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }
})

// Define our schema, with one top level field, named `user`, that
// takes an `id` argument and returns the User with that ID.
var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        args: {
          id: { type: GraphQLString }
        },
        resolve: function (_, args) {
          return data[args.id]
        }
      }
    }
  })
})

console.log('Server online!')

express()
  .use('/graphql', graphqlHTTP({ schema: schema, pretty: true }))
  .listen(3000)
