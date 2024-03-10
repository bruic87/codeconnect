import { useState } from 'react'
import './styles.css'

export default function BarraDePesquisa() {
    const [termoPesquisa, SetTermoPesquisa] = useState('')
    return(
        <input 
            type='search' 
            placeholder="Digite o que você procura" 
            className='barra-pesquisa'
            value={termoPesquisa}
            onChange={(evento) => SetTermoPesquisa(evento.target.value)}
        />
    )
}