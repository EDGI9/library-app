import { Generators } from '../composables/generators';
import { AuthorDTO } from '../domains/authors/core/dtos/author.dto';

const author: AuthorDTO = Generators.authorGenerator();

export default author;
