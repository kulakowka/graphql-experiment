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

![2016-01-08 23 02 17](https://cloud.githubusercontent.com/assets/557190/12208171/289387f4-b65c-11e5-9320-8d0647dfa1aa.png)

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

![2016-01-08 23 05 06](https://cloud.githubusercontent.com/assets/557190/12208183/46c50130-b65c-11e5-87b5-1ed4331e00a7.png)

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

![2016-01-08 23 05 51](https://cloud.githubusercontent.com/assets/557190/12208191/61f1e6b2-b65c-11e5-9ada-d38e4c4a0223.png)

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


