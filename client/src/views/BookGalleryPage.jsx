import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import BookList from "../components/BookList.jsx";
import Filters from "../components/Filters.jsx";

import { GET_FILTERED_BOOKS} from "../store/slices/books";

const BookGalleryPage = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.filteredItems);
    let [filters, setFliters] = useState({
        name: '',
        author: '',
        genre: '',
    });

    useEffect(() => {
        getBooks()
    }, [filters]);

    const getBooks = () => {
        dispatch(GET_FILTERED_BOOKS(filters))
    }

    const updateFilters = (value) => {
        return setFliters((prev) => {
            return { ...prev, ...value };
        })
    }

    return (
        <div className="grid grid-cols-3 grid-rows-1 px-5">
            <section className="max-w-96">
                <Filters fields={filters} onChange={updateFilters}/>
            </section>
            <section className='col-span-2'>
                <BookList books={books}></BookList>
            </section>
        </div>
    )
}

export default BookGalleryPage;