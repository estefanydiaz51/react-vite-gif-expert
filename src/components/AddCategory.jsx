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
        onNewCategory( inputValue.trim() )
        setIputValue( '' );

    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>        
    )
}