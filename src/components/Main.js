import ItemListContainer from "./ItemListContainer";
import { Grid } from '@chakra-ui/react'
export default function Main(){
    return(
        <>
            <ItemListContainer greeting='¡Bienvenido!'/>
            <Grid 
                 w='1200px'
                 m='auto'
                 gridTemplateColumns='repeat(3, 1fr)'
            >
            </Grid>
        </>
    )
}