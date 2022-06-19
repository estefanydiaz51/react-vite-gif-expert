import { PropTypes } from "prop-types";
import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setIputValue ] = useState('');

    const onInputChange = ( { target } ) => {
        setIputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;
        // setCategories( categories => [ inputValue, ...categories ]);
        setIputValue( '' );
        onNewCategory( inputValue.trim() )

    }
    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>        
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}