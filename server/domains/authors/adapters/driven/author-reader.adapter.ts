import { AuthorReaderDrivenPorts } from "../../ports/driven/author-reader-driven.port";

export function AuthorReaderAdapter(): AuthorReaderDrivenPorts {

    async function getAll() {
        return []
    };
    async function getById(id: string) {
        return {}
    };

    return {
        getAll,
        getById
    }
    
}