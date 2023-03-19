import React, { useState } from 'react'
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
import { Link } from 'react-router-dom';
import Person from '../../utility/data'
import './Home.css'
import HomeList from './HomeList';
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
export default function Home() {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = Person[index]

    const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
    const imageSize = useBreakpointValue({ base: '100%', md: '300px', lg: '30%' });



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
                        <Link to="/catalog">

                            <Button mb={{ base: 4, md: 0 }}
                                size="lg"
                                fontSize="lg"
                                fontWeight="extrabold"
                                borderRadius="full"
                            >Explore</Button>
                        </Link>
                    </Box>
                </Box>
                <Box>

                    <Image
                        src={require('../../assets/img/screen.webp')}
                        alt="Placeholder for image"
                        boxSize={imageSize}
                        width={imageWidth}
                        objectFit="cover"
                    />
                </Box>
            </Flex>
            <HomeList />
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



        </div>
    )
}
