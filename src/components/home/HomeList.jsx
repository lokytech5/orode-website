import React from 'react'
import { keyframes } from '@emotion/react';
import { scaleUp } from '../../animation/photoAnimation';
import {
    Grid,
    useDisclosure,
    Card,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Box,
    GridItem,
    Flex,
    Image,
    Heading,
    useBreakpointValue
} from '@chakra-ui/react';

export default function HomeList({ images = [] }) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = React.useState(null);

    const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });

    const handleImageClick = (image) => {
        setSelectedImage(image);
        onOpen();
    };



    return (
        <>
            <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={10} padding={10}>
                {images.map((image, index) => (
                    <GridItem key={index} onClick={() => handleImageClick(image)}>
                        <Box
                            as="figure"
                            pos="relative"
                            overflow="hidden"
                            borderRadius="md"
                            borderWidth="1px"
                            borderColor="gray.200"
                            cursor="pointer"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                objectFit="cover"
                                width="100%"
                                height="200px"
                                transition="transform 0.3s"
                                _hover={{
                                    animation: `${scaleUp} 0.3s forwards`,
                                }}
                            />
                            <Box p={3}>
                                <Heading as="h3" size="md" isTruncated textAlign='center'>
                                    {image.title}
                                </Heading>
                            </Box>
                        </Box>
                    </GridItem>
                ))}
            </Grid>
            {selectedImage && (
                <Modal isOpen={isOpen} onClose={onClose} size="xl">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <Image src={selectedImage.src} alt={selectedImage.alt} maxW="100%" maxH="80vh" />
                    </ModalContent>
                </Modal>
            )}
        </>
    )
}
