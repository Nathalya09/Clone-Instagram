import './BarraDireita.css'

import AreaPerfil from './comps/AreaPerfil'
import Sugestao from './comps/Sugestao'
import Recomendacoes from './comps/Recomendacoes'

import Perfil1 from './comps/imagens/catsproof.jpg'
import Perfil2 from './comps/imagens/perfect.meow.jpg'
import Perfil3 from './comps/imagens/crybananacat.jpg'
import Perfil4 from './comps/imagens/catifystores.jpg'
import Perfil5 from './comps/imagens/thecatiefy.jpg'

export default function BarraDireta(){
    return(
        <div className='main_bd'>
            <AreaPerfil />
            <Sugestao />

            <Recomendacoes 
                pf_recomendacao={Perfil1} 
                user_recomendacao='catsproof'
                nome_recomendacao='Sugestões para você'
            />

            <Recomendacoes 
                pf_recomendacao={Perfil2} 
                user_recomendacao='perfect.meow'
                nome_recomendacao='Sugestões para você'
            />

            <Recomendacoes 
                pf_recomendacao={Perfil3} 
                user_recomendacao='crybananacat'
                nome_recomendacao='Sugestões para você'
            />

            <Recomendacoes 
                pf_recomendacao={Perfil4} 
                user_recomendacao='catifystores'
                nome_recomendacao='Sugestões para você'
            />

            <Recomendacoes 
                pf_recomendacao={Perfil5} 
                user_recomendacao='thecatiefy'
                nome_recomendacao='Sugestões para você'
            />

        </div>
    )
}