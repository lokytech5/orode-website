import React, { useState } from 'react'
import { useToast, Text } from '@chakra-ui/react';
import LoginInUser from '../components/user/LogInUser'
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default function LoginUserPage() {
    const toast = useToast();
    const [formData, setFormData] = useState(null);


    const addLoginHandler = async (loginData) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth', loginData);
            if (response.status === 200 || response.status === 201) {
                // console.log('Booking Successfully:', response.data);
                console.log("Token stored in local storage:", localStorage.getItem('token'));
                // const decodedToken = jwt_decode(token);
                // const username = decodedToken.username;
                setFormData(loginData);
                const token = response.data.token;
                localStorage.setItem('token', token);
                // Show success toast

                // console.log("Updated formData:", { ...loginData, username });
                toast({
                    title: 'Success!',
                    description: `Logged in successfully as ${response.data.username}`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
                return true;
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
                return false;
            }

        } catch (error) {
            console.error('Error while sending form data to the backend:', error);
            // Handle error, e.g., show an error message
            if (error.response.status === 400) {
                toast({
                    title: 'Error!',
                    description: 'Invalid username or password.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                toast({
                    title: 'Error!',
                    description: 'Error while sending form data to the backend.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            }
            console.log(loginData);
            return false;
        }
    }

    return (
        <>

            <LoginInUser
                onAddLogin={addLoginHandler} />

            {formData && (
                <Text mt={6} textAlign="center" fontSize="lg">
                    {/* Log formData state before rendering */}
                    {console.log("Rendering formData:", formData)}
                </Text>
            )}
        </>

    )
}
