import carrito from '../assets/carrito.png'
function CartWidget(){
    return(
        <div className="containerCarrito">
            <img src={carrito} alt="" />
            <a href="#">Carrito</a>
        </div>
    )
};
export default CartWidget;