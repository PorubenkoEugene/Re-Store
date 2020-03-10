

const booksRequested = () => {
     return {
         type: 'FETCH_BOOKS_REQUEST'
     }
 };
const booksLoaded = (payload) => {
    return {
        type:'FETCH_BOOKS_SUCCESS',
        payload
    }
};
const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload:error
    }
};

const fetchBooks = (bookStoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookStoreService.getBooks()
        .then(data=> dispatch(booksLoaded(data)))
        .catch(err=>dispatch(booksError(err)));
};

export {
    fetchBooks
};
