import {
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Service from '../components/service/Service'

export default function ServicePage() {
  const toast = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/dasboard');
  }

  //*Handling form submission events to backend services using postRequest
  const addServiceHandler = async (serviceData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/services', serviceData);
      if (response.status === 200 || response.status === 201) {
        console.log('Booking Successfully:', response.data);
        setFormData(serviceData);
        setIsModalOpen(true);
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
    <>
      <Service
        onAddService={addServiceHandler} />

      {formData && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Your booking has been successfully confirmed</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Display the submitted data here */}
              <ul>
                {Object.entries(formData).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key[0].toUpperCase() + key.slice(1)}:</strong> {value}
                  </li>
                ))}
              </ul>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={closeModal}>
                Close
              </Button>

            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

    </>
  )
}
