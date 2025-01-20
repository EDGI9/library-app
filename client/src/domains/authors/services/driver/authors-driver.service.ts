import { AuthorsDriverReaderPort } from '../../ports/driver/authors-driver-reader.ports';
import { AuthorsDriverWriterPort } from '../../ports/driver/authors-driver-writer.ports';
import { AuthorsServiceDriverPort } from '../../ports/driver/authors-service-driver.ports';

export function AuthorsDriverService(
    reader: AuthorsDriverReaderPort,
    writer: AuthorsDriverWriterPort,
): AuthorsServiceDriverPort {
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
