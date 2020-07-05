const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const mongodbUrl = "mongodb://localhost/otakufanart";

mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true  });

const db = mongoose.connection;
db.on('error', (error) => {
    console.error(error);
});
db.once('open', () => {
    console.log('Successfully connected to mongodb');
});

app.use(cors());
app.use(express.json());
app.use('/api/', require('./api/routes'));
app.listen(3001);