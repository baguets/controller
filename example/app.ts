import * as express from 'express';
import * as bodyParser from 'body-parser';
import {registry} from '../src/RouterRegistry';

require('./TestController');

let app = express(); // create express server
app.use(bodyParser.json()); // setup body parser
registry.register(app);


app.listen(3001); // run express app

console.log('Express server is running on port 3001. Open http://localhost:3001/');