import { BookEntity } from "../../core/entities/book.entity.js";
import { BookProcessedFiltersEntity } from "../../core/entities/book-filters.entity.js";

export interface BookReaderDrivenPorts {
    getAll(): Promise<BookEntity[] | []>;
    getById(id: string): Promise<BookEntity | {}>
    getByFilters(filters: BookProcessedFiltersEntity): Promise<BookEntity[] | []>
}