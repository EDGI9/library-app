import { BookEntity } from "../../core/entities/book.entity";
import { BookFiltersEntity } from "../../core/entities/book-filters.entity";

export interface BookReaderDrivenPorts {
    getAll(): Promise<BookEntity[] | []>;
    getById(id: string): Promise<BookEntity | {}>
    getByFilters(filters: BookFiltersEntity): Promise<BookEntity[] | []>
}