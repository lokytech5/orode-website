import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import Footer from '../../shared/footer/Footer';
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthenticated, setUserRole } from '../../redux/reduxActions/authActions'
import {
    Button,
    Center,
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
    Box,
    Text
} from "@chakra-ui/react";

//*Handling validation errors for each input type

const formValidationSchema = z.object({
    username: z.string().nonempty('Name is required'),
    password: z.string().nonempty('Password is required'),
});

export default function LoginInUser(props) {
    const { register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: zodResolver(formValidationSchema)
        });

    const dispatch = useDispatch();

    const navigate = useNavigate();
    //*Initializing authenticated User
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const handleFormSubmit = (data) => {
        //Handle the form submission
        const loginData = {
            username: data.username,
            password: data.password,
        };
        props.onAddLogin(loginData)
            .then((user) => {
                if (user) {
                    dispatch(setAuthenticated(true));
                    dispatch(setUserRole(user.isAdmin ? 'admin' : 'user'));
                    navigate('/');
                }
            })
            .catch((error) => {
                console.error('Error while logging in:', error);
            });


    };

    return (
        <>

            <Box display="flex" flexDirection="column" minHeight="100vh">
                <Box flexGrow={1}>
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
                                            placeholder="Enter your Username" />
                                        <FormErrorMessage>
                                            {errors.username?.message}
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
                                        Need an account?{" "}
                                        <Button variant="link" colorScheme="blue" fontSize="sm">
                                            <Link to='/register'>  Sign up </Link>
                                        </Button>
                                    </Text>
                                </form>
                            </VStack>
                        </Container>
                    </Center>

                </Box>
                <Footer />
            </Box>
        </>
    )
}
