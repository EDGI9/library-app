const Pill =  (props) => {

    const actionButton = () => {
        if (props.isEditable) {
            return (<button data-testid="qa-pill_button" onClick={(e) => props.onClick(e, props.index)}>{props.actionText}</button>)
        }
    }
    return (
        <div data-testid="qa-pill" className="text-xs rounded-xl bg-slate-200 flex items-center justify-center py-1 px-2 gap-3">
            <span>{props.text}</span>
            {actionButton()}
        </div>
    )
}

export default Pill