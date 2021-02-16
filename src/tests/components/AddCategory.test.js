import React from 'react';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en <AddCategory />', () => {
    // función jest (como si fuera una función vacía)
    const setCategories = jest.fn();
    let wrapper;

    // reinicializar
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    });

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        // Simulamos el cambio en el input con el value Hola Mundo
        input.simulate('change', { target: { value } });

        // Esperamos que el párrafo tenga el valor Hola Mundo
        expect( wrapper.find('p').text().trim() ).toBe(value);
    })
    
    test('NO debe de postear la información con submit sin texto', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();

    })
    
    
})
