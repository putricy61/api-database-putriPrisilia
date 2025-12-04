const express = require('express') //untuk membuat router
const userControl = require('../controllers/userController')

const router = express.Router()

router.get('/',userControl.getAllBooks)
router.get('/:code', userControl.getBookByCode)
router.post('/',userControl.addBook)
module.exports = router