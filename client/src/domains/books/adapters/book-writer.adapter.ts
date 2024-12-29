import { BookEntity } from '../core/entities/book.entity';
import { BookDriverWriterPort } from '../ports/driven/book-driven-writer.port';
import booksApi from '../core/constants/book-apis.constants';
import ApiGateway from '../../../api/api-gateway';

export function BookWriterAdapter(): BookDriverWriterPort {
    async function create(dto: BookEntity): Promise<void> {
        if (!dto) {
            return;
        }

        return await ApiGateway.post(booksApi.CREATE_BOOK, {
            body: JSON.stringify(dto),
        });
    }

    async function update(id: string, dto: BookEntity): Promise<void> {
        if (!id.trim().length && !dto) {
            return;
        }

        return await ApiGateway.put(booksApi.UPDATE_BOOK.replace('{id}', id), {
            body: JSON.stringify(dto),
        });
    }

    async function remove(id: string): Promise<void> {
        if (!id.trim().length) {
            return;
        }

        return await ApiGateway.remove(
            booksApi.DELETE_BOOK.replace('{id}', id),
        );
    }

    return {
        create,
        update,
        remove,
    };
}
