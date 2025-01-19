import { Generators } from '../composables/generators';
import { AuthorDTO } from '../domains/authors/core/dtos/author.dto';

const authorList: AuthorDTO[] = [
    Generators.authorGenerator(),
    Generators.authorGenerator(),
    Generators.authorGenerator(),
    Generators.authorGenerator(),
];

export default authorList;
