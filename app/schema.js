import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'

const data = require('./data.json')

const User = new GraphQLObjectType({
  name: 'User',
  description: 'Represent the type of an user',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    twitterHandle: {type: GraphQLString}
  }
})

const Query = new GraphQLObjectType({
  name: 'Queries',
  fields: {
    user: {
      type: User,
      description: 'Get user by id',
      args: {
        id: { type: GraphQLInt }
      },
      resolve (rootValue, args, info) {
        return data[args.id]
      }
    },
    users: {
      type: new GraphQLList(User),
      description: 'Get users list',
      resolve (rootValue, args, info) {
        return Object.keys(data).map(key => data[key])
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    createUser: {
      type: User,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        twitterHandle: {type: GraphQLString}
      },
      resolve (rootValue, args) {
        var id = Object.keys(data).pop()
        let author = Object.assign({}, args, {id: id++})
        data[id] = author
        return author
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})

export default schema
