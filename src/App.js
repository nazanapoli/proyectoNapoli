import NavBar from "./components/NavBars/NavBars";
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
function App(){
  return(
    <BrowserRouter>
      <ChakraProvider>
         <NavBar/>
         <Main/>
         <Footer/>
      </ChakraProvider>
    </BrowserRouter>
  )
}
export default App;