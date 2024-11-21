import { NavLink } from "react-router-dom";
import { useEffect, useState, useCallback, useRef  } from 'react';

import { Hooks } from "../composables/hooks/index.ts";

const SearchDropdown = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const component = useRef(null);
    
    Hooks.useClickOutside(component, props.onClickOutside);
    
    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const handleSearch = useCallback(
        debounce((term) => {
            props.onInput(term)
        }, 300),
        []
    );

    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm, handleSearch]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    function ListItems() {
        if (props.items?.length == 0) {
            return
        }

        const totalItems = props.items.length;
        const maxNumberOfItems = 6;
        const filteredItems = totalItems > maxNumberOfItems ? props.items.filter((item, index) => index < maxNumberOfItems) : props.items;

        return filteredItems.map(item => (
            <li key={item.id} className="mb-2">
                    <NavLink className="w-full inline-flex items-center justify-start text-primary font-bold hover:bg-slate-100 px-3" onClick={props.onClickOutside} to={"/view/"+ item.id}>
                        <div className="flex items-center gap-3">
                            {item.image && <img src={item.image} alt={item.name && item.name} height={40} width={30} />}
                            {item.name && <span>{item.name}</span>}
                        </div>
                    </NavLink>
            </li> 
        ));
    }

    return (
        <div ref={component} data-testid="qa-search-dropdown-container" className="flex flex-col items-center justify-center bg-white p-4 relative">
            <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-2xl">
                <div className="relative">
                    <input
                        data-testid="qa-search-dropdown-input"
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        className="w-full px-5 py-2 pr-20 text-base bg-white border border-gray-200 rounded-full focus:outline-none focus:border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-200"
                        placeholder="Search for book name"
                    />
                </div>
            </form>
            {(props.items && props.items.length > 0) && (
                <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-4 absolute top-16">
                    <ul data-testid="qa-search-dropdown-list">
                        {ListItems()}
                    </ul>
                </div>
            )}
        </div>
    )
};

export default SearchDropdown