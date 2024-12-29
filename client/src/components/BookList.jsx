import { useNavigate } from 'react-router-dom';
import Book from './Book';

export default function BookList(props) {
    const navigate = useNavigate();

    function goToBook(id) {
        navigate(`/view/${id}`);
    }

    function bookList() {
        return props.books?.map((book) => {
            return (
                <Book
                    book={book}
                    deleteBook={() => props.deleteBook(book.id)}
                    goToBook={() => goToBook(book.id)}
                    isEditable={true}
                    key={book.id}
                />
            );
        });
    }

    return (
        <>
            <section
                data-testid="qa-book-list"
                className="flex justify-center"
            >
                <div
                    data-testid="qa-book-list_item-list"
                    className="flex flex-wrap justify-center md:justify-start gap-4"
                >
                    {bookList()}
                </div>
            </section>
        </>
    );
}
