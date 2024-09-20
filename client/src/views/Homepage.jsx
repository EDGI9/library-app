import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { faker } from "@faker-js/faker";

import BookList from "../components/BookList.jsx";
import Counter from "../components/Counter.jsx";
import Book from "../components/Book.jsx";
import AuthorCard from "../components/AuthorCard.jsx";

import homepageImage from '../assets/library-homepage-image.webp';
import "../utils/tailwind-animation.js";

import { GET_ALL_BOOKS, } from "../store/slices/books";
import { DELETE_BOOK } from '../store/slices/book';

const Homepage = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.items);

    useEffect(() => {
        getBooks()
    }, []);

    function getBooks() {
        dispatch(GET_ALL_BOOKS())
    }

    async function deleteBook(id) {
        await dispatch(DELETE_BOOK(id));
        getBooks();
    };

    return (
        <div className="flex flex-col md:grid auto-rows-max grid-cols-12 gap-4">
            <section className="md:grid grid-rows-1 grid-cols-12 row-start-1 col-span-12 h-[200px]  md:h-[600px] md:mb-52">
                <div className='flex flex-col md:flex-row items-center justify-center gap-4 col-start-2 col-span-10'>
                    <div>
                        <h1 className='flex flex-col lg:flex-row lg:space-x-3 text-5xl'>
                            <span className='transform transition-all opacity-0 translate-y-12 ease-out duration-700 delay-200' data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>The</span>
                            <b className='text-primary transform transition-all opacity-0 -translate-y-12 ease-out duration-700 delay-500' data-replace='{ "-translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>Bookshelf Bliss</b>
                        </h1>
                        <h6 className='transform transition-all opacity-0 -translate-x-12 ease-out duration-700 delay-1000 text-sm' data-replace='{ "-translate-x-12": "translate-x-0", "opacity-0": "opacity-100" }'>Browse for books at anytime</h6>
                    </div>
                    <div className='hidden md:flex flex-col '>
                        <img src={homepageImage} height={500} width={700} alt="" />
                        <a className='text-[5px] self-end me-[10%]' href="https://www.freepik.com/free-vector/people-library-flat-vector-illustration_9176169.htm#fromView=keyword&page=1&position=6&uuid=71b74823-d0bc-4681-bae3-397ded119558" target='_blank'>Image by pch.vector on Freepik</a>
                    </div>
                </div>
            </section>
            <section className="grid grid-rows-1 grid-cols-12 row-start-2 col-start-1 col-span-12 mb-48 bg-white/10 backdrop-blur-md px-5 py-10">
                <div className='md:grid grid-cols-subgrid grid-rows-1 grid-cols-12 col-start-2 col-span-10 gap-4'>
                    <section className="md:grid auto-rows-max row-start-1 col-start-1 col-span-7">
                        <h1 className='flex justify-center md:justify-start row-start-1 text-4xl mb-7 gap-3'>
                            <span>Popular Books</span> 
                            <b className='text-primary'>This Week</b>
                        </h1>
                        <div className="flex items-center justify-start row-start-2 gap-4 mb-10">
                            <BookList books={books} deleteBook={deleteBook}></BookList>
                        </div>
                    </section>
                    <section className="row-start-1 col-start-8 col-span-4">
                        <h1 className='flex flex-wrap justify-center md:justify-start row-start-1 text-4xl mb-7 gap-3'>
                            <span>Recomendation</span> 
                            <b className='text-primary'>For You</b>
                        </h1>
                        <Book book={books[0]}></Book>
                    </section>
                </div>
            </section>
            <section className='row-start-3 col-span-12  mb-48'>
                    <div className="flex flex-col md:flex-row items-center justify-center row-start-3 gap-4">
                        <Counter icon="Books" number={books.length} text="Total Books"></Counter>
                        <Counter icon="asdasd" number="2" text="Authors"></Counter>
                        <Counter icon="asdasd" number={`${faker.number.float({ multipleOf: 0.25, min: 0, max:10 })}k`} text="Reviews"></Counter>
                    </div>
            </section>
            <section className="md:grid grid-rows-1 grid-cols-12 row-start-4 col-span-12 min-h-[400px]">
                <div className='col-start-2 col-span-10'>
                    <h1 className='flex text-4xl mb-7 gap-3'>
                        <span>Author</span> 
                        <b className='text-primary'>of the Month</b>
                    </h1>
                    <AuthorCard />
                </div>
            </section>
        </div>
    )
}

export default Homepage;