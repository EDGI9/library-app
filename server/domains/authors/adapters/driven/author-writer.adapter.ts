import { AuthorEntity } from "../../core/entities/author.entity";
import { AuthorWriterDrivenPorts } from "../../ports/driven/author-writer-drivern.port";

export function AuthorWriterAdapter(): AuthorWriterDrivenPorts {

    async function create(dto: AuthorEntity) {};
    async function update(id: string, dto: AuthorEntity) {};
    async function remove(id: string) {};

    return {
        create,
        update,
        remove
    }
    
}