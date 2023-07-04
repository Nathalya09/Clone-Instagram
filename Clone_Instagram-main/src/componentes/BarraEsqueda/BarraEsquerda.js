import './BarraEsquerda.css'
import Logo from './comps/imagens/Logo.png'


import Menu from './comps/Menu'
import Selecionado from './comps/Selecionado';
import Perfil from './comps/Perfil';
import Config from './comps/Config';

import { AiFillHome } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineCompass } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

export default function BarraEsquerda(){
    return(
        <div className="main_be">
            <div className='logo'>
                <img src={Logo} alt="Logotipo"/>
            </div>
            <Selecionado icone_selecionado={<AiFillHome/>} texto_selecionado='Página Inicial'/>
            <Menu menu_icone={<BiSearchAlt/>} menu_texto='Pesquisa'/>
            <Menu menu_icone={<AiOutlineCompass/>} menu_texto='Explorar'/>
            <Menu menu_icone={<BiMoviePlay/>} menu_texto='Reels'/>
            <Menu menu_icone={<BiMessageRounded/>} menu_texto='Mensagens'/>
            <Menu menu_icone={<AiOutlineHeart/>} menu_texto='Notificações'/>
            <Menu menu_icone={<BiAddToQueue/>} menu_texto='Criar'/>
            <Perfil perfil_texto='Perfil'/>
            <Config config_icone={<AiOutlineMenu/>} config_texto='Mais'/>
            
        </div>
    )
}