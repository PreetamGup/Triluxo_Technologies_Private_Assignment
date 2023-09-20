const Books = require("../model/bookModel")


const getallBookController=async(req,res)=>{
    try {
        const books = await Books.find({});
        res.json(books);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

const getBookController= async(req,res)=>{
    try {
        const book = await Books.findById(req.params.id);
        if(!book){
         return res.status(500).json({
            message:"Book is not available"
          })
        }
        
        res.json(book);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

const addBookController =async(req,res)=>{
    const { bookName, author, isbn } = req.body

    const bookOrnot= await Books.find({author});

    if(bookOrnot.length!==0){
      return res.json({
        message:"Book with this name already exist"
      });
    }

    try {
      const book = new Books({ bookName, author, isbn });
      await book.save();
      res.json({
        book,
        message:"Book added successfully"
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}


const updateBookController= async(req,res)=>{
    try {
        const updatedBook = await Books.findByIdAndUpdate(req.params.id, req.body);
        if(!updatedBook){
          return res.status(500).json({
            message:"Book is not available"
          })
        }
        res.json({
          message:"Book updated successfully"
        });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

const deleteBookController=async(req,res)=>{
    try {
       const deletedBook= await Books.findByIdAndDelete(req.params.id);
      
       if(!deletedBook){
          return res.status(500).json({
            message:"Book is not available"
          })
       }
        res.json({ 
          message: 'Book deleted successfully' 
        });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}


module.exports={getBookController, getallBookController, updateBookController, deleteBookController, addBookController};