import {AuthorsDrivenWriterPort} from '../../ports/driven/authors-driven-writer.ports';

export default function AuthorsDrivenWriterAdapter(): AuthorsDrivenWriterPort {
    function update() {
        return 'This is --- Driven --- Writer Adapter';
    }

    return {
        update,
    };
}
