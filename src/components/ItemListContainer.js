import { Heading, Spinner, HStack, Text } from '@chakra-ui/react'
import { ItemList } from './ItemList/ItemList'
import {producto} from "../assets/producto"
import { customFetch } from "../assets/customFetch"
import { useState, useEffect } from "react"

export default function ItemListContainer ({ greeting }){

  const [listaProductos, setListaProductos] = useState([])
  const [spinner, setSpinner] = useState(false)

  useEffect(()=>{
    customFetch(producto)
        .then(data => {
                setSpinner(true)
                setListaProductos(data)
        })
  },[])
    return(
        <>
                <Heading size='2xl'
                p='2'
                textAlign='center'
                bgGradient='linear(to-r, #e3f3f3, #154554)'
                bgClip='text'
                fontWeight='extrabold'
                >{greeting}</Heading>
                {!spinner && 
                <HStack display='grid' placeItems='center'>
                        <Spinner size='xl' color='#6c949c' speed='0.8s' thickness='4px' />
                        <Text fontSize='large' color='#6c949c' fontWeight='bold' >
                                Cargando...
                        </Text>
                </HStack>
                }
                {spinner && <ItemList listaProductos={listaProductos} />}
        </>

        )
};