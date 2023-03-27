import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Person from '../../utility/data'
import HomeList from './HomeList';
import Footer from '../../shared/footer/Footer';
import { motion } from 'framer-motion';
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import './Home.css'
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

const imageDetails = [
    {
        src: require('../../assets/img/wedding.jpg'),
        alt: 'Image 1',
        text: 'wedding',
        title: 'Wedding',
    },
    {
        src: require('../../assets/img/traditional.jpg'),
        alt: 'Image 2',
        text: 'Traditional Wedding',
        title: 'Traditional Wedding',
    },
    {
        src: require('../../assets/img/naming.jpg'),
        alt: 'Image 3',
        text: 'wedding',
        title: 'Naming Ceremony ',
    },
    {
        src: require('../../assets/img/event.jpg'),
        alt: 'Image 4',
        text: 'wedding',
        title: 'Event Photo',
    },
    {
        src: require('../../assets/img/portrail.jpg'),
        alt: 'Image 5',
        text: 'wedding',
        title: 'Portrails',
    },
    {
        src: require('../../assets/img/brand.jpg'),
        alt: 'Image 6',
        text: 'wedding',
        title: 'Brand Photo',
    },
];

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

export default function Home() {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = Person[index]

    const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
    const imageSize = useBreakpointValue({ base: '100%', md: '300px', lg: '30%' });

    const navigate = useNavigate();



    const imageWidth = useBreakpointValue({
        base: '100%',
        lg: '100%',
    });

    const checkNumber = (number) => {
        if (number > Person.length - 1) {
            return 0;
        }

        if (number < 0) {
            return Person.length - 1;
        }
        return number;
    }

    const leftClickHandler = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    const rightClickHandler = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const randomClickHandler = () => {
        let randomNumber = Math.floor(Math.random() * Person.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber))
    };




    return (
        <>

            <Box
                pos="relative"
                bgImage={`
                      linear-gradient(
                       to bottom,
                       rgba(0, 0, 0, 0.7) 0%,
                       rgba(0, 0, 0, 0.7) 100%
                    ),
                   url(${require('../../assets/img/screen.webp')})
                `}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                height="100%"
                width="100%"
                zIndex="-1"
            >

                <Flex
                    w="100%"
                    p={4}
                    direction={flexDirection}
                    alignItems={{ base: 'center', md: 'flex-start' }}
                    justifyContent='center'
                    position="relative"
                >
                    <Image
                        src={require('../../assets/img/screen.webp')}
                        alt="Placeholder for image"
                        boxSize={imageSize}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        position="absolute"
                        zIndex="-1"
                    />
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        bgColor="rgba(0, 0, 0, 0.2)"
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
                            Welcome to MontionPic
                        </MotionHeading>
                        <MotionText
                            mb={10}
                            fontWeight="bold"
                            fontSize={'2xl'}
                            initial={{ opacity: 1, y: -50 }}
                            textAlign="center"
                            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }}
                            color="white"
                        >
                            where creativity meets inspiration and discover the art of photography
                        </MotionText>


                        <Box textAlign="center">


                            <Link to="/gallery">
                                <Button mb={{ base: 4, md: 0 }}
                                    size="lg"
                                    fontSize="lg"
                                    fontWeight="extrabold"
                                    borderRadius="full"
                                    type='button'
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

            <Box display="flex" justifyContent="center" alignItems="center" height="70vh">

                <Card
                    maxW={{ base: '95%', md: '80%', pt: '5%' }}
                    p={5} m={5}
                    paddingTop={{ base: 5, md: 5 }}
                    borderRadius="0.25rem"
                    transition="all 0.3s linear"
                    textAlign="center">
                    <article className='review'>
                        <div className='img-container'>
                            <img src={image} alt={name} className='person-img' />
                            <span className='quote-icons'>
                                <FaQuoteRight />
                            </span>
                        </div>
                        <h4 className='author'>{name}</h4>
                        <p className='job'>{job}</p>
                        <p className='info'>{text}</p>
                        <div className='button-container'>
                            <button className='prev-btn' onClick={leftClickHandler}>
                                <FaChevronLeft />
                            </button>
                            <button className='next-btn' onClick={rightClickHandler}>
                                <FaChevronRight />
                            </button>
                        </div>
                        <Button onClick={randomClickHandler}> Surpise me</Button>
                    </article>
                </Card>
            </Box>

            <Footer />



        </>
    )
}
