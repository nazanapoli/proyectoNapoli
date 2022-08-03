import carrito from '../assets/carrito.png';
export default function CartWidget(){
    return(
        <div className="containerCarrito">
            <img src={carrito} alt="" />
            <a href="#">Carrito</a>
        </div>
    )
};