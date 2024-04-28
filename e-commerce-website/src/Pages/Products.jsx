import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Stack,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Error in fetching request", error));
  }, []);

  return (
    <div>
      <Heading>Products</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data.map((product) => (
          <Card key={product.id} maxW="sm">
            <CardBody>
              <Center>
                <Image
                  src={product.image}
                  boxSize="150px"
                  alt="no img"
                  borderRadius="lg"
                />
              </Center>
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.title}</Heading>
                <Text color="blue.600" fontSize="2xl">
                  ${product.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  <Link to={`/products/${product.id}`}>View here</Link>
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  <Link to={`/cart`}>Add to cart</Link>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </div>
  );
};
