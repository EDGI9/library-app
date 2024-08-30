const baseURL = "http://localhost:5000"
const apiPaths = {
    GET_ALL_BOOKS: baseURL + "/api/books/",
    GET_BOOK: baseURL + "/api/books/{id}",
    CREATE_BOOK: baseURL + "/api/books/",
    UPDATE_BOOK: baseURL + "/api/books/{id}",
    DELETE_BOOK: baseURL + "/api/books/{id}",
}

export default apiPaths;