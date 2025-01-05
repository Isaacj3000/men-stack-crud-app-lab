const router = require('express').Router();
const carCtrl = require('../controllers/car');

router.get('/cars', carCtrl.index);
// router.get('/cars/new', carCtrl.newBook);
// router.post('/cars', carCtrl.postBook);
// router.get('/cars/:id', carCtrl.showBook);
// router.get('/cars/:id/edit', carCtrl.editBook);
// router.put('/cars/:id', carCtrl.updateBook);
// router.delete('/cars/:id', carCtrl.deleteBook);



module.exports = router;