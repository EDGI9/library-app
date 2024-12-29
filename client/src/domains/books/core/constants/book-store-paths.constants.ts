import BookEventTypes from './book-event-types.constants';

const root = 'books';

const paths = {
    [BookEventTypes.GET_ALL_BOOKS]: `${root}/${BookEventTypes.GET_ALL_BOOKS}`,
    [BookEventTypes.GET_FILTERED_BOOKS]: `${root}/${BookEventTypes.GET_FILTERED_BOOKS}`,
    [BookEventTypes.GET_SEARCHED_BOOKS]: `${root}/${BookEventTypes.GET_SEARCHED_BOOKS}`,
    [BookEventTypes.GET_BOOK]: `${root}/${BookEventTypes.GET_BOOK}`,
    [BookEventTypes.UPDATE_BOOK]: `${root}/${BookEventTypes.UPDATE_BOOK}`,
    [BookEventTypes.DELETE_BOOK]: `${root}/${BookEventTypes.DELETE_BOOK}`,
};

export default paths;
