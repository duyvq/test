const path = require('path')
const express = require('express');
// import { engine } from 'express-handlebars';
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db')
const bodyParser = require('body-parser')

// Connect too DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// Routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});