import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {
  Text,
  Button,
  Flex,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Stack,
  useMediaQuery,
  useBreakpointValue,

} from '@chakra-ui/react';

export default function DashBoard(props) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.auth.user.role);

  const fontSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const padding = useBreakpointValue({ base: 1, md: 4 });
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  const handleClickEvent = (dataItem) => {
    if (userRole !== 'admin') {
      setIsModalOpen(true);
      return;
    }
  }

  //*CloseModal
  const closeModal = () => {
    setIsModalOpen(false);
  }

  if (props.isLoading) {
    return (
      <h1>
        Loading ....
        {console.log(props.isLoading)}
      </h1>

    )
  }

  const renderCards = () => {
    return props.dashBoardData.map((dataItem) => (
      <Box
        key={dataItem._id}
        borderWidth={1}
        borderRadius="lg"
        padding={4}
        margin={2}
      >
        <Stack>
          <Text>Name: {dataItem.name}</Text>
          <Text>Email: {dataItem.email}</Text>
          <Text>Phone: {dataItem.phoneNumber}</Text>
          <Text>Service Type: {dataItem.serviceType}</Text>
          <Text>Date: {dataItem.date}</Text>
          <Text>Time: {dataItem.time}</Text>
          <Text>Address: {dataItem.address}</Text>
          <Text>Message: {dataItem.message}</Text>
          <Text>Status: {dataItem.status}</Text>
          <Button
            size={fontSize}
            p={padding}
            colorScheme="blue"
            onClick={() => handleClickEvent(dataItem)}
          >
            Delete
          </Button>
        </Stack>
      </Box>
    ));
  };


  return (
    <>
      {isAuthenticated ? (
        isMobile ? (<Box>{renderCards()}</Box>) : (
          <Box overflowX="auto">
            <Table variant="simple" size={fontSize}>
              <TableCaption placement="top">Dashboard Data</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Service Type</Th>
                  <Th>Date</Th>
                  <Th>Time</Th>
                  <Th>Address</Th>
                  <Th>Message</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {props.dashBoardData.map((dataItem) => (
                  <Tr key={dataItem._id}>
                    <Td>{dataItem.name}</Td>
                    <Td>{dataItem.email}</Td>
                    <Td>{dataItem.phoneNumber}</Td>
                    <Td>{dataItem.serviceType}</Td>
                    <Td>{dataItem.date}</Td>
                    <Td>{dataItem.time}</Td>
                    <Td>{dataItem.address}</Td>
                    <Td>{dataItem.message}</Td>
                    <Td>{dataItem.status}</Td>
                    <Td>
                      <Button
                        size={fontSize}
                        p={padding}
                        colorScheme="blue"
                        onClick={() => handleClickEvent(dataItem)}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        )
      ) : (
        <Flex
          alignItems="center"
          justifyContent="center"
          minHeight="50vh"
          flexDirection="column"
        >
          <VStack spacing={4} alignItems="center">
            <Text fontSize="2xl" fontWeight="bold">
              Access Restricted
            </Text>
            <Text fontSize="lg">
              Please log in to view the requested content.
            </Text>
            <Button colorScheme="blue" size="lg">
              <Link to="/login">Log In</Link>
            </Button>
          </VStack>
        </Flex>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Restricted Access</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Only admin has the right to perform this action.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
