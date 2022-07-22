import Categorias from "./Categorias";
import logo from '../assets/logo.jpg'
function Footer(){
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
export default Footer;