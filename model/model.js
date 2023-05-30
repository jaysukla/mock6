const mongoose = require('mongoose')
const connection = mongoose.connect('mongodb+srv://JayShukla:jayshukla@cluster0.9zippbx.mongodb.net/')


const User= mongoose.model('user',mongoose.Schema({
    name: String,
    email: String,
    password: String
}));


const Flight = mongoose.model('flight',mongoose.Schema({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: Date,
    arrivalTime: Date,
    seats: Number,
    price: Number
}));


const Booking= mongoose.model('booking',mongoose.Schema({
    user : Object,
    flight : Object
}))




module.exports={connection,User,Flight,Booking}