import './Perfil.css'
import Profile from './imagens/Foto_Perfil.jpg'

export default function Perfil(props){
    return(
        <div className='perfil'>
            <img className='perfil_icone' src={Profile} alt='perfil'/>
            <span className='perfil_text'>{props.perfil_texto}</span>
        </div>
    )
}