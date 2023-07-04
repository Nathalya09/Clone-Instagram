import './Menu.css'

export default function Menu(props){
    return(
        <div className='menu'>
            <span className='menu_icone'>{props.menu_icone}</span>
            <span className='menu_text'>{props.menu_texto}</span>
        </div>
    )
}