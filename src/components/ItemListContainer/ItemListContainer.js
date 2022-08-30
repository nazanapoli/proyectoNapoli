import { Heading, Spinner, HStack, Text } from '@chakra-ui/react'
import { ItemList } from '../ItemList/ItemList'
import { useState, useEffect } from "react"
import { useParams } from 'react-router'
import { collection, getDocs, query, where } from "firebase/firestore"
import { dataBase } from "../../firebase"

export default function ItemListContainer ({ greeting }){

  const [listaProductos, setListaProductos] = useState([])
  const [spinner, setSpinner] = useState(false)
  const catParams = useParams()

  useEffect(()=>{

                const collectionProducts = collection(dataBase, "products")
                const filtro = query(collectionProducts, where("category","==",catParams))
                const consulta = getDocs(collectionProducts)
                
                consulta
                .then(snapshot =>{
                      const product = snapshot.docs.map(doc => {
                        return {...doc.data(), id: doc.id}
                })
                setListaProductos(filtro)
                setSpinner(true)
                if (!catParams.category) {
                        setListaProductos(product)
                } else {
                        setListaProductos(product.filter(item => item.category === catParams.category))
                        return(
                                <Heading size='2xl'
                                p='2'
                                textAlign='center'
                                bgGradient='linear(to-r, #e3f3f3, #154554)'
                                bgClip='text'
                                fontWeight='extrabold'
                                >{catParams.category}</Heading> 
                        )
                }
        })            
},[catParams])
    return (
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