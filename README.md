# grapql-experiment

## Installation

Run this command in console to install project.
```
git clone git@github.com:kulakowka/graphql-experiment.git && cd graphql-experiment && npm install
```

#### 1. Start GraphQL server.

```
npm start
```

#### 2. Open [GraphiQL Browser](https://github.com/graphql/graphiql): 
    
Open link in your browser [http://localhost:3000](http://localhost:3000)

## Queries

### Get user by id

GraphQL query:

```graphql
query getUser($id: Int!) {
  user(id: $id) {
    name,
    twitterHandle,
    id
  }
}
```

Query variables:

```json
{
  "id": 1
}
```

Query result:

```json
{
  "data": {
    "user": {
      "name": "Dan",
      "twitterHandle": "@dan",
      "id": 1
    }
  }
}
```

### Get users list

GraphQL Query:

```graphql
query getUsers {
  users {
    name,
    twitterHandle,
    id
  }
}
```

Query result:

```json
{
  "data": {
    "users": [
      {
        "name": "Dan",
        "twitterHandle": "@dan",
        "id": 1
      },
      {
        "name": "Lee",
        "twitterHandle": null,
        "id": 2
      },
      {
        "name": "Nick",
        "twitterHandle": null,
        "id": 3
      }
    ]
  }
}
```

## Mutations

### Create user

GraphQL query:

```graphql
mutation {
  createUser(
    name: "Anton Kulakov",
    twitterHandle: "@kulakowka"
  ) {
    id,
    name,
    twitterHandle
  }
}
```

Query result:

```json
{
  "data": {
    "createUser": {
      "id": 4,
      "name": "Anton Kulakov",
      "twitterHandle": "@kulakowka"
    }
  }
}
```

## Resources

- [Introduction to GraphQL](https://learngraphql.com/) - a good walk through of GraphQL cocepts.
- [Awesome GraphQL](https://github.com/chentsulin/awesome-graphql) - awesome list of GraphQL & Relay


