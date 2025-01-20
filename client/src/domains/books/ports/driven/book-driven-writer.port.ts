import { BookEntity } from '../../core/entities/book.entity';

export interface BookDrivenWriterPort {
    create(dto: BookEntity): Promise<void>;
    update(id: string, dto: BookEntity): Promise<void>;
    remove(id: string): Promise<void>;
}
