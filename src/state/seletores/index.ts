import { selector } from "recoil";
import { filtroDeEventos, ListaDeEventosState } from "../atom";

export const eventosFiltradosStates = selector({
    key: 'eventosFiltradosStates',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos)
        const todosOsEventos = get(ListaDeEventosState)
        const eventos = todosOsEventos.filter(evento => {
            if (!filtro.data) {
                return true
            }
            const ehOMesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
            return ehOMesmoDia
        })
        return eventos
    }
})