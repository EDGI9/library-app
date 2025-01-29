import { BookFiltersEntity } from '../../core/entities/book-filters.entity';
import { BookDTO } from '../../core/dtos/book.dto';

export interface BookDriverReaderPort {
    getAll(): Promise<BookDTO[] | null>;
    getById(id: string): Promise<BookDTO | null>;
    getByFilters(filters: BookFiltersEntity): Promise<BookDTO[] | null>;
}
