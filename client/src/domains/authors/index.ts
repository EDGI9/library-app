import AuthorsDriverAdapter from './adapters/driver/index';
import AuthorsDrivenAdapter from './adapters/driven/index';
import { AuthorsDriverService } from './services/driver/authors-driver.service';
import { AuthorsDrivenService } from './services/driven/authors-driven.service';

export const AuthorDriverService = AuthorsDriverService(
    AuthorsDriverAdapter.reader(),
    AuthorsDriverAdapter.writter(),
);

export const AuthorDrivenService = AuthorsDrivenService(
    AuthorsDrivenAdapter.reader(),
    AuthorsDrivenAdapter.writter(),
);
