import { useState, useEffect, lazy } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const TextInput = lazy(() => import('../components/TextInput.jsx'));
const Pill = lazy(() => import('../components/Pill.jsx'));

import { GET_BOOK, CREATE_BOOK, UPDATE_BOOK } from '../store/slices/book';

const BookEditPage = () => {
    let [form, setForm] = useState({
        name: '',
        description: '',
        genre: [],
        image: '',
    });
    let [isNew, setIsNew] = useState(true);
    let [genreInputValue, setGenreInputValue] = useState('');

    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() || undefined;
            if (!id) return;

            setIsNew(false);
            const book = await dispatch(GET_BOOK(id));

            if (!book) {
                console.warn(`Book with id ${id} not found`);
                navigate('/');
                return;
            }
            setForm(book);
        }
        fetchData();
        return;
    }, [params.id, navigate]);

    const updateForm = (value) => {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    };

    const addItem = (e) => {
        e.preventDefault();
        if (genreInputValue.trim() !== '') {
            updateForm({ genre: [...form.genre, genreInputValue] });
            setGenreInputValue('');
        }
    };

    const removeItem = (e, index) => {
        e.preventDefault();
        const updatedItems = form.genre.filter((_, i) => i !== index);
        updateForm({ genre: updatedItems });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const book = { ...form };
        try {
            if (isNew) {
                await dispatch(CREATE_BOOK(book));
            } else {
                await dispatch(UPDATE_BOOK(params.id, book));
            }
        } catch (error) {
            console.error(
                'A problem occurred adding or updating a book: ',
                error,
            );
        } finally {
            setForm({ name: '', description: '', genre: [], image: '' });
            navigate('/');
        }
    };

    return (
        <>
            <h3 className="text-lg font-semibold p-4">
                Create/Update Book Record
            </h3>
            <form
                onSubmit={onSubmit}
                className="border rounded-lg overflow-hidden p-4"
            >
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-slate-900/10 pb-12 md:grid-cols-2">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-slate-900">
                            Book Info
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                            This information will be displayed publicly so be
                            careful what you share.
                        </p>
                    </div>

                    <div className="grid grid-rows-4 flex flex-col max-w-2xl gap-x-6 gap-y-8 ">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-slate-900"
                            >
                                Name
                            </label>
                            <div className="mt-2">
                                <div className="flex shadow-sm  sm:max-w-md">
                                    <TextInput
                                        name="name"
                                        value={form?.name}
                                        placeholder="Name"
                                        onChange={(text) =>
                                            updateForm({ name: text })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="Description"
                                className="block text-sm font-medium leading-6 text-slate-900"
                            >
                                Description
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <textarea
                                        placeholder="Book description"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        value={form?.description}
                                        onChange={(e) =>
                                            updateForm({
                                                description: e.target.value,
                                            })
                                        }
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="image"
                                className="block text-sm font-medium leading-6 text-slate-900"
                            >
                                Image
                            </label>
                            <div className="mt-2">
                                <div className="flex shadow-sm  sm:max-w-md">
                                    <TextInput
                                        name="image"
                                        value={form?.image}
                                        placeholder="Image URL"
                                        onChange={(text) =>
                                            updateForm({ image: text })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="genres"
                                className="block text-sm font-medium leading-6 text-slate-900"
                            >
                                Genres
                            </label>
                            <div className="flex flex-col mb-3">
                                <div className="flex w-full rounded-md shadow-sm  sm:max-w-md">
                                    <TextInput
                                        name="genres"
                                        value={genreInputValue}
                                        placeholder="Genres"
                                        onChange={(text) =>
                                            setGenreInputValue(text)
                                        }
                                    />

                                    <button
                                        className="w-[100px] p-0 bg-slate-200 rounded-tr-md rounded-br-md"
                                        onClick={addItem}
                                    >
                                        Add Item
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                {form?.genre?.map((item, index) => (
                                    <Pill
                                        key={index}
                                        text={item}
                                        actionText="x"
                                        isEditable={true}
                                        onClick={(e) => removeItem(e, index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <input
                    type="submit"
                    value="Save Book Record"
                    className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4"
                />
            </form>
        </>
    );
};

export default BookEditPage;
