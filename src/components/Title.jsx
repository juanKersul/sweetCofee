import {
  Card,
  Heading,
  Center,
  CardBody,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
const Title = () => {
  return (
    <Center>
      <Card bg="black" color="white" p={3} mb={3}>
        <CardBody>
          <Heading as="h1" size="xl">
            Sweet Coffee
          </Heading>
        </CardBody>
      </Card>
    </Center>
  );
};
export default Title;
