import { BookDrivenReaderAdapter } from './adapters/driven/book-driven-reader.adpater';
import { BookDrivenWriterAdapter } from './adapters/driven/book-driven-writer.adapter';
import BookService from './service/books.service';

export default BookService(
    BookDrivenReaderAdapter(),
    BookDrivenWriterAdapter(),
);
