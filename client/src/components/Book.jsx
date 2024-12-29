import { Link } from 'react-router-dom';

const actionButtons = (props) => {
    if (props.isEditable) {
        return (
            <div className="flex gap-2">
                <Link
                    className="inline-flex items-center text-sm font-medium transition-colors border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3"
                    to={`/edit/${props.book?.id}`}
                >
                    Edit
                </Link>
                <button
                    className="text-sm font-medium transition-colors border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3"
                    type="button"
                    onClick={() => {
                        props.deleteBook(props.book?.id);
                    }}
                >
                    Delete
                </button>
            </div>
        );
    }
};

const Book = (props) => (
    <div
        data-testid="qa-book"
        className="flex flex-col items-center gap-3"
    >
        <div
            data-testid="qa-book_clickable"
            className="max-w-[200px] max-h-[320px] hover:cursor-pointer overflow-hidden"
            onClick={() => {
                props.goToBook(props.book?.id);
            }}
        >
            <img
                src={props.book?.image}
                alt=""
                width={200}
                height={320}
            />
        </div>
        <h1 className="font-bold">{props.book?.name}</h1>
        {actionButtons(props)}
    </div>
);

export default Book;
