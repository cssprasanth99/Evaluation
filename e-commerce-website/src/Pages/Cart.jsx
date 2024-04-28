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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Error in fetching request", error));
  }, []);
  return (
    <div>
      <Heading>Your Cart</Heading>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((cart) => (
              <Tr key={cart.id}>
                <Td>feet</Td>
                <Td>{cart.products.productId}</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
