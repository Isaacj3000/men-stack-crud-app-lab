const mongoose = require('mongoose');


const carSchema = new mongoose.Schema({
    name: { type: String, required: false},
    description: { type: String, required: false },
    image: String,
    year: Number,
    brand: String,
    types: String,
    mileage: String,


})

const Car = mongoose.model('Car', carSchema)
module.exports = Car