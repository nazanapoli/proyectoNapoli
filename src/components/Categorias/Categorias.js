import { Link } from "react-router-dom"
export default function Categorias(param){
        if(param.type==="header"){
            return(
                <nav className="containerCategorias">
                    <Link to="/categoria/indumentaria">Indumentaria</Link>
                    <Link to="/categoria/calzado">Calzado</Link>
                    <Link to="/categoria/accesorios">Accesorios</Link>
                </nav>
            )
        } else {
            return(
                <nav className="containerCategorias column">
                    <Link to="/categoria/indumentaria">Indumentaria</Link>
                    <Link to="/categoria/calzado">Calzado</Link>
                    <Link to="/categoria/accesorios">Accesorios</Link>
                </nav>
            )
        }
};