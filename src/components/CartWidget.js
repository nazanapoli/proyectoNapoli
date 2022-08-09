import carrito from '../assets/carrito.png';
import { HStack, Box, Image } from '@chakra-ui/react'
import { useState } from 'react'
export default function CartWidget(){
    const [isVisible, setIsVisible] = useState(false);

    function over(e) {
      setIsVisible(true);
    }
    function out(e) {
      setIsVisible(false);
    }
    return(
        <HStack 
        w='30px' 
        display='flex' 
        flexDirection='column' 
        justifyContent='center' 
        onMouseOver={over} 
        onMouseOut={out}
        className="pointer">
            <Image src={isVisible ? '' : carrito}/>
            <Box fontWeight='bold' display={isVisible ? "flex" : "none"}>Carrito</Box>
        </HStack>
    )
};