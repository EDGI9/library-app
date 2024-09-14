import { BookEntity } from "../core/entities/book.entity";
import { BookDriverWriterPort } from "../ports/driven/book-driven-writer.port";
import booksApi from "../../../apis/books";

export function BookWriterAdapter(): BookDriverWriterPort {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    async function create(dto: BookEntity): Promise<void> {
        if (!dto) {
            return
        }

        await fetch(booksApi.CREATE_BOOK, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(dto),
        })
    }

    async function update(id: string, dto: BookEntity): Promise<void> {
        if (!id.trim().length && !dto) {
            return
        }

        await fetch(booksApi.UPDATE_BOOK.replace('{id}',id), {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(dto),
        })
    }

    async function remove(id: string): Promise<void> {
        if (!id.trim().length) {
            return
        }

        await fetch(booksApi.DELETE_BOOK.replace('{id}',id), {
            method: "DELETE",
            headers: myHeaders
        })
    }

    return {
        create,
        update,
        remove,
    }
    
}