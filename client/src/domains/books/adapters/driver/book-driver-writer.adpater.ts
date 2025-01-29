import { BookDriverWriterPort } from '../../ports/driver/book-driver-writer.port';
import { BookDTO } from '../../core/dtos/book.dto';
import BookService from '../../index';

export function BookDriverWriterAdapter(): BookDriverWriterPort {
    async function create(dto: BookDTO): Promise<void> {
        if (!dto) {
            return;
        }

        return await BookService.create(dto);
    }

    async function update(id: string, dto: BookDTO): Promise<void> {
        if (!id.trim().length && !dto) {
            return;
        }

        return await BookService.update(id, dto);
    }

    async function remove(id: string): Promise<void> {
        if (!id.trim().length) {
            return;
        }

        return await BookService.remove(id);
    }

    return {
        create,
        update,
        remove,
    };
}
