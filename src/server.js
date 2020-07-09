const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const mongodbUrl = "mongodb://localhost/otakufanart";
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
require('./api/authorization');

mongoose.connect(mongodbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', (error) => {
    console.error(error);
});
db.once('open', () => {
    console.log('Successfully connected to mongodb');
});

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use(cookieParser());
app.use(session({secret: 'rHW5%Dze4.$`TJKZ'}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/', require('./api/routes'));
app.listen(3001);