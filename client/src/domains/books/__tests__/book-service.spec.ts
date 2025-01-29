import { describe, it, expect, vi, beforeAll } from 'vitest';
import { faker } from '@faker-js/faker';
import { BookDriverReaderAdapter } from '../adapters/driver/book-driver-reader.adpater';
import { BookDriverWriterAdapter } from '../adapters/driver/book-driver-writer.adpater';
import { BookDTO } from '../core/dtos/book.dto';

import Book from '../../../__mocks__/components/Book';
import Books from '../../../__mocks__/components/BookList';

describe('Test Book service', () => {
    const readerAdapter = BookDriverReaderAdapter();
    const writerAdapter = BookDriverWriterAdapter();

    it(
        'Gets all Books',
        {
            timeout: 30000,
            retry: 3,
        },
        async () => {
            expect(readerAdapter.getAll).toBeDefined();
            expect(readerAdapter.getAll).toBeInstanceOf(Function);

            const spy = vi.spyOn(readerAdapter, 'getAll');

            const result = await readerAdapter.getAll();

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
            expect(readerAdapter.getById).toBeDefined();
            expect(readerAdapter.getById).toBeInstanceOf(Function);

            vi.spyOn(readerAdapter, 'getAll');
            const resultGetAll = await readerAdapter.getAll();

            expect(resultGetAll.length).toBeGreaterThan(0);

            const spy = vi.spyOn(readerAdapter, 'getById');
            //@ts-ignore
            const result = await readerAdapter.getById(resultGetAll[0].id);

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
    it.skip(
        'Gets Books by filters',
        {
            timeout: 30000,
            retry: 3,
        },
        async () => {
            expect(readerAdapter.getByFilters).toBeDefined();
            expect(readerAdapter.getByFilters).toBeInstanceOf(Function);
            //TODO: Remove once conection between database and server is fixed
            const testFilters = {
                name: 'velocity inasmuch offensively usually loosely',
                description:
                    'Sapiente theatrum conturbo contigo comitatus aggero tenuis amita.',
            };

            const spy = vi.spyOn(readerAdapter, 'getByFilters');
            //@ts-ignore
            const result = await readerAdapter.getByFilters(testFilters);

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
        'Creates a Book',
        {
            timeout: 30000,
            retry: 3,
        },
        async () => {
            expect(writerAdapter.create).toBeDefined();
            expect(writerAdapter.create).toBeInstanceOf(Function);

            const spy = vi.spyOn(writerAdapter, 'create');
            await writerAdapter.create(Book);

            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(Book);
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
            expect(writerAdapter.update).toBeDefined();
            expect(writerAdapter.update).toBeInstanceOf(Function);

            const spy = vi.spyOn(writerAdapter, 'update');
            await writerAdapter.update(id, Book);

            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(id, Book);
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
            expect(writerAdapter.remove).toBeDefined();
            expect(writerAdapter.remove).toBeInstanceOf(Function);

            const spy = vi.spyOn(writerAdapter, 'remove');
            await writerAdapter.remove(id);

            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(id);
        },
    );
});
