// npm install --save express body-parser mongoose
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const port 			 = 7000;
const user 			 = require('./routes/user.route'); // Imports routes for the users

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/first';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log("database","connected");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//end conenction codes
app.use('/users', user); //route mapping
 //route mapping
app.listen(port, () => {
  console.log('We are live on ' + port);
});	
