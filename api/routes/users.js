const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/getAllBooks',userController.getAllBooks)
router.post('/addBook',userController.addBook)
router.get('/detailBook/:id',userController.detailBook)
router.post('/editBook/:id',userController.editBook)
router.post('/changeStatus/:id',userController.changeStatus)

module.exports = router; 