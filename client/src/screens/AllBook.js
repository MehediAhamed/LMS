import React, { useState, useEffect } from 'react';
import { getAllBook, filterBook, filterBookByAuthor, filterBookByGenre, deleteBook } from "../actions/book_action"
import { issueABook, getAllIssuedBook } from "../actions/Issue_action"
import { useDispatch, useSelector } from 'react-redux'
import { Toast, Spinner } from "react-bootstrap"

const AllBook = () => {
    const dispatch = useDispatch();
    const [searchKey, setSearchKey] = useState("");
    const [searchKeyByAuthor, setSearchKeyByAuthor] = useState("");
    const [genreFilter, setGenreFilter] = useState(""); // Added state for genre filter
    const [show, setShow] = useState(false);
    const [bootTitle, setBookTitle] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        dispatch(getAllBook());
        dispatch(getAllIssuedBook());
    }, [show]);

    const { books } = useSelector(state => state.getAllBookReducer);
    const { all_IssuedBook } = useSelector(state => state.allIssuedBookReducer);
    const { currentUser } = useSelector(state => state.userLoginReducer);
    const userId = currentUser.user._id;
    const userName = currentUser.user.name;
    let sendReq = true
    let filterBook22 = all_IssuedBook && all_IssuedBook.filter(book => book.userId == userId);
    let newBooksId = filterBook22 && filterBook22.map(book => book.bookId);


    const handleDelete = (bookId) => {
        // Dispatch the deleteBook action with the bookId
        dispatch(deleteBook(bookId));
        window.location.reload();

    };
    const postData = (book) => {
        if (newBooksId && newBooksId.includes(book._id)) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }

        if (book.copies < 1) {
            return;
        }

        const { title, author, genre, year, _id, copies } = book;

        const issueUser = {
            title, author, genre, year, userId, bookId: _id, userName, copies
        };

        if (book.copies) {
            dispatch(issueABook(issueUser));
            setBookTitle(title);
            setShow(true);
            dispatch(getAllBook());
        } else {
            alert("book not available");
        }

        setTimeout(() => {
            setShow(false);
        }, 5000);
    };

    return (
        <div>
            <div className="col-md-10 m-auto">
                <h3 className='text-center bg-info p-2' style={{ fontFamily: "sans-serif", }}>All AVAILABLE BOOk IN LIBARY</h3>
                <br />
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Body style={{ backgroundColor: "green", color: "white", fontSize: "18px" }}>You successfully send issue request for {bootTitle}  </Toast.Body>
                </Toast>
            </div>

            {error && <div className="alert alert-danger"> You have already requested this book </div>}

            {!books.length ? (
                <div style={{ marginLeft: "40%", marginTop: "5%" }}>
                    <Spinner animation="border" variant="danger" />
                </div>
            ) : (
                <>
                    <div className="col-md-8 m-auto" style={{ display: "flex" }}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="search book by Name"
                            style={{ height: "50px" }}
                            onChange={(e) => setSearchKey(e.target.value)}
                            value={searchKey}
                        />
                        <button onClick={() => dispatch(filterBook(searchKey))} className="btn btn-primary">Search</button>
                    </div>
                    <br />
                    <div className="col-md-8 m-auto" style={{ display: "flex" }}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="search book by author"
                            style={{ height: "50px" }}
                            onChange={(e) => setSearchKeyByAuthor(e.target.value)}
                            value={searchKeyByAuthor}
                        />
                        <button onClick={() => dispatch(filterBookByAuthor(searchKeyByAuthor))} className="btn btn-primary">Search</button>
                    </div>
                    <br></br>
                    <div className="col-md-8 m-auto" style={{ display: "flex" }}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="filter book by genre"
                            style={{ height: "50px" }}
                            onChange={(e) => setGenreFilter(e.target.value)}
                            value={genreFilter}
                        />
                        <button onClick={() => dispatch(filterBookByGenre(genreFilter))} className="btn btn-primary">Filter</button>
                    </div>
                    <div className="col-md-10 m-auto">
                        <table className='table table-bordered table-responsive-sm' style={{ marginTop: "20px" }}>
                            <thead className='thead-dark' >
                                <tr>
                                    <th>Serial No.</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Genre</th>
                                    <th>Copies</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book, index) => (
                                    <tr key={book._id}>
                                        <td>{index + 1}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.genre}</td>
                                        <td>{book.copies}</td>
                                        <td>{book.copies > 0 ? "AVAILABLE" : "NOT AVAILABLE"}</td>
                                        <td>

                                            {currentUser.user.isAdmin && (
                                                <i
                                                    className='fa fa-trash m-1'
                                                    // Call handleDelete when the delete icon is clicked
                                                    onClick={() => {
                                                        handleDelete(book._id);
                                                        console.log(book._id);
                                                    }}
                                                ></i>

                                            )}

                                            {currentUser.user.isAdmin && (
                                                <><span> &nbsp;</span><i
                                                    className='fa fa-edit m-1'
                                                    onClick={() => {
                                                        // Add your edit logic here
                                                        console.log('Edit book:', book._id);
                                                    } }
                                                ></i></>

                                            )}
                                            {!currentUser.user.isAdmin && (
                                                <button onClick={() => postData(book)} className={`btn btn-success`}>Issue</button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default AllBook;
