import NavBar from "./components/NavBars";
import { ChakraProvider } from '@chakra-ui/react'
function App(){
  return(
    <ChakraProvider>
         <NavBar/>
    </ChakraProvider>

  )
}
export default App;