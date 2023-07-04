import './Recomendacoes.css'

export default function Recomendacoes(props){
    return(
        <div className='area_rc'>
                <div className='pf_image'>
                    <img src={props.pf_recomendacao} alt='perfil'/>
                </div>

                <div className='pf_texto'>
                    <span className='user'>{props.user_recomendacao}</span>
                    <span className='nome'>{props.nome_recomendacao}</span>
                </div>

                <div className='pf_botao'>
                    <span className='botao_mudar'>Seguir</span>
                </div>
            </div>
    )
}