import { selector } from "recoil";
import { filtroDeEventos, ListaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

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

export const eventosAsync = selector({
    key: 'eventosAsync',
    get: async () => {
        const respostaHttp = await fetch('http://localhost:8080/eventos')
        const eventosJson: IEvento[] = await respostaHttp.json()
        return eventosJson.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim)
        }))
    }
})