const express = require('express');
const path = require('path');

const app = express();

// initialze dotenv config file for process variables
require('dotenv').config();

// middleware to recognize incoming request Objects as string or arrays
app.use(express.urlencoded({ extended: false }))

// set view engine and views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// server static files
app.use(express.static(path.join(__dirname, 'public')));

// routes for sending & receving request
app.get('/', function(req, res){
  res.send("Home Route");
})

// setup server to listen on port 5000
app.listen(process.env.PORT, function(err){
  if(err) console.log('Error occured', err)
  console.log(`Express server running at http://localhost:${5000}`);
})