import { faker } from '@faker-js/faker';
import { BookDTO } from '../../domains/book/core/dtos/book.dto';
import { AuthorDTO } from '../../domains/authors/core/dtos/author.dto';

const bookGenerator = () => {
    return <BookDTO>{
        id: faker.string.uuid(),
        name: faker.word.words(5),
        description: faker.lorem.sentence(),
        image: faker.image.url(),
        genre: [faker.word.words(1), faker.word.words(1), faker.word.words(1)],
        author: faker.word.words(2),
    };
};

const authorGenerator = () => {
    return <AuthorDTO>{
        id: faker.string.uuid(),
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        image: faker.date.past().toISOString(),
    };
};

export const Generators = {
    bookGenerator,
    authorGenerator,
};
