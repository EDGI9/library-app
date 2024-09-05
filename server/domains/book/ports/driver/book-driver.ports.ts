import { BookDTO } from "../../core/dtos/book.dto.js";

export interface BookDriverPort {
    getAll(): Promise<BookDTO[] | null>;
    getById(id: string): Promise<BookDTO | null>;
    create(dto: BookDTO): Promise<void>;
    update(id: string, dto: BookDTO): Promise<void>;
    remove(id: string): Promise<void>;
}