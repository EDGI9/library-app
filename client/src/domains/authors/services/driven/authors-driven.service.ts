import { AuthorsDrivenReaderPort } from '../../ports/driven/authors-driven-reader.ports';
import { AuthorsDrivenWriterPort } from '../../ports/driven/authors-driven-writer.ports';
import { AuthorsServiceDrivenPort } from '../../ports/driven/authors-service-driven.ports';

export function AuthorsDrivenService(
    reader: AuthorsDrivenReaderPort,
    writer: AuthorsDrivenWriterPort,
): AuthorsServiceDrivenPort {
    function get() {
        return reader.get();
    }
    function update() {
        return writer.update();
    }

    return {
        get,
        update,
    };
}
