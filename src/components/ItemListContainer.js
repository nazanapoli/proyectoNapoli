import { Heading } from '@chakra-ui/react'
function ItemListContainer ({ greeting }){
    return(
        <Heading size='2xl'
        p='2'
        textAlign='center'
        bgGradient='linear(to-r, #e3f3f3, #154554)'
        bgClip='text'
        fontWeight='extrabold'>{greeting}</Heading>
        )
};
export default ItemListContainer;