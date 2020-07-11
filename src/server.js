const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const mongodbUrl = "mongodb://localhost/otakufanart";
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const mongoStore = require('connect-mongo')(session);

mongoose.connect(mongodbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', (error) => {
    console.error(error);
});
db.once('open', () => {
    console.log('Successfully connected to mongodb');
});

app.use(cors(
    {
        exposedHeaders: ['Set-Cookie', 'set-cookie'],
        origin: [
            "http://localhost:3000",
            "http://localhost:3001",
            "http://127.0.0.1:3000",
            "http://127.0.0.1:3001",
            "http://localhost",
            "http://127.0.0.1",
        ],
        credentials: true,
    }
));

app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'rHW5%Dze4.$`TJKZ',
    store: new mongoStore({ mongooseConnection: db }),
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

require('./api/authorization')(passport);

app.use('/api/', require('./api/routes'));
app.listen(3001);