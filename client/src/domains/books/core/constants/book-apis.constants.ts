import BookEventTypes from "./book-event-types.constants";
import baseURL from "../../../../config/api-root";

const apiPaths = {
    [BookEventTypes.GET_ALL_BOOKS]: baseURL + "/api/books/",
    [BookEventTypes.GET_BOOK]: baseURL + "/api/books/{id}",
    [BookEventTypes.CREATE_BOOK]: baseURL + "/api/books/",
    [BookEventTypes.UPDATE_BOOK]: baseURL + "/api/books/{id}",
    [BookEventTypes.DELETE_BOOK]: baseURL + "/api/books/{id}",
}

export default apiPaths;