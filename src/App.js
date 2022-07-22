import NavBar from "./components/NavBars";
import Main from "./components/Main";
import Footer from './components/Footer'
import { ChakraProvider } from '@chakra-ui/react'
function App(){
  return(
    <ChakraProvider>
         <NavBar/>
         <Main/>
         <Footer/>
    </ChakraProvider>
  )
}
export default App;