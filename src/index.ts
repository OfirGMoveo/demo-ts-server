import * as express from 'express'
import * as bodyParser from 'body-parser'

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).send(`hello from test server, im on port ${port}`));

app.listen(port, () => console.log(`up on port ${port}`));