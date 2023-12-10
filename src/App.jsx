import ImageSlider from "./components/ImageSlider";
import Title from "./components/Title";
import { ChakraProvider, Box } from "@chakra-ui/react";
import MenuApp from "./components/MenuApp";
function App() {
  return (
    <ChakraProvider>
      <Box bg="black" minH="100vh">
        <MenuApp />
        <ImageSlider />
      </Box>
    </ChakraProvider>
  );
}

export default App;
