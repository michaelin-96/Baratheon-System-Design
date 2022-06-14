var express = require('express');


// Set up Middleware
var morgan = require('morgan');
var cors = require('cors');

// Router
var router = require('./routes.js');


var app = express();

// Set up listening port
app.set('port', 3000);

// Logging & Parsing w/ Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Set up our routes
app.use('/qa', router);


app.get(`/${process.env.LOADER}`, (req, res) => {
  res.send(`/${process.env.LOADER}`);
});
// If we are being run directly, run the server.
if(!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
