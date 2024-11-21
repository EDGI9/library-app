import { AuthorService } from "./service/author.service";
import { AuthorReaderAdapter } from "./adapters/driven/author-reader.adapter";
import { AuthorWriterAdapter } from "./adapters/driven/author-writer.adapter";

export default AuthorService(AuthorReaderAdapter(), AuthorWriterAdapter())