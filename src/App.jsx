import ImageSlider from "./components/ImageSlider";
import Title from "./components/Title";
import { ChakraProvider, Box } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <Box bg='black' minH='100vh'>
        <ImageSlider />
      </Box>
    </ChakraProvider>
  );
}

export default App;
