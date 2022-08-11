import { Button  } from '@chakra-ui/react';
import {Link} from 'react-router-dom'

export default function ItemButtonDetalle({id}) {

  return (
    <Link to={`/detail/${id}`}>
      <Button
        size="sm"
        display="grid"
        mt="2"
        w="100%"
        border="none"
        color="#6c949c"
      >
        Ver detalle
      </Button>
    </Link>
  );
}