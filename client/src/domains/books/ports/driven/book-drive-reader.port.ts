import { BookEntity } from '../../core/entities/book.entity';
import { BookFiltersEntity } from '../../core/entities/book-filters.entity';

export interface BookDriverReaderPort {
    getAll(): Promise<BookEntity[] | null>;
    getById(id: string): Promise<BookEntity | null>;
    getByFilters(filters: BookFiltersEntity): Promise<BookEntity[] | null>;
}
