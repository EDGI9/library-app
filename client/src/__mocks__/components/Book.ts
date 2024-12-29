import { Generators } from '../../composables/generators';
import { BookDTO } from '../../domains/books/core/dtos/book.dto';

const book: BookDTO = Generators.bookGenerator();

export default book;
