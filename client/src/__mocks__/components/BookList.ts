import { Generators } from "../../composables/generators";
import { BookDTO } from '../../domains/books/core/dtos/book.dto';

const bookList: BookDTO[] = [
    Generators.bookGenerator(),
    Generators.bookGenerator(),
    Generators.bookGenerator(),
    Generators.bookGenerator(),
];

export default bookList;