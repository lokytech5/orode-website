import React from 'react'
import {
    Button,
    Center,
    Container,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Text
} from "@chakra-ui/react";

export default function LoginInUser() {
    return (
        <Center h="100vh" w="100vw" top="-10">
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
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder="Enter your password" />
                    </FormControl>
                    <Button colorScheme="blue" width="100%" type="submit">
                        Submit
                    </Button>
                    <Text fontSize="sm" mt={2}>
                        Need an account?{" "}
                        <Button variant="link" colorScheme="blue" fontSize="sm">
                            Sign up
                        </Button>
                    </Text>
                </VStack>
            </Container>
        </Center>
    )
}
