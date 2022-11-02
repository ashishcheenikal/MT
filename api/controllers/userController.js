const Book = require("../models/books");

exports.getAllBooks = async(req, res) => {
  console.log("getAllBooks");
  try {
    const books = await Book.find({})
    res.json(books)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addBook = async(req, res) => {
  console.log('addBook');
  try {
    const {bookName,authorName,publishYear,price}= req.body;
    const book = await new Book({
      bookName,authorName,publishYear,price
    }).save()
    res.json(book)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.detailBook = async(req, res) => {
  console.log('detailBook');
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId)
    res.json(book)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.editBook = async(req, res) => {
  try {
    console.log(req.body);
    const bookId = req.params.id;
    const {bookName,authorName,publishYear,price}= req.body;
    const updateBook = await Book.findByIdAndUpdate(bookId,{bookName,authorName,publishYear,price})
    res.json(updateBook)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.changeStatus = async (req,res)=>{
  console.log('changeStatus');
  try {
    const bookId = req.params.id;
    const changeStatusBook = await Book.findByIdAndUpdate(bookId,{status:false})
    res.json(changeStatusBook)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}