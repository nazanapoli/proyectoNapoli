import ItemListContainer from "./ItemListContainer";
import { ItemDetailContainer } from "./ItemDetailContainer/ItemDetailContainer";
import { Grid } from '@chakra-ui/react'
export default function Main(){
    return(
        <>
            <ItemListContainer greeting='¡Bienvenido!'/>
            <ItemDetailContainer />
            <Grid 
                 w='1200px'
                 m='auto'
                 gridTemplateColumns='repeat(3, 1fr)'
            >
            </Grid>
        </>
    )
}