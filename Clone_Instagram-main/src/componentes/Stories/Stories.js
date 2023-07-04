import './Stories.css'

import Story from './comps/Story'

import Perfil1 from './comps/images/perfil.jpg'
import Perfil2 from './comps/images/hutao.jpg'
import Perfil3 from './comps/images/hope.jpg'
import Perfil4 from './comps/images/shine.jpg'
import Perfil5 from './comps/images/dawn.jpg'
import Perfil6 from './comps/images/hoyushi.jpg'
import Perfil7 from './comps/images/armiham.jpg'
import Perfil8 from './comps/images/genshinmem.jpg'

export default function Stories(){
    return(
        <div className='main_st'>
            <Story image_story={Perfil1} texto_story='livia_landi'/>
            <Story image_story={Perfil2} texto_story='hutaoo0o'/>
            <Story image_story={Perfil3} texto_story='broopekoli'/>
            <Story image_story={Perfil4} texto_story='baldshines'/>
            <Story image_story={Perfil5} texto_story='dawnnxt'/>
            <Story image_story={Perfil6} texto_story='hoyushi'/>
            <Story image_story={Perfil7} texto_story='theamirhan'/>
            <Story image_story={Perfil8} texto_story='kamix.s2'/>
        </div>
    )
}