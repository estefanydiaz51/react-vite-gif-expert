import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => {
    test('debe cambiar el valor de la caja de texto', () => {
        render( <AddCategory onNewCategory={ () => {} } />);

        // tomamos el componente html
        const input = screen.getByRole('textbox');

        // disparamos el evento 

        fireEvent.input( input, { target: { value: 'Saitama' } } );

        expect( input.value ).toBe( 'Saitama' );
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';

        // es una simulación de la función
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        expect( input.value ).toBe( '' );

        // probar que la función fuera es llamada
        expect( onNewCategory ).toHaveBeenCalled();

        // espera que la funciion sea lamada x veces
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
        expect( onNewCategory ).toBeCalledWith( inputValue );
    })

    test('no debe de llamar onNewCategory si el input está vació', () => {

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();


      
    })
    
    
    
})
