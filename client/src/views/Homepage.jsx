import { useSelector } from 'react-redux';

import BookList from "../components/BookList.jsx";
import Counter from "../components/Counter.jsx";
import Book from "../components/Book.jsx";


const Homepage = () => {
    const books = useSelector((state) => state.books.items);

    return (
        <div className="flex flex-col md:grid auto-rows-max grid-cols-12 gap-4">
            <section className="bg-slate-600 row-start-1 col-span-12 h-[600px]">
                Message
            </section>
            <section className="md:grid grid-rows-1 grid-cols-12 row-start-2 col-span-12 gap-4 bg-yellow-300 ">
                <section className="md:grid auto-rows-max bg-blue-600 row-start-1 col-span-8 ">
                    <div className="flex items-center justify-center row-start-1 gap-4">
                        <BookList></BookList>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center bg-green-600 row-start-2 gap-4">
                        <Counter icon="Books" number={books.length} text="Total Books"></Counter>
                        <Counter icon="asdasd" number="2" text="My text"></Counter>
                        <Counter icon="asdasd" number="3" text="My text"></Counter>
                    </div>
                </section>
                <section className="bg-red-600 row-start-1 col-span-4">
                    Book Recomendation
                    {/* <Book book={books[0]}></Book> */}
                </section>
            </section>
            <section className="bg-blue-300 row-start-3 col-span-12 h-[400px]">
                Author Highlight
            </section>
        </div>
    )
}

export default Homepage;