import { getDatabaseClient } from '../../../../config/database';

import { ObjectId } from 'mongodb';
import { BookEntity } from '../../core/entities/book.entity';
import { BookReaderDrivenPorts } from '../../ports/driven/book-reader-driven.ports';
import {
    BookCollection,
    DatabaseName,
} from '../../core/constants/book-database.constants';
import {
    BookProcessedFiltersEntity,
    BookFiltersEntity,
} from '../../core/entities/book-filters.entity';

import { bookHandler } from '../../core/middleware/books.middleware';

export function BookReaderAdapter(): BookReaderDrivenPorts {
    async function getAll(): Promise<BookEntity[]> {
        try {
            let collection = await getDatabaseClient()
                .db(DatabaseName)
                .collection(BookCollection);
            let results = await collection.find({}).toArray();
            //@ts-ignore
            const entries: BookEntity[] = results.map((doc) =>
                //@ts-ignore
                bookHandler(doc),
            );

            return entries;
        } catch (err) {
            console.error('Error fetching books', err);
            return [];
        }
    }

    async function getById(id: string): Promise<BookEntity | {}> {
        try {
            if (!id) {
                throw new Error('No Id provided');
            }

            let collection = await getDatabaseClient()
                .db(DatabaseName)
                .collection(BookCollection);
            let query = { _id: new ObjectId(id) };

            let result = await collection.findOne(query);
            //@ts-ignore
            const processedResult = bookHandler(result);
            if (!result) {
                return {};
            } else {
                return processedResult;
            }
        } catch (err) {
            console.error('Error fetching book', err);
            return {};
        }
    }

    async function getByFilters(
        filters: BookFiltersEntity,
    ): Promise<BookEntity[]> {
        try {
            if (!filters) {
                throw new Error('No Filters provided');
            }

            const collection = await getDatabaseClient()
                .db(DatabaseName)
                .collection(BookCollection);
            //@ts-ignore
            const query: BookProcessedFiltersEntity = {};

            if (filters.name) {
                query.name = {
                    $regex: new RegExp(filters.name.toString(), 'i'),
                };
            }

            if (filters.genre && filters.genre.length > 0) {
                query.genre = { $in: filters.genre.split(',') };
            }

            const results = await collection.find(query).toArray();
            //@ts-ignore
            const entries: BookEntity[] = results.map((doc) =>
                //@ts-ignore
                bookHandler(doc),
            );

            return entries;
        } catch (err) {
            console.error('Error fetching books', err);
            return [];
        }
    }

    return {
        getAll,
        getById,
        getByFilters,
    };
}
