import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Text,
} from "@chakra-ui/react";
import React from 'react'

export default function RegisterUser() {
    return (
        <Center h="100vh" w="100vw">
            <Container maxW="container.sm">
                <VStack
                    spacing={4}
                    p={4}
                    boxShadow="lg"
                    borderRadius="lg"
                    bgGradient="linear(to-r, teal.500, cyan.500)"
                    w="100%"
                >
                    <FormControl id="name">
                        <FormLabel>Name</FormLabel>
                        <Input type="text" placeholder="Enter your name" />
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder="Enter your email" />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder="Enter your password" />
                    </FormControl>
                    <Button colorScheme="blue" width="100%" type="submit">
                        Submit
                    </Button>
                    <Text fontSize="sm" mt={2}>
                        Already have an account?{" "}
                        <Button variant="link" colorScheme="blue" fontSize="sm">
                            Log in
                        </Button>
                    </Text>
                </VStack>
            </Container>
        </Center>
    )
}
