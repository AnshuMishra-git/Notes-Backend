// require the express module
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/index');
const connect = require('./dbconnect');
connect.then((db) => {
  console.log(`Connected to MongoDB`);
}).catch((e) => {
  console.error(`Could not init db\n${e.trace}`);
});

app.use(cors());

// bodyparser middleware
app.use(bodyParser.json());

// routes
require('./routes/route')(app);


const server = express()
  .use(app)
  .listen(config.port, () => console.log(`Listening Socket on ${config.port}`));
