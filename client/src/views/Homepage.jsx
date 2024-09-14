import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import BookList from "../components/BookList.jsx";
import Counter from "../components/Counter.jsx";
import Book from "../components/Book.jsx";

import { GET_ALL_BOOKS, } from "../store/slices/books";
import { DELETE_BOOK } from '../store/slices/book';


const Homepage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [recomendedBook, setRecomendedBook]= useState({})
    const books = useSelector((state) => state.books.items);

    useEffect(() => {
        getBooks()
    }, []);


    useEffect(() => {
        setRecomendedBook = books[0];
    },[books]);

    function getBooks() {
        dispatch(GET_ALL_BOOKS())
    }

    async function deleteBook(id) {
        await dispatch(DELETE_BOOK(id));
        getBooks();
    };

    return (
        <div className="flex flex-col md:grid auto-rows-max grid-cols-12 gap-4">
            <section className="bg-slate-600 row-start-1 col-span-12 h-[600px]">
                Message
            </section>
            <section className="md:grid grid-rows-1 grid-cols-12 row-start-2 col-span-12 gap-4 bg-yellow-300 ">
                <section className="md:grid auto-rows-max bg-blue-600 row-start-1 col-span-8 ">
                    <div className="flex items-center justify-center row-start-1 gap-4">
                        <BookList books={books} deleteBook={deleteBook}></BookList>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center bg-green-600 row-start-2 gap-4">
                        <Counter icon="Books" number={books.length} text="Total Books"></Counter>
                        <Counter icon="asdasd" number="2" text="My text"></Counter>
                        <Counter icon="asdasd" number="3" text="My text"></Counter>
                    </div>
                </section>
                <section className="bg-red-600 row-start-1 col-span-4">
                    Book Recomendation
                    <Book book={recomendedBook}></Book>
                </section>
            </section>
            <section className="bg-blue-300 row-start-3 col-span-12 h-[400px]">
                Author Highlight
            </section>
        </div>
    )
}

export default Homepage;