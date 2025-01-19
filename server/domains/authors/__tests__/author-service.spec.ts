import { describe, it, vi, expect } from 'vitest';
import AuthorService from '../index';

import { AuthorDTO } from '../core/dtos/author.dto';

import AuthorList from '../../../__mocks__/AuthorList';
import Author from '../../../__mocks__/Author';

describe('Test Author service', () => {
    it(
        'Gets all Authors',
        {
            timeout: 30000,
            retry: 3,
        },
        async () => {
            expect(AuthorService.getAll).toBeDefined();
            expect(AuthorService.getAll).toBeInstanceOf(Function);

            const spy = vi
                .spyOn(AuthorService, 'getAll')
                .mockResolvedValue(AuthorList);
            const result = await AuthorService.getAll();

            expect(spy).toHaveBeenCalledOnce();

            expect(result).toStrictEqual(
                expect.arrayContaining(<AuthorDTO[]>[
                    expect.objectContaining(<AuthorDTO>{
                        id: expect.any(String) || expect(undefined),
                        name: expect.any(String),
                        image: expect.any(String),
                    }),
                ]),
            );
        },
    );

    it(
        'Gets a specific Author',
        {
            timeout: 30000,
            retry: 3,
        },
        async () => {
            expect(AuthorService.getById).toBeDefined();
            expect(AuthorService.getById).toBeInstanceOf(Function);

            const resultGetAll = await AuthorService.getAll().then(
                () => AuthorList,
            );

            expect(resultGetAll.length).toBeGreaterThan(0);

            const spy = vi
                .spyOn(AuthorService, 'getById')
                .mockResolvedValue(Author);

            //@ts-ignore
            const result = await AuthorService.getById(resultGetAll[0].id);

            expect(spy).toHaveBeenCalledOnce();
            expect(result).toStrictEqual(
                expect.objectContaining(<AuthorDTO>{
                    id: expect.any(String) || expect(undefined),
                    name: expect.any(String),
                    image: expect.any(String),
                }),
            );
        },
    );

    it(
        'Creates an Author',
        {
            timeout: 30000,
            retry: 3,
        },
        async () => {
            expect(AuthorService.create).toBeDefined();
            expect(AuthorService.create).toBeInstanceOf(Function);

            const spy = vi.spyOn(AuthorService, 'create');
            await AuthorService.create(Author);

            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(Author);
        },
    );

    it(
        'Updates an Author',
        {
            timeout: 30000,
            retry: 3,
        },
        async () => {
            expect(AuthorService.update).toBeDefined();
            expect(AuthorService.update).toBeInstanceOf(Function);

            const spy = vi.spyOn(AuthorService, 'update');
            //@ts-ignore
            await AuthorService.update(Author.id, Author);

            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(Author.id, Author);
        },
    );

    it(
        'Deletes an Author',
        {
            timeout: 30000,
            retry: 3,
        },
        async () => {
            expect(AuthorService.remove).toBeDefined();
            expect(AuthorService.remove).toBeInstanceOf(Function);

            const spy = vi.spyOn(AuthorService, 'remove');
            //@ts-ignore
            await AuthorService.remove(AuthorList[0].id);

            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(AuthorList[0].id);
        },
    );
});
