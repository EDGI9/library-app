import { BookFiltersDTO } from "../../core/dtos/book-filters.dto";
import { BookDTO } from "../../core/dtos/book.dto";

export interface BookDriverPort {
    getAll(): Promise<BookDTO[] | []>;
    getById(id: string): Promise<BookDTO | {}>;
    getByFilters(filters: BookFiltersDTO): Promise<BookDTO[] | []>;
    create(dto: BookDTO): Promise<void>;
    update(id: string, dto: BookDTO): Promise<void>;
    remove(id: string): Promise<void>;
}