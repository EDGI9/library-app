import { BookReaderAdapter } from "./adapters/driven/book-reader.adapter.js";
import { BookWritterAdapter } from "./adapters/driven/book-writer.adapter.js";
import { BookService } from "./service/book.service.js";

export default BookService(BookReaderAdapter(), BookWritterAdapter());