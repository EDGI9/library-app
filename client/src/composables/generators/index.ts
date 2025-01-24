import { faker } from '@faker-js/faker';
import { BookDTO } from '../../domains/books/core/dtos/book.dto';

const bookGenerator = () => {
    return <BookDTO>{
        id: faker.string.uuid(),
        name: faker.word.words(5),
        description: faker.lorem.sentence(),
        image: faker.image.url(),
        genre: [faker.word.words(1), faker.word.words(1), faker.word.words(1)],
    };
};

export const Generators = {
    bookGenerator,
};
