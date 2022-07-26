import { Box, Image, Stat, Badge, StatNumber, StatHelpText } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import Producto from './Productos'
function CargaProducto() {
    const Stock = []
    const CamisetaAfaHome = new Producto('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/de18f39b42bd4e1ebb57aec901802be1_9366/Camiseta_Titular_Argentina_22_Blanco_HB9215_21_model.jpg','Camiseta AFA Home','$14999','100% Argentina. Diseñada para los hinchas, ofrece comodidad en todo momento gracias a su tejido suave con tecnología de absorción AEROREADY.')
    Stock.push(CamisetaAfaHome)
        return (
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' m='1rem auto'>
              <Image src={CamisetaAfaHome.imageUrl} alt={CamisetaAfaHome.title} />
        
              <Box
                  pl='4'
                  pt='4'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={1}
                  textAlign='center'
                  display='grid'
                  gridTemplateColumns='70% 30%'
                >
                  {CamisetaAfaHome.title}
                  <Badge colorScheme='green' borderRadius='full' m='auto'>Nuevo</Badge>
              </Box>

              <Box p='4'>
                <Box display='flex' alignItems='baseline' textAlign='center'>
                  {CamisetaAfaHome.description}
                </Box>

                <Stat>
                  <StatNumber>{CamisetaAfaHome.formattedPrice}</StatNumber>
                  <StatHelpText>XS/S/M/L/XL</StatHelpText>
                </Stat>
                
                <ItemCount initial={1} stock={5} onAdd={()=>{}} />

              </Box>
            </Box>
          )
}
export default CargaProducto;