const Textinput = (props) => {
    return (
        <input
            data-testid="qa-text-input"
            type="text"
            name={props.name}
            className="w-full flex-1 border-0 py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 capitalize"
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        />
    ) 
}

export default Textinput;