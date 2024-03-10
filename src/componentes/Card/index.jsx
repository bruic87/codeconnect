import './styles.css'
import Code from './assets/code.png'
import Share from './assets/share.png'
import Chat from './assets/chat.png'

export default function Card({ id, imagemUrl, titulo, resumo, LinhasDeCodigo, compartilhamentos, comentarios, usuario }) {
    return(
        <article className='card'>
            <div className='card__imagem'>
                <img src={imagemUrl} alt="Imagem do post" />
            </div>
            <div className='card__conteudo'>
                <div className='card__texto'>
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>

                <div className='conteudo__rodape'>
                    <ul>
                        <li>
                            <img src={Code} alt="Códigos" />
                            {LinhasDeCodigo}
                        </li>
                        <li>
                            <img src={Share} alt="Compartilhamentos" />
                            {compartilhamentos}
                        </li>
                        <li>
                            <img src={Chat} alt="Comentários" />
                            {comentarios}
                        </li>
                    </ul>

                    <div className='rodape__usuario'>
                        <img src={usuario.imagem} alt="Imagem do usuario" />
                        {usuario.nome}
                    </div>
                </div>
            </div>
        </article>
    )
}