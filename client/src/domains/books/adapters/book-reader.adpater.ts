
import { BookDriverReaderPort } from "../ports/driven/book-drive-reader.port";
import { BookEntity } from "../core/entities/book.entity";
import { BookFiltersEntity } from "../core/entities/book-filters.entity";

import  booksAPI  from "../core/constants/book-apis.constants";
import ApiGateway from "../../../api/api-gateway";

export function BookReaderAdapter(): BookDriverReaderPort {

    async function getAll(): Promise<BookEntity[] | null> {
        const response = await ApiGateway.get(booksAPI.GET_ALL_BOOKS);
        
        if (!response) {
            return null
        }

        return response;
    }

    async function getById(id: string): Promise<BookEntity | null> {
        if (!id) {
           return null
        }

        const response = await ApiGateway.get(booksAPI.GET_BOOK.replace('{id}',id))

        if(!response) {
            return null
        }

        return response;
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

            const response = await ApiGateway.get(booksAPI.GET_FILTERED_BOOKS.replace('{filters}',filterString))

    
            if(!response) {
                return []
            }
    
            return response;
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