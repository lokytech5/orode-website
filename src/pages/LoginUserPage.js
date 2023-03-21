import React, { useState } from 'react'
import { useToast, Text } from '@chakra-ui/react';
import LoginInUser from '../components/user/LogInUser'
import axios from 'axios';

export default function LoginUserPage() {
    const toast = useToast();
    const [formData, setFormData] = useState(null);


    const addLoginHandler = async (loginData) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth', loginData);
            if (response.status === 200 || response.status === 201) {
                console.log('Booking Successfully:', response.data);
                setFormData(loginData);
                // Show success toast
                toast({
                    title: 'Success!',
                    description: 'Logged in successfully.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                console.error('Error while sending form data to the backend:', response.status, response.statusText);
                // Handle error, e.g., show an error message
                toast({
                    title: 'Error!',
                    description: 'Error while sending form data to the backend.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            }

        } catch (error) {
            console.error('Error while sending form data to the backend:', error);
            // Handle error, e.g., show an error message
            toast({
                title: 'Error!',
                description: 'Error while sending form data to the backend.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
        console.log(loginData);
    }

    return (
        <>

            <LoginInUser
                onAddLogin={addLoginHandler} />

            {formData && (
                <Text mt={6} textAlign="center" fontSize="lg">
                    Logged in as: {formData.email}
                </Text>
            )}
        </>

    )
}
