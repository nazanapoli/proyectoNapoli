import home from '../assets/home.png'
import logo from '../assets/logo.jpg'
import Categorias from './Categorias'
import CartWidget from './CartWidget'
export default function NavBar({greeting}){
    return(
        <header>
            <div className="containerLogo">
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="containerHome">
                <img src={home} alt="" />
                <a href="#"> Home </a>
            </div>
            <Categorias type="header"/>
            <CartWidget />
        </header>
    )
}