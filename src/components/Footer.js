import Categorias from "./Categorias";
import logo from '../assets/logo.jpg'
export default function Footer(){
    return(
        <footer>
            <div className="containerLogo">
                <img src={logo} alt="" className="logo" />
            </div>
            <Categorias/>
            <div>
                {/* Icono */}
            </div>
        </footer>
    )
};