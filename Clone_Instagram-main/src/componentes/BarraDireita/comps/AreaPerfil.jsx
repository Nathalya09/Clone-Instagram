import Perfil from './imagens/perfil.jpg'
import './AreaPerfil.css'

export default function AreaPerfil(){
    return(
        <div className='area_pf'>
                <div className='pf_image'>
                    <img src={Perfil} alt='perfil'/>
                </div>

                <div className='pf_texto'>
                    <span className='user'>livia_landi</span>
                    <span className='nome'>Lívia</span>
                </div>

                <div className='pf_botao'>
                    <span className='botao_mudar'>Mudar</span>
                </div>
            </div>
    )
}