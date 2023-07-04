import './Config.css'

export default function Config(props){
    return(
        <div className='config'>
            <span className='config_icone'>{props.config_icone}</span>
            <span className='config_text'>{props.config_texto}</span>
        </div>
    )
}