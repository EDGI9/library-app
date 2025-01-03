import { Generators } from '../composables/generators';
import { BookDTO } from '../domains/book/core/dtos/book.dto';

const book: BookDTO = Generators.bookGenerator();

export default book;
