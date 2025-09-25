// state/hooks.ts
import { useSetRecoilState } from 'recoil';
import { ListaDeEventosState } from '../atom';

export function useAlternarStatusEvento() {  
    const setLista = useSetRecoilState(ListaDeEventosState);  
    return (id: number) => {    setLista(lista => lista.map(
        e =>  e.id === id ? { ...e, completo: !e.completo } : e    
    ));  
};}
export function useDeletarEvento() {  
    const setLista = useSetRecoilState(ListaDeEventosState);  
    return (id: number) => { setLista(lista => lista.filter(e => e.id !== id));  
    };
}