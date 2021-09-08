/*const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
//const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());


const URL = 'mongodb+srv://pasindu:pasindu@roommanagement.9nhyw.mongodb.net/HotelManagementSystem?retryWrites=true&w=majority';

mongoose.connect(URL, {
useCreateIndex: true,
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false
})
/*.then(() =>{
    console.log("Mongodb Connection sucess!");
})
.catch((err) => console.log('DB connecction error', err));

const connection = mongoose.connection;
connection.once("open", () => {
console.log("Mongodb Connection sucess!");
})

const roomRouter = require("./routes/rooms.js");

http://locathost:8070/room

app.use("/room", roomRouter);

app.listen(PORT, () => {
console.log(`Server start on PORT ${PORT}`)
})*/



const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const fileUpload = require('express-fileUpload');


const app = express();

//import routes
const roomRoutes = require('./routes/rooms');

//app middleware
app.use(cors());
app.use(bodyParser.json());
//app.use(express.json());

//route middleware
app.use(roomRoutes);
// default options
app.use(fileUpload());

const PORT = 8070;
const DB_URL = 'mongodb+srv://pasindu:pasindu@cluster0.mphbq.mongodb.net/HotelManagementSystem?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false

})
.then(() =>{
console.log('MogoDB connected');
})
.catch((err) => console.log('MongoDB connection error', err));


app.listen(PORT, () => {

console.log(`App is running on ${PORT}`);
});