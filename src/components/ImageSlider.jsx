import { Box, Image, Button, Center, Card } from "@chakra-ui/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const images = [
  <Center>
    <Image
      src="src/assets/tazaCafe.jpeg"
      onDragStart={handleDragStart}
      role="presentation"
      boxSize='lg'
      w='95%'
    />
  </Center>,
  <Center>
    <Image
      src="src/assets/tazaCafe2.jpeg"
      onDragStart={handleDragStart}
      role="presentation"
      boxSize='lg'
      w='95%'
    />
  </Center>,
  <Center>
    <Image
      src="src/assets/tazaCafe3.jpeg"
      onDragStart={handleDragStart}
      role="presentation"
      boxSize='lg'
      w='95%'
    />
  </Center>,
];

const ImageSlider = () => {
  return (
    <Box pt="100px">
      <AliceCarousel mouseTracking items={images} />
    </Box>
  );
};

export default ImageSlider;
