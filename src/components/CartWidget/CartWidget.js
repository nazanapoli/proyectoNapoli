import carrito from '../../assets/carrito.png';
import { HStack, Text, Image } from '@chakra-ui/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext.js/CartContext';

export default function CartWidget(){

    const {totalQuantity} = useContext(cartContext)
    return(
      <Link to='/cart' className='containerCart'>
        <HStack 
        display='flex' 
        alignItems='center'
        justifyContent='center' 
        className="pointer">
              <Image src={carrito}/>
              {totalQuantity()===0 ? null : <Text backgroundColor='#be4d25' borderRadius='50%' w='20px' h='20px' textAlign='center' fontSize='15px' color='aliceblue'>
                {totalQuantity()}
              </Text>}

        </HStack>
      </Link>

    )
};