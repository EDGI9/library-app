import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import BookList from "../components/BookList.jsx";
import Counter from "../components/Counter.jsx";
import Book from "../components/Book.jsx";

import homepageImage from '../assets/library-homepage-image.webp';

import { GET_ALL_BOOKS, } from "../store/slices/books";
import { DELETE_BOOK } from '../store/slices/book';

const Homepage = () => {
    const dispatch = useDispatch();
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
            <section className="md:grid grid-rows-1 grid-cols-12 row-start-1 col-span-12 h-[200px]  md:h-[600px]">
                <div className='flex flex-col md:flex-row items-center justify-center gap-4 col-start-2 col-span-10'>
                    <div>
                        <h1 className='flex flex-col lg:flex-row lg:space-x-3 text-5xl'><span>The</span> <b className='text-primary'>Bookshelf Bliss</b></h1>
                        <h6 className='text-sm'>Browse for books at anytime</h6>
                    </div>
                    <div className='hidden md:flex flex-col '>
                        <img src={homepageImage} height={500} width={700} alt="" />
                        <a className='text-[5px] self-end me-[10%]' href="https://www.freepik.com/free-vector/people-library-flat-vector-illustration_9176169.htm#fromView=keyword&page=1&position=6&uuid=71b74823-d0bc-4681-bae3-397ded119558" target='_blank'>Image by pch.vector on Freepik</a>
                    </div>
                </div>
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