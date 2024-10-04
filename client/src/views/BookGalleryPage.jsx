import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import BookList from "../components/BookList.jsx";
import TextInput from "../components/TextInput.jsx";

import { GET_FILTERED_BOOKS} from "../store/slices/books";

const BookGalleryPage = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.filteredItems);
    let [filters, setFliters] = useState({});

    useEffect(() => {
        getBooks()
    }, [filters]);

    function getBooks() {
        dispatch(GET_FILTERED_BOOKS(filters))
    }

    const updateFilters = (value) => {
        return setFliters((prev) => {
            return { ...prev, ...value };
          })
      }

    return (
        <div className="grid grid-cols-3 grid-rows-1">
            <section className="max-w-96 bg-primary">
                <h2>Filters (WIP)</h2>
                <h3>Move filters to a component</h3>
                <label
                  htmlFor="name"
                >
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <TextInput 
                      name="name"
                      value={filters?.name}
                      placeholder="Name" 
                      onChange={(text) => updateFilters({ name: text})}/>
                  </div>
                </div>
                <label
                  htmlFor="name"
                >
                  Author
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <TextInput 
                      name="author"
                      value={filters?.author}
                      placeholder="Author" 
                      onChange={(text) => updateFilters({ author: text})}/>
                  </div>
                </div>
            </section>
            <section className='col-span-2'>
                <BookList books={books}></BookList>
            </section>
        </div>
    )
}

export default BookGalleryPage;