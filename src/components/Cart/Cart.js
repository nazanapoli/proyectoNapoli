import { HStack, Divider, Image, Text, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import {cartContext } from '../../context/CartContext.js/CartContext'
import carritoVacio from '../../assets/cart-empty.png'
import { Link } from 'react-router-dom'

export const Cart = () => {

  const {cartList, totalPrice, removeItem, clear} = useContext(cartContext)

  return (
    <HStack display='flex' flexDirection='column' alignItems='center' m='1rem auto'>
      <HStack>
        <ul>
          {cartList.map(e => 
            <>
              <HStack key={e.id} 
              display='grid'
              gridTemplateColumns='1fr 1fr 1fr 1fr' overflow='hidden' 
              placeItems='center' 
              m='1rem auto'              
              boxShadow='0 0.5rem 1rem rgba(0, 0, 0, 0.2)' 
              borderRadius="lg">
                <Image objectFit='cover' src={e.image} w='100%' h='220px'/>
                <Text textAlign='center' as='b'>{e.title}</Text>
                <Text textAlign='center'>Cantidad: {e.quantity}</Text>
                <Button backgroundColor='#be4d25' _hover={{background: "brown"}} color='white' onClick={()=>{removeItem(e.id)}}>X</Button>
              </HStack>
              <Divider />
            </>
          )}
        </ul>
      </HStack>
        <HStack as='div' display='flex' flexDirection='column'>
          {cartList.length === 0 && <Image maxW='300px' src={carritoVacio} />}

          <Text mt='1rem' as='b' fontSize='20px'>
          {cartList.length === 0 ? 'Tu carrito aún  se encuentra vacío' : `Total: $${totalPrice()}`}
          </Text>

          {cartList.length === 0 ? 
          <Link to='/'>
            <Button
            border="2px"
            borderColor="#b5cbd0"
            color="#6c949c">
            Ver productos
            </Button>
          </Link>
          : 
          <Button
          border="2px"
          borderColor="#b5cbd0"
          color="#6c949c"
          onClick={clear}>
          Vaciar carrito
          </Button>
          }
        </HStack>
    </HStack>
  )
}
