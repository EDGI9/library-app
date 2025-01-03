import { BookDTO } from '../core/dtos/book.dto';
import { BookFiltersDTO } from '../core/dtos/book-filters.dto';
import { BookDriverReaderPort } from '../ports/driven/book-drive-reader.port';
import { BookDriverWriterPort } from '../ports/driven/book-driven-writer.port';
import { BookDriverPort } from '../ports/driver/book-driver.port';

export default function BookService(
    reader: BookDriverReaderPort,
    writer: BookDriverWriterPort,
): BookDriverPort {
    async function getAll(): Promise<BookDTO[] | []> {
        const entities = await reader.getAll();

        if (!entities) {
            return [];
        }

        return <BookDTO[]>entities.map((entity) => ({
            id: entity.id,
            name: entity.name,
            description: entity.description,
            genre: entity.genre,
            image: entity.image,
            author: entity.author,
        }));
    }

    async function getById(id: string): Promise<BookDTO | {}> {
        const entity = await reader.getById(id);

        if (!entity) {
            return {};
        }

        return <BookDTO>{
            id: entity.id,
            name: entity.name,
            description: entity.description,
            image: entity.image,
            genre: entity.genre,
            author: entity.author,
        };
    }

    async function getByFilters(
        filters: BookFiltersDTO,
    ): Promise<BookDTO[] | []> {
        const entities = await reader.getByFilters(filters);

        if (!entities) {
            return [];
        }

        return <BookDTO[]>entities.map((entity) => ({
            id: entity.id,
            name: entity.name,
            description: entity.description,
            genre: entity.genre,
            image: entity.image,
            author: entity.author,
        }));
    }

    async function create(dto: BookDTO): Promise<void> {
        if (!dto) {
            return;
        }

        await writer.create(dto);
    }

    async function update(id: string, dto: BookDTO): Promise<void> {
        if (!dto && !id.trim().length) {
            return;
        }

        await writer.update(id, dto);
    }

    async function remove(id: string): Promise<void> {
        if (!id.trim().length) {
            return;
        }

        await writer.remove(id);
    }

    return {
        getAll,
        getById,
        getByFilters,
        create,
        update,
        remove,
    };
}
