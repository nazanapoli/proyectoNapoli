import home from '../assets/home.png'
import logo from '../assets/logo.jpg'
import Categorias from './Categorias'
import CartWidget from './CartWidget'
import { HStack, Box, Image } from '@chakra-ui/react'
import { useState } from 'react'
export default function NavBar({greeting}){

    const [isVisible, setIsVisible] = useState(false);

    function over(e) {
      setIsVisible(true);
    }
    function out(e) {
      setIsVisible(false);
    }

    return(
        <header>
            <div className="containerLogo">
                <img src={logo} alt="" className="logo" />
            </div>
            <HStack 
            w='30px' 
            display='flex' 
            flexDirection='column' 
            justifyContent='center' 
            onMouseOver={over} 
            onMouseOut={out}
            className="pointer">

                <Image src={isVisible ? '' : home} alt='' />
                <Box fontWeight='bold' display={isVisible ? "flex" : "none"}>Home</Box>

            </HStack>
            <Categorias type="header"/>
            <CartWidget />
        </header>
    )
}