import React from 'react'
import { Link } from 'react-router-dom';
import HomeList from './HomeList';
import Footer from '../../shared/footer/Footer';
import { motion } from 'framer-motion';
import { imageDetails, testimonials } from '../../utility/data';
import './Home.css'
import {
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    VStack,
    SimpleGrid,
    useTheme,
    Avatar,
    useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react';



const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function Home() {
    const theme = useTheme();

    const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
    const imageSize = useBreakpointValue({ base: '100%', md: '300px', lg: '30%' });

    const bg = useColorModeValue(theme.colors.background.light, theme.colors.background.dark);
    const color = useColorModeValue(theme.colors.text.light.dark, theme.colors.text.dark.dark);
    const textColor = useColorModeValue('text.light.medium', 'text.dark.medium');

    const primaryColor = theme.colors.primary[500];
    const accentColor = theme.colors.accent[500];

    const textGradient = `linear-gradient(to right, ${primaryColor}, ${accentColor})`;
    const quoteIconSize = useBreakpointValue({ base: '2xl', md: '3xl' });





    return (
        <>

            <Box
                pos="relative"
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                height="110%"
                bgImage={require('../../assets/img/photo2.webp')}
                width="100%"
                zIndex="1"
            >

                <Flex
                    w="100%"
                    p={4}
                    direction={flexDirection}
                    alignItems={{ base: 'center', md: 'flex-start' }}
                    justifyContent='center'
                    position="relative"
                >

                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}

                    />
                    <Box mr={{ base: 0, md: "36" }} textAlign={{ base: 'center', md: 'left' }}>
                        <MotionHeading
                            as="h1"
                            mb={10}
                            mt={10}
                            fontWeight="extrabold"
                            fontSize={'7xl'}
                            textAlign="center"
                            pt="16"
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
                            color="white"

                        >
                            Welcome to AfricanaChild
                        </MotionHeading>
                        <MotionText
                            mb={10}
                            fontWeight="bold"
                            fontSize={'2xl'}
                            initial={{ opacity: 1, y: -50 }}
                            textAlign="center"
                            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }}
                            color={accentColor}
                        >
                            where creativity meets inspiration with Professional Photography
                        </MotionText>


                        <Box textAlign="center">


                            <Link to="/gallery">
                                <Button mb={{ base: 4, md: 0 }}
                                    size="lg"
                                    fontSize="lg"
                                    fontWeight="extrabold"
                                    borderRadius="full"
                                    type='button'
                                    bg={primaryColor}
                                    color={color}
                                    _hover={{ bg: accentColor }}
                                >Explore</Button>
                            </Link>

                        </Box>
                    </Box>
                </Flex>
            </Box>

            <Text
                textAlign="center"
                fontFamily="'Playfair Display', serif" // Use the imported Google Font
                fontWeight="700"
                fontSize={{ base: '3xl', md: '5xl' }} // Adjust the font size for different screen sizes
                mt={12}
                mb={6}
                letterSpacing="1px" // Add some letter spacing for better readability
            >
                Creative Collections
            </Text>

            <HomeList images={imageDetails} />

            <Box as="section" bg={bg} color={color} py={12} position="relative">
                <Box
                    position="absolute"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                    opacity={0.05}
                    bgImage="url('https://source.unsplash.com/random')"
                    bgSize="cover"
                    bgPosition="center"
                    zIndex={-1}
                />
                <VStack align="center" spacing={4} mb={10}>
                    <Text fontSize="3xl" fontWeight="bold" color={primaryColor}>
                        Testimonials
                    </Text>
                    <Text fontSize="lg" textAlign="center" maxW="2xl">
                        Here's what our clients have to say about our photography services.
                    </Text>
                </VStack>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} maxW="6xl" mx="auto" px={{ base: 4, md: 8 }}>
                    {testimonials.map((testimonial, index) => (
                        <Flex key={index} direction="column" alignItems="center" boxShadow="lg" borderRadius="lg" p={6}
                            bg={(theme.colors.background.light, theme.colors.background.dark)}
                            color={(theme.colors.text.light.dark, theme.colors.text.dark.dark)}
                        >

                            <Text fontSize="md" textAlign="center" fontStyle="italic" mb={6}>
                                {testimonial.testimonial}
                            </Text>
                            <Avatar src={testimonial.avatarUrl} alt={testimonial.name} mb={4} />
                            <Text fontSize="lg" fontWeight="bold" mb={1}>
                                {testimonial.name}
                            </Text>
                            <Text fontSize="sm" fontStyle="italic" mb={4}>
                                {testimonial.role}
                            </Text>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Box>
            <Footer />

        </>
    )
}
