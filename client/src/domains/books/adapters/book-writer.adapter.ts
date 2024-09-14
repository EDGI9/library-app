import { BookEntity } from "../core/entities/book.entity";
import { BookDriverWriterPort } from "../ports/driven/book-driven-writer.port";
import booksApi from "../../../apis/books";

export function BookWriterAdapter(): BookDriverWriterPort {

    async function create(dto: BookEntity): Promise<void> {
        if (!dto) {
            return
        }

        await fetch(booksApi.CREATE_BOOK, {
            method: "POST",
            body: JSON.stringify(dto),
        })
    }

    async function update(id: string, dto: BookEntity): Promise<void> {
        if (!id.trim().length && !dto) {
            return
        }

        await fetch(booksApi.UPDATE_BOOK, {
            method: "PATCH",
            body: JSON.stringify(dto),
        })
    }

    async function remove(id: string): Promise<void> {
        if (!id.trim().length) {
            return
        }

        await fetch(booksApi.DELETE_BOOK, {
            method: "DELETE",
            body: JSON.stringify({id: id}),
        })
    }

    return {
        create,
        update,
        remove,
    }
    
}