import { Box, Image, Stat, StatNumber, Text, Select, Button } from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount'
import {cartContext } from '../../context/CartContext.js/CartContext'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

export const ItemDetail = ({detail}) => {

  const [contadorGeneral, setContadorGeneral] = useState(0)
  const { isInCart ,addItem, cartList } = useContext(cartContext)
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded]= useState(false)

  function onAdd() {
    setIsAdded(true)
    addItem(detail, quantity)
    isInCart(detail.id)
  }

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        m="1rem auto"
        display='grid'
        w='auto'
        gridTemplateAreas={`'image title' 'image description'`}
       >

          <Box gridArea='image' display='grid' placeItems='center'>
            <Image src={detail.image} alt={detail.title} height='100%'/>
          </Box>


          <Box
            textAlign="center"
            gridArea='title'
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Text fontWeight="semibold" as="h2" fontSize='3xl'> 
              {detail.title}
            </Text>
          </Box>

          <Box p="4" gridArea='description'>

            {' '}
            <Box fontSize='24px' display="flex" alignItems="baseline" textAlign="center">
              {detail.description}
            </Box>

            <Box display='grid' gridTemplateAreas={`'price size' 'count count' 'btn btn'`} placeItems='center' m='auto'>

              <Stat>
                <StatNumber fontSize='36px'>${detail.price}</StatNumber>
              </Stat>

              <Select variant='filled' placeholder='Selecciona tu talla' textAlign='center'>
                <option value='option1'>XS</option>
                <option value='option2'>S</option>
                <option value='option3'>M</option>
                <option value='option4'>L</option>
                <option value='option5'>XL</option>
              </Select>

              {
                isAdded ?
                <Button
                    gridArea='btn'
                    display="grid"
                    width="100%"
                    border="2px"
                    borderColor="#b5cbd0"
                    color="#6c949c"
                  >
                  <Link to='/cart'>
                    Ir al carrito
                  </Link>
                </Button>
                :
                <ItemCount initial={1} stock={detail.stock} onAdd={onAdd} setContadorGeneral={setContadorGeneral} quantity={quantity} setQuantity={setQuantity} /> 
              }

            </Box>


          </Box>

      </Box>
    </>
  )
}