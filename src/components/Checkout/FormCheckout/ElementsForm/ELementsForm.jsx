import { useState } from "react";

export function ELementsForm(props){
    const [focused, setFocused] = useState(false);
    const { label, element, errorMessage, onChange, id, ...itemFormPros } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };


    if(element === 'input'){
        let itemForm =  {...itemFormPros};
        return( <label>{label}
                    <input className="itemFormulario input"  onChange={onChange} {...itemForm} onBlur={handleFocus} focused={focused.toString()}/>
                    <span className="error">{errorMessage}</span>
                </label>
        )
    }
    else if(element === 'select'){
        let options = [...itemFormPros.option]
        let itemForm =  {...itemFormPros};
        delete itemForm.option
        
        return( <label>{label}
                    <select className='itemFormulario'  onChange={onChange} {...itemForm} onBlur={handleFocus} focused={focused.toString()}>
                        {
                            options.map( (option, index) => {
                                return <option key={index} value={option.value}>{option.description}</option>
                            } )
                        }
                    </select>
                </label>
        )
    }
}