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
async function showCar(req, res) {
    try {
        const car = await Car.findbyId(req.params.id);
    if (car) {
        res.render('cars/show', { title: 'Car Details', car })
    } else {
        res.status(404).render('404/notFound', { title: " Car not found!" })
        
        }       
    } catch (error) {
        console.error(error.message);
        res.status(500).send('')
    }
}
async function editCar(req, res) {
    try {
        const car = await Car.findById(req.params.id);
        if (car) {
            res.render('Car/edit', {title: 'Edit Car', car });
        } else {
            res.status(404).render('404/notFound', { title: 'Car not Found! '})
        }
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Internal Server Error!')
    }
}
async function updateCar(req, res) {
    try {
        const carId = parseInt(req.params.id);
        const { id } = req.params;

        const updatedCar = await Car.findByIdAndUpdate(id, req.body)
        if (updatedCar) {
            res.status(200).redirect('/cars');
        } else {
            res.status(400).render('404/notFound', { title: ' Car Not Found!'});
        }
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Internal Server Error!')
    }
}
async function deleteCar(req, res) {
    try {
        const { id } = req.params;
        const deletedCar = await Car.findByIdAndDelete(id)
        if (deletedCar) {
            res.status(200).redirect(`/cars`)
        } else {
            res.status(400).render('404/notFound', { title: 'Car not Found!'});
        }
        res.redirect('/cars')
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!")
    }
    res.redirect('/cars')
}
module.exports = { index, newCar, postCar, showCar, editCar, updateCar, deleteCar,}