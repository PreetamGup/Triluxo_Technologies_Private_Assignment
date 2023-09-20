const router= require('express').Router();
const {getBookController,getallBookController,addBookController,updateBookController,deleteBookController} = require('../Controllers/bookController')

router.get('/books', getallBookController);
router.get("/books/:id", getBookController);
router.post("/books", addBookController);
router.put("/books/:id", updateBookController);
router.delete("/books/:id", deleteBookController)

module.exports= router