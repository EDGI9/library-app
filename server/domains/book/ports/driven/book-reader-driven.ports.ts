import { BookEntity } from "../../core/entities/book.entity.js";

export interface BookReaderDrivenPorts {
    getAll(): Promise<BookEntity[]>;
    getById(id: string): Promise<BookEntity | null>
}