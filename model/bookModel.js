const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    bookName:{
      type:String,
      require:true
    },
    author:{
      type:String,
      require:true
    },
    isbn:{
      type:String,
      require:true
    },
  },
  { timestamp: true }
);

const Books = mongoose.model("books", bookSchema);

module.exports = Books;