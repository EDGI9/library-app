import { RefObject, useEffect } from 'react';

const useClickOutside = (
    ref: RefObject<HTMLElement | undefined>,
    callback: () => void,
) => {
    useEffect(() => {
        //Check if cliecked otside and return callback function
        function handleClickOutside(event) {
            if (
                ref.current &&
                !ref.current.contains(event.target as HTMLElement)
            ) {
                callback();
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};


export default useClickOutside;