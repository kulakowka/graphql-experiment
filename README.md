# grapql-experiment

#### Install

Run this command in console to install project.
```
git clone git@github.com:kulakowka/graphql-experiment.git && cd graphql-experiment && npm install
```

#### Testing

1. Start GraphQL server.

```
npm start
```

2. Open link in your browser: 
    
[http://localhost:3000/graphql?query={user(id:%221%22){name}}](http://localhost:3000/graphql?query={user(id:%221%22){name}})

GraphQL Query:
```
{
  user(id: "1") {
    name
  }
}
```

Response json:
```json
{
  "data": {
    "user": {
      "name": "Dan"
    }
  }
}
```