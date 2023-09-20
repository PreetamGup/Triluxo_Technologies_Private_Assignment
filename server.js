const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDb = require('./Config/dbConnection');
const bookRouter= require('./routes/bookRouter')

const app = express();
dotenv.config();

connectDb();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/api", bookRouter)


app.listen(process.env.PORT || 8080, ()=>{
    console.log("Server Started");
})

