import ItemListContainer from "./ItemListContainer";
import CargaProducto from "./Cards";
import { Grid } from '@chakra-ui/react'
function Main(){
    return(
        <>
            <ItemListContainer greeting='¡Bienvenido!'/>
            <Grid 
                 w='1200px'
                 m='auto'
                 gridTemplateColumns='repeat(3, 1fr)'
            >
                <CargaProducto/>
                {/* <CargaProducto/>
                <CargaProducto/>
                <CargaProducto/>
                <CargaProducto/>
                <CargaProducto/> */}
            </Grid>
        </>
    )
}
export default Main;