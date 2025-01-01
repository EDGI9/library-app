import { BookReaderAdapter } from "./adapters/driven/book-reader.adapter";
import { BookWritterAdapter } from "./adapters/driven/book-writer.adapter";
import { BookService } from "./service/book.service";

export default BookService(BookReaderAdapter(), BookWritterAdapter());