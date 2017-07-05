// @flow
import express from 'express';
import expressGraphQL from 'express-graphql';

import schema from './data/schema';

const port = 3000;
const app = express();

app.use('/graphql', expressGraphQL(req => ({
  schema,
  graphiql: true,
  rootValue: { request: req },
  pretty: true,
})));

app.listen(port, () => {
  console.info(`The server is running at http://localhost:${port}/`);
});
