
import { BookDriverReaderPort } from "../ports/driven/book-drive-reader.port";
import { BookEntity } from "../core/entities/book.entity";
import  booksAPI  from "../../../apis/books";

export function BookReaderAdapter(): BookDriverReaderPort {

    async function getAll(): Promise<BookEntity[] | null> {
        const response = await fetch(booksAPI.GET_ALL_BOOKS);

        if (!response) {
            return null
        }

        return response.json();
    }

    async function getById(id: string): Promise<BookEntity | null> {
        if (!id) {
           return null 
        }

        const response = await fetch(booksAPI.GET_BOOK, { body: JSON.stringify({ id: id }),})

        if(!response) {
            return null
        }

        return response.json();
    }


    return {
        getAll,
        getById,
    }
    
}