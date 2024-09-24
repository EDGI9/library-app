import { describe, it, expect, vi } from "vitest";
import { faker } from "@faker-js/faker";
import BookService from "../index";
import { BookDTO } from "../core/dtos/book.dto";
import { BookFiltersDTO } from "../core/dtos/book-filters.dto";

describe("Test Book service", () => {

    const bookGenerator = () => {
        return <BookDTO>{
            name: faker.word.words(5),
            description: faker.lorem.sentence(),
            image: faker.image.url(),
            genre: [faker.word.words(1), faker.word.words(1), faker.word.words(1)],
            author: faker.word.words(2),
        } 
    };

    it("Gets all Books", {
        timeout: 30000,
        retry: 3
    }, async ()=>{
        expect(BookService.getAll).toBeDefined();
        expect(BookService.getAll).toBeInstanceOf(Function);

        const spy = vi.spyOn(BookService, "getAll");
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
                    author: expect.any(String),
                })
            ])
        );
    });

    it("Gets a specific Books",{
        timeout: 30000,
        retry: 3
    }, async ()=>{
        expect(BookService.getById).toBeDefined();
        expect(BookService.getById).toBeInstanceOf(Function);

        const resultGetAll = await BookService.getAll();

        expect(resultGetAll.length).toBeGreaterThan(0);

        const spy = vi.spyOn(BookService, "getById");
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
                author: expect.any(String),
            })
        )

    });

    it("Creates a Book",{
        timeout: 30000,
        retry: 3
    }, async ()=> {
        const Book = bookGenerator();
        expect(BookService.create).toBeDefined();
        expect(BookService.create).toBeInstanceOf(Function);

        const spy = vi.spyOn(BookService, "create");
        await BookService.create(Book);

        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(Book);
    });

    it("Updates a Book",{
        timeout: 30000,
        retry: 3
    }, async () => {
        const id= faker.string.alpha(10);
        const Book = bookGenerator();
        expect(BookService.update).toBeDefined();
        expect(BookService.update).toBeInstanceOf(Function);

        const spy = vi.spyOn(BookService, "update");
        await BookService.update(id, Book);

        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(id, Book);
    });

    it("Deletes a Book",{
        timeout: 30000,
        retry: 3
    }, async () => {
        const id= faker.string.alpha(10);
        expect(BookService.remove).toBeDefined();
        expect(BookService.remove).toBeInstanceOf(Function);

        const spy = vi.spyOn(BookService, "remove");
        await BookService.remove(id);

        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(id);
    });

    it("Gets Books based on filter", {
        timeout: 30000,
        retry: 3
    }, async ()=> {
        const Book = bookGenerator();

        const filters: BookFiltersDTO = {
            name: Book.name,
            genre: Book.genre.join(),
            author: Book.author,
        };

        expect(BookService.create).toBeDefined();
        expect(BookService.create).toBeInstanceOf(Function);
        expect(BookService.getByFilters).toBeDefined();
        expect(BookService.getByFilters).toBeInstanceOf(Function);

        await BookService.create(Book);

        const spy = vi.spyOn(BookService, "getByFilters");
        const result = await BookService.getByFilters(filters);

        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(filters);

        expect(result).toStrictEqual(
            expect.arrayContaining(<BookDTO[]>[
                expect.objectContaining(<BookDTO>{
                    id: expect.any(String),
                    name: Book.name,
                    description: Book.description,
                    image: Book.image,
                    genre: Book.genre,
                    author: Book.author
                })
            ])
        )
    })

})