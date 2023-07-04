import './Feed.css'

//Importes do Perfil 1
import Perfil_Sidoka from './comps/perfil_sidoka.jpg'
import Post_Sidoka from './comps/post_sidoka.jpg'

//Importes do Perfil 2
import Perfil_Veigh from './comps/perfil_veigh.jpg'
import Post_Veigh from './comps/post_veigh.jpg'

//Importes do Perfil 3
import Perfil_Void from './comps/perfil_void.jpg'
import Post_Void from './comps/post_void.png'

//Ícones
import Curtir from './comps/Icon/curtir.png'
import Comentar from './comps/Icon/comentar.png'
import Salvar from './comps/Icon/salvar.png'
import Compartilhar from './comps/Icon/compartilhar.png'

export default function Feed(props) {
    return (
        <div className="container-post">
            
            {/* Post 1 */}
            <div className="info-user">
                <img src={Perfil_Sidoka} alt="" />
                <p>{props.nome_perfil}</p>
            </div>
            <div className="img-post">
                <img src={Post_Sidoka} alt="" />
            </div>
            <div className="icones">
                <div className="icon-left">
                    <img src={Curtir} alt="" />
                    <img src={Comentar} alt="" />
                    <img src={Compartilhar} alt="" />
                </div>
                <div className="icon-right">
                    <img src={Salvar} alt="" />
                </div>
            </div>

            {/* Post 2 */}
            <div className="info-user">
                <img src={Perfil_Veigh} alt="" />
                <p>{props.nome_perfil2}</p>
            </div>
            <div className="img-post">
                <img src={Post_Veigh} alt="" />
            </div>
            <div className="icones">
                <div className="icon-left">
                    <img src={Curtir} alt="" />
                    <img src={Comentar} alt="" />
                    <img src={Compartilhar} alt="" />
                </div>
                <div className="icon-right">
                    <img src={Salvar} alt="" />
                </div>
            </div>

            {/* Post 3 */}
            <div className="info-user">
                <img src={Perfil_Void} alt="" />
                <p>{props.nome_perfil3}</p>
            </div>
            <div className="img-post">
                <img src={Post_Void} alt="" />
            </div>
            <div className="icones">
                <div className="icon-left">
                    <img src={Curtir} alt="" />
                    <img src={Comentar} alt="" />
                    <img src={Compartilhar} alt="" />
                </div>
                <div className="icon-right">
                    <img src={Salvar} alt="" />
                </div>
            </div>
        </div>

    )
}