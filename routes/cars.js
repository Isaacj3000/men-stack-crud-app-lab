const router = require('express').Router();
const carCtrl = require('../controllers/car');

router.get('/cars', carCtrl.index);
router.get('/cars/new', carCtrl.newCar);
router.post('/cars', carCtrl.postCar);
router.get('/cars/:id', carCtrl.showCar);
router.get('/cars/:id/edit', carCtrl.editCar);
router.put('/cars/:id', carCtrl.updateCar);
router.delete('/cars/:id', carCtrl.deleteCar);

module.exports = router;