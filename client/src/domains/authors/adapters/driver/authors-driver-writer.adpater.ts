import { connectToUpdateDrivenSide } from '../../core/middleware/doMyJob';
import { AuthorsDriverWriterPort } from '../../ports/driver/authors-driver-writer.ports';

export default function AuthorsDriverWriterAdapter(): AuthorsDriverWriterPort {
    function update() {
        // return 'This is --- Driver --- Writer Adapter';
        return connectToUpdateDrivenSide();
    }

    return {
        update,
    };
}
