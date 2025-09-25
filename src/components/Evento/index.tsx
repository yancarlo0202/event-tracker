import React from 'react';
import style from './Evento.module.scss'
import { IEvento } from '../../interfaces/IEvento'
import { useAlternarStatusEvento, useDeletarEvento } from '../../state/hooks/hooks';
import EventoCheckbox from './EventoCheckbox';

const Evento: React.FC<{ evento: IEvento }> = ({ evento }) => {
  const alternar = useAlternarStatusEvento();

  const deletar = useDeletarEvento();

  const estilos = [
    style.Evento
  ]

  if (evento.completo) {
    estilos.push(style.completo)
  }

  return (
    <div className={estilos.join(' ')}>

      <EventoCheckbox evento={evento} />
      <div className='cards-info'>
        <h3 className={style.descricao} onChange={() => alternar(evento.id)}>{evento.descricao} - {evento.inicio.toLocaleDateString()}</h3>
      </div>
      <i className="far fa-times-circle fa-2x" onClick={() => deletar(evento.id)}></i>
    </div>
  )
}

export default Evento