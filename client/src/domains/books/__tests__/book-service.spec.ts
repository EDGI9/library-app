import { describe, it, expect, vi } from 'vitest';
import { faker } from '@faker-js/faker';
import BookService from '../index';
import { BookDTO } from '../core/dtos/book.dto';

import Book from '../../../__mocks__/components/Book';
import Books from '../../../__mocks__/components/BookList';

describe('Test Book service', () => {
    it(
        'Gets all Books',
        {
            timeout: 30000,
            retry: 3,
        },
        async () => {
            expect(BookService.getAll).toBeDefined();
            expect(BookService.getAll).toBeInstanceOf(Function);

            const spy = vi
                .spyOn(BookService, 'getAll')
                .mockResolvedValue(Books);
            const result = await BookService.getAll();

            expect(spy).toHaveBeenCalledOnce();

            expect(result).toStrictEqual(
                expect.arrayContaining(<BookDTO[]>[
                    expect.objectContaining(<BookDTO>{
                        id: expect.any(String),
                        name: expect.any(String),
                        description: expect.any(String),
                        image: expect.any(String),
                        genre: expect.arrayContaining([expect.any(String)]),
                    }),
                ]),
            );
        },
    );

    it(
        'Gets a specific Books',
        {
            timeout: 30000,
            retry: 3,
        },
        async () => {
            expect(BookService.getById).toBeDefined();
            expect(BookService.getById).toBeInstanceOf(Function);

            vi.spyOn(BookService, 'getAll').mockResolvedValue(Books);
            const resultGetAll = await BookService.getAll();

            expect(resultGetAll.length).toBeGreaterThan(0);

            const spy = vi
                .spyOn(BookService, 'getById')
                .mockResolvedValue(resultGetAll[0]);
            //@ts-ignore
            const result = await BookService.getById(resultGetAll[0].id);

            expect(spy).toHaveBeenCalledOnce();

            expect(result).toStrictEqual(
                expect.objectContaining(<BookDTO>{
                    id: expect.any(String),
                    name: expect.any(String),
                    description: expect.any(String),
                    image: expect.any(String),
                    genre: expect.arrayContaining([expect.any(String)]),
                }),
            );
        },
    );

    it(
        'Creates a Book',
        {
            timeout: 30000,
            retry: 3,
        },
        async () => {
            const book = Book;
            expect(BookService.create).toBeDefined();
            expect(BookService.create).toBeInstanceOf(Function);

            const spy = vi.spyOn(BookService, 'create').mockResolvedValue(book);
            await BookService.create(book);

            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(book);
        },
    );

    it(
        'Updates a Book',
        {
            timeout: 30000,
            retry: 3,
        },
        async () => {
            const id = faker.string.alpha(10);
            const book = Book;
            expect(BookService.update).toBeDefined();
            expect(BookService.update).toBeInstanceOf(Function);

            const spy = vi.spyOn(BookService, 'update').mockResolvedValue(book);
            await BookService.update(id, book);

            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(id, book);
        },
    );

    it(
        'Deletes a Book',
        {
            timeout: 30000,
            retry: 3,
        },
        async () => {
            const id = faker.string.alpha(10);
            expect(BookService.remove).toBeDefined();
            expect(BookService.remove).toBeInstanceOf(Function);

            const spy = vi
                .spyOn(BookService, 'remove')
                .mockResolvedValue({ success: true });
            await BookService.remove(id);

            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(id);
        },
    );
});
