import './Selecionado.css'

export default function Selecionado(props){
    return(
        <div className='opcao'>
            <span className='opcao_icone'>{props.icone_selecionado}</span>
            <span className='opcao_text'><b>{props.texto_selecionado}</b></span>
        </div>
    )
}