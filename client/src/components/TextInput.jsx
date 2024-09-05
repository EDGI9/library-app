const Textinput = (props) => {
    return (
        <input
            type="text"
            name={props.name}
            className="w-full flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        />
    ) 
}

export default Textinput;