import TextInput from "./TextInput.jsx";

const Filters =(props)=> {

    const buildFields = () => {
       if (!props.fields) {
            return (
                <span></span>
            )
       } 

       const fields = Object.entries(props.fields);
       return fields.map((item, index) => {
            return (
                <label key={index} className="flex flex-col gap-2">
                    <h3>{item[0]}</h3>
                    <TextInput 
                        name={item[0]}
                        value={item[1]}
                        placeholder={item[0]}
                        onChange={(text) => props.onChange({ [item[0]]: text})}/>
                </label>
            )
       })
    }


    return (
        <div data-testid="qa-filters" className="bg-slate-50 rounded-md px-3 py-4 flex flex-col gap-2">
            <h2 className='text-md font-bold'>Filters</h2>
            <div className="flex flex-col gap-4">
                {buildFields()}
            </div>
        </div>
    )
}

export default Filters;