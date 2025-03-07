import { BookDTO } from '../core/dtos/book.dto';
import { BookFiltersDTO } from '../core/dtos/book-filters.dto';
import { BookDrivenReaderPort } from '../ports/driven/book-driven-reader.port';
import { BookDrivenWriterPort } from '../ports/driven/book-driven-writer.port';
import { BookDriverPort } from '../ports/driver/book-driver.port';

export default function BookService(
    reader: BookDrivenReaderPort,
    writer: BookDrivenWriterPort,
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
