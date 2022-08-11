import { Item } from "../Item/Item"
import { HStack } from "@chakra-ui/react"

export const ItemList = ({listaProductos}) => {
  return (
    <>
        <HStack display="grid" gridTemplateColumns="1fr 1fr 1fr">
            {listaProductos.map(product => <Item product={product} key={product.id} />)}
        </HStack>
    </>
  )
}