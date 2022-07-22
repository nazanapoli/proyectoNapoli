function Categorias(param){
        if(param.type==="header"){
            return(
                <ul className="containerCategorias">
                    <li><a href="#"></a>Indumentaria</li>
                    <li><a href="#"></a>Accesorios</li>
                    <li><a href="#"></a>Calzado</li>
                </ul>
            )
        } else {
            return(
                <ul className="containerCategorias column">
                    <li><a href="#"></a>Indumentaria</li>
                    <li><a href="#"></a>Accesorios</li>
                    <li><a href="#"></a>Calzado</li>
                </ul>
            )
        }
};
export default Categorias;