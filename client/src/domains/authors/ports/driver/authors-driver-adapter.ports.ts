// import { AuthorsDriverReaderPort } from './authors-driver-reader.ports';
// import { AuthorsDriverWriterPort } from './authors-driver-writer.ports';

export default interface AuthorsDriverAdapterPort {
    reader: () => string;
    writer: () => string;
}
