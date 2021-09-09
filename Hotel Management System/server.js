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
const DB_URL = 'mongodb+srv://group11:group11@cluster0.ruwbl.mongodb.net/HotelManagementSystem?retryWrites=true&w=majority';

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