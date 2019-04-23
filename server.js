// Require express npm
var express = require("express");

// Tells node that we are creating an "express" server
var app = express();

// Set an initial port. 
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());