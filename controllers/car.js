const Car = require('../models/car');

async function index(req, res) {
    try {
     const cars = await Car.find({}) 
     console.log(cars)
     res.render('cars', {title: ' car list', cars })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal server error');

    }

}
function newCar(req, res) {
    res.render('cars/new', {title: 'new car'})
}

async function postCar(req, res) {
    try {
        const { brand = "brand", year = " year", type = " type", mileage = "mileage" } = req.body;
        const newCar = new Car({
            brand: brand,
            year: year,
            type: type,
            mileage: mileage,
        })
        await newCar.save()
        res.status(201).redirect('/cars')
        
    } catch (error) {
        console.error(errror.message);
        res.status(500).send('Internal server error')
    }
}
module.exports = {index, newCar, postCar,}