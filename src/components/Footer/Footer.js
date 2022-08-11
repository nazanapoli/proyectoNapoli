import Categorias from "../Categorias/Categorias";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
export default function Footer(){
    function redireccion(url) {
        window.location.href = url
    }
    return(
        <footer>
            <div className="containerLogo">
                <Link to='/'>
                    <img src={logo} alt="" className="logo" />
                </Link>
            </div>
            <Categorias/>
            <div className="column spaceAround">
                <Image src={instagram} className="animation" onClick={()=>{redireccion("https://www.instagram.com/")}}/>
                <Image src={facebook} className="animation" onClick={()=>{redireccion("https://www.facebook.com/")}}/>
            </div>
        </footer>
    )
};