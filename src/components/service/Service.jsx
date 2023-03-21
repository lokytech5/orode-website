import React from 'react'
import { z } from 'zod';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Box,
    VStack,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
    Textarea,
    Button,
    Flex,
    Text,
    Link,
} from '@chakra-ui/react';
import { useSelector} from 'react-redux'

//*Handling validation errors for each input type

const formValidationSchema = z.object({
    name: z.string().nonempty('Name is required'),
    email: z.string().nonempty('Email address'),
    phoneNumber: z.string().nonempty('Phone number is required'),
    serviceType: z.enum(['wedding', 'portrait', 'event']),
    date: z.string().nonempty('Date is required'),
    time: z.string().nonempty('Time is required'),
    address: z.string().nonempty('Address is required'),
    message: z.string().optional(),
});

export default function Service(props) {
    const { register,
        handleSubmit,
        formState: { errors, isValid },
        reset } = useForm({
            resolver: zodResolver(formValidationSchema)
        });

    //*Initializing redux component
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    

    const handleFormSubmit = (data) => {
        // Handle form submission
        const serviceData = {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            serviceType: data.serviceType,
            date: data.date,
            time: data.time,
            address: data.address,
            message: data.message,
        }
        props.onAddService(serviceData);
        reset();
    };

    return (
        <Flex
            minHeight="100vh"
            justifyContent="center"
            alignItems="center"
            padding={{ base: '2', md: '0' }}
            paddingTop="20"
        >

            <Box width={{ base: '100%', md: '60%', lg: '40%' }}
                pt={20}
                pb={6}
                pl={6}
                pr={6}
                borderRadius="md"
                boxShadow="xl"
            // bgGradient="linear(to-r, teal.500, cyan.500)"
            >

                <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
                    Book us for your Event
                </Text>
                {isAuthenticated ? (<form onSubmit={handleSubmit(handleFormSubmit)}>
                    <VStack spacing={6} align="stretch">
                        <FormControl id="name" isInvalid={errors.name}>
                            <FormLabel fontSize="lg">Name</FormLabel>
                            <Input
                                {...register('name')}
                                type="text"
                                fontSize="lg"
                                placeholder="Enter your name" />
                            <FormErrorMessage>
                                {errors.name?.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl id="email" isInvalid={errors.email}>
                            <FormLabel fontSize="lg">Email</FormLabel>
                            <Input
                                {...register('email')}
                                type="email"
                                fontSize="lg"
                                placeholder="Enter your email" />
                            <FormErrorMessage>
                                {errors.email?.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl id="tel" isInvalid={errors.phoneNumber}>
                            <FormLabel fontSize="lg">Phone Number</FormLabel>
                            <Input
                                {...register('phoneNumber')}
                                type="tel"
                                fontSize="lg"
                                placeholder="Enter your phone number" />
                            <FormErrorMessage>
                                {errors.phoneNumber?.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl id="service">
                            <FormLabel fontSize="lg">Service Type</FormLabel>
                            <Select
                                {...register('serviceType')}
                                fontSize="lg">
                                <option value="wedding">Wedding Photography</option>
                                <option value="portrait">Portrait</option>
                                <option value="event">Event</option>
                            </Select>
                        </FormControl>

                        <FormControl id="date" isInvalid={errors.date}>
                            <FormLabel fontSize="lg">Date</FormLabel>
                            <Input
                                {...register('date')}
                                type="date"
                                fontSize="lg" />
                            <FormErrorMessage>
                                {errors.date?.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl id="time" isInvalid={errors.time}>
                            <FormLabel fontSize="lg">Time</FormLabel>
                            <Input
                                {...register('time')}
                                type="time"
                                fontSize="lg" />
                            <FormErrorMessage>
                                {errors.time?.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl id="address" isInvalid={errors.address}>
                            <FormLabel fontSize="lg">Address</FormLabel>
                            <Input
                                {...register('address')}
                                type="text"
                                fontSize="lg"
                                placeholder="Enter the address" />
                            <FormErrorMessage>
                                {errors.address?.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl id="message">
                            <FormLabel fontSize="lg">Message</FormLabel>
                            <Textarea
                                {...register('message')}
                                fontSize="lg"
                                placeholder="Enter your message" />
                        </FormControl>
                    </VStack>

                    <Button
                        mt={6}
                        colorScheme="teal"
                        type="submit"
                        width="full"
                        fontSize="lg"
                        disabled={!isValid}
                    >
                        Submit
                    </Button>

                </form>) : (
                        <Box mt={6} textAlign="center">
                            <Text fontSize="lg">
                                Please{' '}
                                <Link color="teal.500" href="/login">
                                    log in
                                </Link>{' '}
                                or{' '}
                                <Link color="teal.500" href="/register">
                                    register
                                </Link>{' '}
                                to book a service.
                            </Text>
                        </Box>
                )}

            </Box>
        </Flex>

    )
}
