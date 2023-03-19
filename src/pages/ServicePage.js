import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import Service from '../components/service/Service'

export default function ServicePage() {
  const toast = useToast();
  const navigate = useNavigate();

  //*Handling form submission events to backend services using postRequest
  const addServiceHandler = async (serviceData) => {
    try {
      const response = await axios.post('https://api-backend-here', serviceData);
      if (response.status === 200 || response.status === 201) {
        console.log('Form data successfully sent to the backend:', response.data);
        // navigate('/dasboard')
        toast({
          title: 'Success!',
          description: 'Form data successfully sent to the backend.',
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

  }
  return (
    <Service
      onAddService={addServiceHandler} />
  )
}
