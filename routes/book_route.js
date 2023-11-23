const express = require("express");
const router = express.Router();

const Book = require("../models/book");
const Issue = require("../models/issue");





router.post("/addBook", async (req, res) => {

   const { title,author,genre,year,copies } = req.body ;
     console.log("req.body",req.body)
    if(req.body._id){
        const obj = await Issue.find({_id:req.body._id})
        obj[0].isRecom = false 
        await obj[0].save()
    }
    const book = await new Book({ title,author,genre,year,copies})
    await book.save()

    // const book = new Book({
    //     title,author,genre,year,copies
    // })
    // book.save().then(result => {
    //     res.status(201).json({
    //         message: "Done upload!",
            
    //     })
    // }).catch(err => {
    //     console.log(err),
    //         res.status(500).json({
    //             error: err
    //         });
    // })
 
})
router.get("/allBook", (req, res) => {
    Book.find().sort({ createdAt: -1 }).then(data => {
        res.status(200).json(
           data
        );
    });
});
   

router.delete('/deleteBook/:bookId', async (req, res) => {
    const bookId = req.params.bookId;
  
    try {
      console.log('Deleting book with ID:', bookId);
      const deletedBook = await Book.findByIdAndDelete(bookId);
      console.log('Deleted Book:', deletedBook);
  
      if (deletedBook) {
        console.log('Book deleted successfully.');
        res.status(200).json({ message: 'Book deleted successfully.' });
      } else {
        console.log('Book not found.');
        res.status(404).json({ error: 'Book not found.' });
      }
    } catch (error) {
      console.error('Error deleting book:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});



module.exports = router;