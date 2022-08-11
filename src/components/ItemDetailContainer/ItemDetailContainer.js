import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { producto } from "../../assets/producto"
import { Spinner, HStack, Text } from "@chakra-ui/react"
import { customFetch } from '../../assets/customFetch'
import { useParams } from "react-router"

export const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})
  const [mostrar,setMostrar] = useState(true)
  const [spinner, setSpinner] = useState(false)

  const idParams = useParams()
  useEffect(()=>{
        customFetch(producto)
                .then(res => {
                        setSpinner(true)
                        setDetail(res.find(item => item.id==idParams.id))
                })
  },[idParams.id])

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