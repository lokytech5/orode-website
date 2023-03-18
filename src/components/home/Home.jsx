import React from 'react'
import {
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Card,
    GridItem,
    useBreakpointValue,
    HStack,
    Grid,
} from '@chakra-ui/react';

import HomeList from './HomeList';
export default function Home() {
    const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
    const imageSize = useBreakpointValue({ base: '100%', md: '300px', lg: '30%' });


    const imageWidth = useBreakpointValue({
        base: '100%',
        lg: '100%',
    });




    return (
        <div>
            <Flex
                w="100%"
                p={4}
                pt="16"
                direction={flexDirection}
                alignItems={{ base: 'center', md: 'flex-start' }}
                justifyContent='center'
            >
                <Box mr={{ base: 0, md: "36" }} textAlign={{ base: 'center', md: 'left' }}>
                    <Heading as="h1" mb={10} mt={10} fontWeight="extrabold" fontSize={'7xl'} pt="16" textAlign="center">
                        MontionPic
                    </Heading>
                    <Text mb={10} fontWeight="bold" fontSize={'2xl'} textAlign="center">Discover the art of photography with Montionpic</Text>
                    <Box textAlign="center">
                        <Button mb={{ base: 4, md: 0 }}
                            size="lg"
                            fontSize="lg"
                            fontWeight="extrabold"
                            borderRadius="full"
                        >Explore</Button>
                    </Box>
                </Box>
                <Image
                    src={require('../../assets/img/screen.webp')}
                    alt="Placeholder for image"
                    boxSize={imageSize}
                    width={imageWidth}
                    objectFit="cover"
                />
            </Flex>
            <HomeList />




        </div>
    )
}
