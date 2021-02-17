import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', () => {
        // renderHook inicializa virtualmente el hook
        const { result } = renderHook( () => useFetchGifs('Dragon Ball'));
        const { data, loading } = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })


})
