import { read } from 'fs';
import { AuthorDTO } from '../core/dtos/author.dto';
import { AuthorReaderDrivenPorts } from '../ports/driven/author-reader-driven.port';
import { AuthorWriterDrivenPorts } from '../ports/driven/author-writer-drivern.port';
import { AuthorDriverPort } from '../ports/driver/author-driver.port';

export function AuthorService(
    reader: AuthorReaderDrivenPorts,
    writer: AuthorWriterDrivenPorts,
): AuthorDriverPort {
    async function getAll() {
        const entities: AuthorDTO[] = await reader.getAll();
        if (!entities) {
            return [];
        }

        return <AuthorDTO[]>entities.map((entity) => ({
            id: entity.id,
            name: entity.name,
            image: entity.image,
        }));
    }
    async function getById(id: string) {
        if (!id) {
            throw Error;
        }
        //@ts-ignore
        const entity: AuthorDTO = await reader.getById(id);
        if (!entity) {
            return {};
        }

        return <AuthorDTO>{
            id: entity.id,
            name: entity.name,
            image: entity.image,
        };
    }
    async function create(dto: AuthorDTO) {
        if (!dto) {
            throw Error;
        }

        await writer.create(dto);
    }
    async function update(id: string, dto: AuthorDTO) {
        if (!id || !dto) {
            throw Error;
        }

        const entity = await reader.getById(id);

        if (!entity) {
            throw Error;
        }

        await writer.update(id, dto);
    }
    async function remove(id: string) {
        if (!id) {
            throw Error;
        }

        const entity = await reader.getById(id);

        if (!entity) {
            throw Error;
        }

        await writer.remove(id);
    }

    return {
        getAll,
        getById,
        create,
        update,
        remove,
    };
}
