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
                <label key={index}>
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
        <div data-testid="qa-filters">
            {buildFields()}
        </div>
    )
}

export default Filters;