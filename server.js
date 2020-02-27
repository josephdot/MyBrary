if( process.env.NODE_ENV !== 'production' ){
  require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000;
const indexRouter = require('./routes/index')
const path = require('path')
const mongoose = require('mongoose')

// Middlewares
app.set('view engine', 'ejs') // ejs templaing engine
app.set('views', path.join(__dirname,"views") ) //views folder
app.set('layout', 'layouts/layout') // layouts file
app.use(expressLayouts) // layouts
app.use(express.static('public')) // Static assets css, images

// Mongoose setup
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', error => console.error(error))
db.once('open', () => console.info('mongoose connected'))

app.use('/', indexRouter)

app.listen( PORT, () => console.log( `Server Running at http://localhost: ${PORT}` ) );