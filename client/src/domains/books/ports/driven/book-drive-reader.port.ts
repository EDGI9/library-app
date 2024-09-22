import { BookEntity } from "../../core/entities/book.entity";

export interface BookDriverReaderPort {
    getAll(): Promise<BookEntity[] | null>;
    getById(id: string): Promise<BookEntity | null>;
}