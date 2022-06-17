import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

    const onAddCategory = ( newCategory ) => {

        setCategories([ newCategory, ...categories]);
        // setCategories( cat => [ ...cat, 'Valorant' ] );
    }


    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            {/* Listado de Gif */}
            <ol>
                { categories.map( category => {
                    return <li key={category}>
                        { category }
                    </li>
                }) }
                
            </ol>
            {/* Gif item */}
        </>
    )
}