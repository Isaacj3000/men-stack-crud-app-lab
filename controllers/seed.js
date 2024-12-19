const car = require('../models/car');
const cars = require('../data/cars')



async function seedData(req, res) {
    try {
        await Car.insertMany(cars);
        res.status(201).send('Cars seeded successfully')
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error seeding cars')
    }
}



module.exports = { seedData }