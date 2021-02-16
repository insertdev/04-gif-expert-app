import React from 'react'
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('pruebas en <GifGrid />', () => {
    const category = 'Dragon Ball';
     
    test('debe de mostrarse correctamente', () => {
        // fingir resultado (mock)
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={category} />);
        
        expect(wrapper).toMatchSnapshot();

    })
    
    
})
