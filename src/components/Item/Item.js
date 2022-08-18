import { HStack, Box, Image, Stat, Badge, StatNumber, StatHelpText } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ItemButtonDetalle from '../ItemButtonDetalle/ItemButtonDetalle';
export const Item = ({ product }) => {
  return (
    <HStack h='100%' display='flex' alignItems='flex-start' >
      <Box
       className='item'
       boxShadow='0 0.5rem 1rem rgba(0, 0, 0, 0.2)' 
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        m="1rem auto"
        transition='transform 0.2s'
        cursor='pointer'
        position='relative'
       >
        <Link to={`/detail/${product.id}`}>
          <Image src={product.image} alt={product.title} maxW="400px" />
        </Link>

        <Box
          pl="4"
          pt="4"
          fontWeight="semibold"
          fontSize='20px'
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          textAlign="center"
          display="grid"
          gridTemplateColumns="70% 30%"
        >

          {product.title}

          <Badge colorScheme="green" borderRadius="full" m="auto">
            Nuevo
          </Badge>

        </Box>

        <Box p="4" >
          {' '}
          <Stat>
            <StatNumber>${product.price}</StatNumber>
            <StatHelpText>{product.size}</StatHelpText>
          </Stat>

          <ItemButtonDetalle id={product.id}/>

        </Box>
      </Box>
    </HStack>
  );
};
