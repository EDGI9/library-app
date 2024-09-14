import { BookReaderAdapter } from "./adapters/book-reader.adpater";
import { BookWriterAdapter } from "./adapters/book-writer.adapter";
import BookService from "./service/books.service";

export default BookService(BookReaderAdapter(), BookWriterAdapter());