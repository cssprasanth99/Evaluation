import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import axios from "axios";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post(`https://reqres.in/api/login`, user)
      .then((res) => console.log(res, "response"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Center>
        <FormControl maxW="500px" pt="50px">
          <FormLabel>Email address</FormLabel>
          <Input type="email" name="email" onChange={handleChange} />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <br />
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" onChange={handleChange} />
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            onSubmit={handleSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </Center>
    </div>
  );
};
