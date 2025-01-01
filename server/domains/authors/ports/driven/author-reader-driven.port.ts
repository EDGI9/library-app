import { AuthorEntity } from "../../core/entities/author.entity";

export interface AuthorReaderDrivenPorts {
    getAll(): Promise<AuthorEntity[] | []>;
    getById(id: string): Promise<AuthorEntity | {}>
}