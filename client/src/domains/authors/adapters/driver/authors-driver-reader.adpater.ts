import { connectToGetDrivenSide } from '../../core/middleware/doMyJob';
import { AuthorsDriverReaderPort } from '../../ports/driver/authors-driver-reader.ports';

export default function AuthorsDriverReaderAdapter(): AuthorsDriverReaderPort {
    function get() {
        // return 'This is --- Driver --- Reader Adapter';
        return connectToGetDrivenSide();
    }

    return {
        get,
    };
}
