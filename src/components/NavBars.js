import home from '../assets/home.png'
import logo from '../assets/logo.jpg'
import contacto from '../assets/contacto.png'
function NavBar(){
    return(
        <>
        <header>
            <div className="containerLogo">
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="containerHome">
                <img src={home} alt="" />
                <a href="#">Home</a>
            </div>
            <ul className="containerCategorias">
                <li><a href="#"></a>Indumentaria</li>
                <li><a href="#"></a>Accesorios</li>
                <li><a href="#"></a>Calzado</li>
            </ul>
            <div className="containerContacto">
                <img src={contacto} alt="" />
                <a href="#">Contacto</a>
            </div>
        </header>
        </>
    )
}
export default NavBar;