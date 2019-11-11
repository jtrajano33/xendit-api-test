require('dotenv').config();
const express = require("express");
const db = require('./config/db')
const cors = require('cors');

const app = express();

app.use(cors());

db.connect()

app.use(express.json());

app.use('/orgs', require("./routes/orgs"));

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})

module.exports = app;