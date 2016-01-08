import expressGraphql from 'express-graphql'
import express from 'express'
import schema from './schema'

var app = express()

app.use('/', expressGraphql({
  schema: schema,
  graphiql: true
}))

app.listen(3000)
