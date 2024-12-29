import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logoImage from '../assets/logo.webp';
import SearchDropdown from './SearchDropdown';

import {
    GET_SEARCHED_BOOKS,
    CLEAR_SEARCHED_BOOKS,
} from '../store/slices/bookSearch';

const Navbar = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.bookSearch.items);

    function onInput(text) {
        if (text.trim() === '') {
            clearResults();
        } else {
            dispatch(GET_SEARCHED_BOOKS({ name: text }));
        }
    }

    function clearResults() {
        if (books.length >= 0) {
            dispatch(CLEAR_SEARCHED_BOOKS());
        }
    }

    function clickOutside() {
        clearResults();
    }

    return (
        <div data-testid="qa-navbar">
            <nav className="flex justify-between items-center mb-6 p-6 gap-8 max-h-[90px]">
                <div className="flex-grow">
                    <NavLink to="/">
                        <img
                            alt="Logo"
                            className="h-10 inline"
                            loading="lazy"
                            src={logoImage}
                        ></img>
                    </NavLink>
                </div>

                <SearchDropdown
                    items={books}
                    onInput={onInput}
                    onClickOutside={clickOutside}
                />

                <NavLink
                    className="inline-flex items-center justify-center text-primary font-bold hover:border-b-2 border-primary px-3"
                    to="/gallery"
                >
                    Gallery
                </NavLink>

                <NavLink
                    className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-primary text-white hover:text-primary hover:bg-slate-100 h-9 rounded-md px-3"
                    to="/create"
                >
                    Add Book
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;
