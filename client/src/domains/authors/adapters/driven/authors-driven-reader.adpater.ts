import {AuthorsDrivenReaderPort} from '../../ports/driven/authors-driven-reader.ports';

export default function AuthorsDrivenReaderAdapter(): AuthorsDrivenReaderPort {
    function get() {
        return 'This is --- Driven --- Reader Adapter';
    }

    return {
        get,
    };
}
