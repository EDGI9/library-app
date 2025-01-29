import { BookDriverReaderPort } from '../../ports/driver/book-driver-reader.port';
import { BookEntity } from '../../core/entities/book.entity';
import { BookFiltersEntity } from '../../core/entities/book-filters.entity';

import BookService from '../../index';

export function BookDriverReaderAdapter(): BookDriverReaderPort {
    async function getAll(): Promise<BookEntity[] | null> {
        const response = await BookService.getAll();

        if (!response) {
            return null;
        }

        return response;
    }

    async function getById(id: string): Promise<BookEntity | null> {
        if (!id) {
            return null;
        }

        const response = await BookService.getById(id);

        if (!response) {
            return null;
        }

        return response;
    }

    async function getByFilters(
        filters: BookFiltersEntity,
    ): Promise<BookEntity[] | null> {
        try {
            if (!filters) {
                throw new Error('No Filters provided');
            }

            const response = await BookService.getByFilters(filters);

            if (!response) {
                return [];
            }

            return response;
        } catch (err) {
            console.error('Error fetching filtered books', err);
            return [];
        }
    }

    return {
        getAll,
        getById,
        getByFilters,
    };
}
