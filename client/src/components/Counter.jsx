const Counter = (props) => {
    return (
        <div className="grid grid-rows-2 grid-cols-2 gap-4 bg-accent rounded-xl p-4 h-24 min-w-52">
            <div className="flex flex-row items-center justify-center w-full row-start-1 row-span-2 w-12 h-12 rounded-full bg-white ">
                <div>{props.icon}</div>
            </div>
            <div className="row-start-1 col-start-2 text-4xl text-primary">
                <p>{props.number}</p> 
            </div>
            <div className="row-start-2 col-start-2 text-small">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Counter;