import { AuthorDTO } from "../core/dtos/author.dto";
import { AuthorReaderDrivenPorts } from "../ports/driven/author-reader-driven.port";
import { AuthorWriterDrivenPorts } from "../ports/driven/author-writer-drivern.port";
import { AuthorDriverPort } from "../ports/driver/author-driver.port";

export function AuthorService(reader: AuthorReaderDrivenPorts, writer: AuthorWriterDrivenPorts) : AuthorDriverPort {

    async function getAll() {
        return []
    };
    async function getById(id: string) {
        return {}
    };
    async function create(dto: AuthorDTO) {};
    async function update(id: string, dto: AuthorDTO) {};
    async function remove(id: string) {};
    

    return {
        getAll,
        getById,
        create,
        update,
        remove
    }
    
}