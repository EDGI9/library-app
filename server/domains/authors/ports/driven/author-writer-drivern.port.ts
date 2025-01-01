import { AuthorEntity } from "../../core/entities/author.entity";

export interface AuthorWriterDrivenPorts {
    create(dto: AuthorEntity): Promise<void>;
    update(id: string, dto: AuthorEntity): Promise<void>;
    remove(id: string): Promise<void>;
}