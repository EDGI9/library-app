import { AuthorDTO } from "../../core/dtos/author.dto";

export interface AuthorDriverPort {
    getAll(): Promise<AuthorDTO[] | []>;
    getById(id: string): Promise<AuthorDTO | {}>;
    create(dto: AuthorDTO): Promise<void>;
    update(id: string, dto: AuthorDTO): Promise<void>;
    remove(id: string): Promise<void>;
}