import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs()', () => {
    test('debe de retornar un arreglo de gifs', () => {
        const gifs = await getGifs('One Punch'); 

        // que el arreglo al menos tiene un objeto

        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0]).toEqual({
            
            id: expect.any( String ), // que espere lo que sea que sea string
            title: expect.any( String ),
            url: expect.any( String )
            
        })

    })
    
})
