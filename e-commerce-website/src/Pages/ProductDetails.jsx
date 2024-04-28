import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
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

export const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Error in fetching request", error));
  }, []);

  console.log(data);

  return (
    <div>
      <Card align="center">
        <CardHeader>
          <Heading size="md">{data.title}</Heading>
        </CardHeader>
        <CardBody>
          <Center>
            <Image
              src={data.image}
              boxSize="200px"
              alt="no img"
              borderRadius="lg"
            />
          </Center>
          <br />
          <Text>{data.description}</Text>
          <br />
          <Center>
            <Text>{data.category}</Text>
          </Center>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              <Link to={`/checkout`}>Buy now</Link>
            </Button>
            <Button variant="ghost" colorScheme="blue">
              <Link to={`/cart`}>Add to cart</Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};
