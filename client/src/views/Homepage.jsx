import { useSelector, useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { simpleFaker } from '@faker-js/faker';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const BookList = lazy(() => import('../components/BookList.jsx'));
const Counter = lazy(() => import('../components/Counter.jsx'));
const Book = lazy(() => import('../components/Book.jsx'));
const AuthorCard = lazy(() => import('../components/AuthorCard.jsx'));

import homepageImage from '../assets/library-homepage-image.webp';
import book from '../assets/open-book.webp';
import user from '../assets/user.webp';
import review from '../assets/review.webp';

import { GET_ALL_BOOKS } from '../store/slices/bookGallery';
import { DELETE_BOOK } from '../store/slices/book';
import { routes } from '../config/routes.js';

const Homepage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const books = useSelector((state) => state.bookGallery.items);
    const recomendedBook =
        books[Math.floor(Math.random() * (books.length - 0 + 1) + 0)];

    useEffect(() => {
        getBooks();
    }, []);

    function getBooks() {
        dispatch(GET_ALL_BOOKS());
    }

    async function deleteBook(id) {
        await dispatch(DELETE_BOOK(id));
        getBooks();
    }

    function goToBook(id) {
        navigate(`${routes.BOOK_DETAILS}/${id}`);
    }

    return (
        <div className="flex flex-col md:grid auto-rows-max grid-cols-12 gap-4">
            <section className="md:grid grid-rows-1 grid-cols-12 row-start-1 col-span-12 h-[200px]  md:h-[600px] md:mb-52">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 col-start-2 col-span-10">
                    <div>
                        <h1 className="flex flex-col lg:flex-row lg:space-x-3 text-5xl">
                            <motion.span
                                initial={{ y: 20, opacity: 0 }}
                                animate={{
                                    y: 0,
                                    transition: {
                                        duration: 0.7,
                                        delay: 0.2,
                                        ease: 'easeOut',
                                    },
                                    opacity: 1,
                                }}
                            >
                                The
                            </motion.span>
                            <motion.span
                                className="text-primary font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{
                                    y: 0,
                                    transition: {
                                        duration: 0.7,
                                        delay: 0.5,
                                        ease: 'easeOut',
                                    },
                                    opacity: 1,
                                }}
                            >
                                Bookshelf Bliss
                            </motion.span>
                        </h1>
                        <motion.p
                            className="text-sm text-slate-400"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{
                                x: 0,
                                transition: {
                                    duration: 0.7,
                                    delay: 1,
                                    ease: 'easeOut',
                                },
                                opacity: 1,
                            }}
                        >
                            Browse for books at anytime
                        </motion.p>
                    </div>
                    <div className="hidden md:flex flex-col ">
                        <img
                            src={homepageImage}
                            height={500}
                            loading="lazy"
                            width={700}
                            alt=""
                        />
                        <a
                            className="text-[5px] self-end me-[10%]"
                            href="https://www.freepik.com/free-vector/people-library-flat-vector-illustration_9176169.htm#fromView=keyword&page=1&position=6&uuid=71b74823-d0bc-4681-bae3-397ded119558"
                            target="_blank"
                        >
                            Image by pch.vector on Freepik
                        </a>
                    </div>
                </div>
            </section>
            <section className="grid grid-rows-1 grid-cols-12 row-start-2 col-start-1 col-span-12 mb-48 bg-white/50 backdrop-blur-md px-5 py-10">
                <div className="md:grid grid-cols-subgrid grid-rows-1 grid-cols-12 col-start-2 col-span-10 gap-4">
                    <section className="md:grid auto-rows-max row-start-1 col-start-1 col-span-7">
                        <h1 className="flex justify-center md:justify-start row-start-1 text-4xl mb-7 gap-3">
                            <span>Popular Books</span>
                            <b className="text-primary">This Week</b>
                        </h1>
                        <div className="flex items-center justify-start row-start-2 gap-4 mb-10">
                            {books.length > 0 ? (
                                <BookList
                                    books={books.slice(0, 4)}
                                    deleteBook={deleteBook}
                                ></BookList>
                            ) : (
                                <p>No Books available</p>
                            )}
                        </div>
                    </section>
                    <section className="row-start-1 col-start-8 col-span-4">
                        <h1 className="flex flex-wrap justify-center md:justify-start row-start-1 text-4xl mb-7 gap-3">
                            <span>Recomendation</span>
                            <b className="text-primary">For You</b>
                        </h1>
                        {books.length > 0 ? (
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Book
                                    book={recomendedBook}
                                    goToBook={() => goToBook(recomendedBook.id)}
                                ></Book>
                            </motion.div>
                        ) : (
                            <p>No Recomended book available</p>
                        )}
                    </section>
                </div>
            </section>
            <section className="row-start-3 col-span-12  mb-48">
                <div className="flex flex-col md:flex-row items-center justify-center row-start-3 gap-4">
                    <NavLink to={routes.GALLERY}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.4,
                                ease: 'easeOut',
                            }}
                            whileInView={{
                                scale: [0.9, 1.2, 1],
                                opacity: 1,
                            }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <Counter
                                icon={book}
                                number={books.length}
                                text="Total Books"
                            ></Counter>
                        </motion.div>
                    </NavLink>
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: 0.5,
                            ease: 'easeOut',
                        }}
                        whileInView={{
                            scale: [0.9, 1.2, 1],
                            opacity: 1,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <Counter
                            icon={user}
                            number="2"
                            text="Authors"
                        ></Counter>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: 0.6,
                            ease: 'easeOut',
                        }}
                        whileInView={{
                            scale: [0.9, 1.2, 1],
                            opacity: 1,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <Counter
                            icon={review}
                            number={`${simpleFaker.number.float({
                                multipleOf: 0.25,
                                min: 0,
                                max: 10,
                            })}k`}
                            text="Reviews"
                        ></Counter>
                    </motion.div>
                </div>
            </section>
            <motion.section
                initial={{ opacity: 0 }}
                transition={{
                    duration: 0.3,
                    delay: 0.6,
                    ease: 'easeOut',
                }}
                whileInView={{
                    opacity: 1,
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="md:grid grid-rows-1 grid-cols-12 row-start-4 col-span-12 min-h-[400px] bg-white/50 backdrop-blur-md"
            >
                <div className="col-start-2 col-span-10">
                    <h1 className="flex text-4xl mb-7 gap-3">
                        <span>Author</span>
                        <b className="text-primary">of the Month</b>
                    </h1>
                    <AuthorCard />
                </div>
            </motion.section>
        </div>
    );
};

export default Homepage;
