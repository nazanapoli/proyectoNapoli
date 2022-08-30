import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { Spinner, HStack, Text } from "@chakra-ui/react"
import { useParams } from "react-router"
import { collection, getDoc, doc } from "firebase/firestore"
import { dataBase } from "../../firebase"


export const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})
  const [mostrar,setMostrar] = useState(true)
  const [spinner, setSpinner] = useState(false)
  const id = useParams()

  useEffect(()=>{
                const collectionProducts = collection(dataBase, "products")
                const reference = doc(collectionProducts,id)
                const consulta = getDoc(reference)

                consulta
                .then(res =>{
                        setSpinner(true)
                        setDetail(res.data())
                })
  },[id])

  if(mostrar === true){
        return (
                <>
                    {!spinner && 
                            <HStack as='div' display='grid' placeItems='center'>
                                    <Spinner size='xl' color='#6c949c' speed='0.8s' thickness='4px' />
                                    <Text fontSize='large' color='#6c949c' fontWeight='bold' >
                                            Cargando...
                                    </Text>
                            </HStack>
                    }
                    {spinner && <ItemDetail detail={detail} />}
                </>
        )
}
}