
import { BookDriverReaderPort } from "../ports/driven/book-drive-reader.port";
import { BookEntity } from "../core/entities/book.entity";
import { BookFiltersEntity } from "../core/entities/book-filters.entity";

import  booksAPI  from "../core/constants/book-apis.constants";

export function BookReaderAdapter(): BookDriverReaderPort {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    async function getAll(): Promise<BookEntity[] | null> {
        const response = await fetch(booksAPI.GET_ALL_BOOKS,  {
            method: "GET",
            headers: myHeaders
        });

        if (!response) {
            return null
        }

        return response.json();
    }

    async function getById(id: string): Promise<BookEntity | null> {
        if (!id) {
           return null
        }

        const response = await fetch(booksAPI.GET_BOOK.replace('{id}',id), {
            method: "GET",
            headers: myHeaders
        })

        if(!response) {
            return null
        }

        return response.json();
    }

    async function getByFilters(filters: BookFiltersEntity): Promise<BookEntity[] | null> {
        try {
            if (!filters) {
                throw new Error("No Filters provided");
            }
            
            const filterString: string = Object.entries(filters).reduce((accumulator, currentValue) => {
                let string = accumulator.length > 0 ? `${accumulator}&${currentValue[0]}=${currentValue[1]}` : `${currentValue[0]}=${currentValue[1]}`
                return string
            }, '');

            const response = await fetch(booksAPI.GET_FILTERED_BOOKS.replace('{filters}',filterString), {
                method: "GET",
                headers: myHeaders
            })

    
            if(!response) {
                return []
            }
    
            return response.json();
        } catch (err) {
            console.error("Error fetching filtered books", err);
            return []; 
        }
    }

    return {
        getAll,
        getById,
        getByFilters
    }

}