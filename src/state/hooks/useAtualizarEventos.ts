import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { ListaDeEventosState } from "../atom"

const useAtualizarEvento = () => {
    const setListadeEventos = useSetRecoilState<IEvento[]>(ListaDeEventosState)
    return (evento: IEvento) => {
        return setListadeEventos(listaAntiga => {
        const indice = listaAntiga.findIndex(evt => evt.id === evento.id)
        return [...listaAntiga.slice(0, indice), evento, ...listaAntiga.slice(indice + 1)]
      })
    }
}

export default useAtualizarEvento