import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";
import { Cart } from "../Cart/Cart";
import { Routes, Route } from "react-router-dom";
export default function Main(){
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer greeting='¡Bienvenido!'/>} />
                <Route path="/categoria/:category" element={<ItemListContainer />} />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>
    )
}