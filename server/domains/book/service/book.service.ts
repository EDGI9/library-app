import { BookDTO } from "../core/dtos/book.dto";
import { BookFiltersDTO } from "../core/dtos/book-filters.dto";
import { BookEntity } from "../core/entities/book.entity";
import { BookReaderDrivenPorts } from "../ports/driven/book-reader-driven.ports";
import { BookWriterDrivenPorts } from "../ports/driven/book-writer-driven.ports";
import { BookDriverPort } from "../ports/driver/book-driver.ports";

export function BookService(reader: BookReaderDrivenPorts, writer: BookWriterDrivenPorts): BookDriverPort {

    async function getAll(): Promise<BookDTO[] | []> {
        const entities: BookEntity[] = await reader.getAll();

        if (!entities) {
            return [];
        }

        return <BookDTO[]>entities.map(entity => ({
            id: entity.id,
            name: entity.name,
            description: entity.description,
            genre: entity.genre,
            image: entity.image,
            author: entity.author
        }))
    }

    async function getById(id: string): Promise<BookDTO | {}> {
        //@ts-ignore
        const entity: BookEntity = await reader.getById(id);

        if (!entity) {
            return {};
        }
         
        return <BookDTO>{
            id: entity.id,
            name:entity.name,
            description: entity.description,
            genre: entity.genre,
            image: entity.image,
            author: entity.author
        }
        
    }

    async function getByFilters(filters: BookFiltersDTO): Promise<BookDTO[] | []> {
        //@ts-ignore
        const entities: BookEntity[] = await reader.getByFilters(filters);

        if (!entities) {
            return [];
        }
         
        return <BookDTO[]>entities.map(entity => ({
            id :entity.id,
            name: entity.name,
            description: entity.description,
            genre: entity.genre,
            image: entity.image,
            author: entity.author
        }))
        
    }

    async function create(dto: BookEntity): Promise<void> {
        if (!dto.name.trim()) {
            return
        }

       return await writer.create(dto) 
    }

    async function update(id: string, dto: BookEntity) {
        const entity = await reader.getById(id);

        if (!entity) {
            return;
        }

       return await writer.update(id, dto) 
    }

    async function remove(id: string): Promise<void> {
        const entity = await reader.getById(id);

        if (!entity) {
            return;
        }

       return await writer.remove(id) 
    }

    return {
        getAll, 
        getById,
        getByFilters, 
        create, 
        update, 
        remove
    }
    
}
