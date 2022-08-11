import home from '../../assets/home.png'
import logo from '../../assets/logo.jpg'
import Categorias from '../Categorias/Categorias'
import CartWidget from '../CartWidget/CartWidget'
import { HStack, Box, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
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
                <Link to='/'>
                    <img src={logo} alt="" className="logo" />
                </Link>
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
                <Link to='/'>
                    <Box fontWeight='bold' display={isVisible ? "flex" : "none"}>Home</Box>
                </Link>
            </HStack>
            <Categorias type="header"/>
            <CartWidget />
        </header>
    )
}