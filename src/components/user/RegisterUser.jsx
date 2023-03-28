import React, { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Footer from '../../shared/footer/Footer'

import {
    Box,
    Button,
    Center,
    Container,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Text,
    FormErrorMessage,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom'

//*Handling validation errors for each input type
const formValidationSchema = z.object({
    username: z.string().nonempty('Name is required').min(5, 'Username must be at least 5 characters long'),
    password: z.string().nonempty('Password is required').min(5, 'Password must be at least 5 characters long'),
    email: z.string().nonempty('Email is required'),
})

export default function RegisterUser(props) {
    const { register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: zodResolver(formValidationSchema)
        });



    const handleFormSubmit = (data) => {
        //Handle the form submission
        const registerUser = {
            username: data.username,
            password: data.password,
            email: data.email,
        }

        props.onAddRegisterUser(registerUser);

    }



    return (
        <>

            <Box minH="100vh">


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
                            <form onSubmit={handleSubmit(handleFormSubmit)}>
                                <FormControl id="username" isInvalid={errors.username}>
                                    <FormLabel>Name</FormLabel>
                                    <Input
                                        {...register('username')}
                                        type="text"
                                        placeholder="Enter your name" />
                                    <FormErrorMessage>
                                        {errors.username?.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl id="email" isInvalid={errors.email}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        {...register('email')}
                                        type="email"
                                        placeholder="Enter your email" />
                                    <FormErrorMessage>
                                        {errors.email?.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl id="password" isInvalid={errors.password}>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        {...register('password')}
                                        type="password"
                                        placeholder="Enter your password" />
                                    <FormErrorMessage>
                                        {errors.password?.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <Button colorScheme="blue" width="100%" type="submit" cursor="pointer">
                                    Submit
                                </Button>
                                <Text fontSize="sm" mt={2}>
                                    Already have an account?{" "}
                                    <Button variant="link" colorScheme="blue" fontSize="sm">
                                        <Link to='/login'> Log in </Link>
                                    </Button>
                                </Text>
                            </form>
                        </VStack>
                    </Container>
                </Center>
                <Footer />

            </Box>
        </>
    )
}
