const Counter = (props) => {
    return (
        <div data-testid="qa-counter" className="grid grid-rows-2 grid-cols-2 gap-4 bg-accent rounded-xl p-4 h-24 min-w-52">
            <div className="flex flex-row items-center justify-center w-full row-start-1 row-span-2 w-14 h-14 rounded-full bg-white p-3">
                <img data-testid="qa-counter_image" src={props.icon} width={40} height={40} />
            </div>
            <div className="row-start-1 col-start-2 text-4xl text-primary">
                <p data-testid="qa-counter_number">{props.number}</p> 
            </div>
            <div className="row-start-2 col-start-2 text-small">
                <p data-testid="qa-counter_text">{props.text}</p>
            </div>
        </div>
    )
}

export default Counter;