import BookEventTypes from "./book-event-types.constants";

const apiPaths = {
    [BookEventTypes.GET_ALL_BOOKS]: "/api/books/",
    [BookEventTypes.GET_FILTERED_BOOKS]: "/api/books?{filters}",
    [BookEventTypes.GET_BOOK]: "/api/books/{id}",
    [BookEventTypes.CREATE_BOOK]: "/api/books/",
    [BookEventTypes.UPDATE_BOOK]: "/api/books/{id}",
    [BookEventTypes.DELETE_BOOK]: "/api/books/{id}",
}

export default apiPaths;