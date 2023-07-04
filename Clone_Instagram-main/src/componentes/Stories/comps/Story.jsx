import './Story.css'

export default function Story(props){
    return(
        <div className='story'>
            <div className='section_image'>
                <img className='image_st' src={props.image_story} alt='Perfil' />
            </div>
            <span className='text_st'>{props.texto_story}</span>
        </div>
    )
}