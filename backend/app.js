const path = require("path");
const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler")

require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require('express');
const wordRoutes = require('./words/words.router');


const app = express();
const cors = require('cors');
app.use(express.json());

app.use(cors({
    origin: [ 'https://jordle.onrender.com',
              'http://localhost:3000']  
  }));

app.use('/words', wordRoutes);



app.use(notFound);
app.use(errorHandler);

module.exports = app;