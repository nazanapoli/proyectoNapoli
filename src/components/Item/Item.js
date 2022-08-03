import { HStack, Box, Image, Stat, Badge, StatNumber, StatHelpText } from '@chakra-ui/react';
import ItemCount from '../ItemCount';
import ItemButtonDetalle from '../ItemButtonDetalle/ItemButtonDetalle';
export const Item = ({ product }) => {
  return (
    <HStack h='100%'         display='flex'
    alignItems='flex-start'>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        m="1rem auto"
       >

        <Image src={product.image} alt={product.title} maxW="400px" />

        <Box
          pl="4"
          pt="4"
          fontWeight="semibold"
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

        <Box p="4">
          {' '}
          <Box display="flex" alignItems="baseline" textAlign="center">
            {product.description}
          </Box>
          <Stat>
            <StatNumber>${product.price}</StatNumber>
            <StatHelpText>{product.size}</StatHelpText>
          </Stat>

          <ItemCount initial={1} stock={product.stock} onAdd={() => {}} />

          <ItemButtonDetalle />

        </Box>
      </Box>
    </HStack>
  );
};
