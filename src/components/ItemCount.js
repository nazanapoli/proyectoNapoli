import { ButtonGroup, Button, IconButton } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useState } from 'react';
function ItemCount({ initial, stock, onAdd }) {
  const [contador, setContador] = useState(initial);

  function aumentarCarrito() {
    contador<stock && setContador(contador + 1);
  }
  function decrecerCarrito() {
    initial<contador && setContador(contador - 1);
  }

  return (
    <>
      <ButtonGroup
        size="sm"
        isAttached
        variant="outline"
        display="grid"
        mt="2"
        gridTemplateColumns="1fr 1fr 1fr"
      >
        <IconButton onClick={decrecerCarrito} icon={<MinusIcon />} />
        <Button _hover='none' cursor='auto'>{contador}</Button>
        <IconButton onClick={aumentarCarrito} icon={<AddIcon />} />
      </ButtonGroup>
      <Button
        size="sm"
        display="grid"
        mt="2"
        w="100%"
        border="2px"
        borderColor="#b5cbd0"
        color="#6c949c"
      >
        Agregar al carrito
      </Button>
    </>
  );
}

export default ItemCount;
