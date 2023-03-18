import React from 'react'
import { Grid, Card, GridItem, Flex, Image, Heading, useBreakpointValue } from '@chakra-ui/react';

import { animated } from 'react-spring';
import { usePhotoAnimation } from '../../animation/photoAnimation';


export default function HomeList() {

    const imageDetails = [
        {
            photoUrl: 'https://img.freepik.com/free-photo/coffee-rose-with-petals-valentines-day_23-2148389550.jpg',
            text: 'wedding',
        },
        {
            photoUrl: 'https://img.freepik.com/free-photo/coffee-rose-with-petals-valentines-day_23-2148389550.jpg',
            text: 'event',
        },
        {
            photoUrl: 'https://img.freepik.com/free-photo/coffee-rose-with-petals-valentines-day_23-2148389550.jpg',
            text: 'event',
        },
        {
            photoUrl: 'https://img.freepik.com/free-photo/coffee-rose-with-petals-valentines-day_23-2148389550.jpg',
            text: 'wedding',
        },
        {
            photoUrl: 'https://img.freepik.com/free-photo/coffee-rose-with-petals-valentines-day_23-2148389550.jpg',
            text: 'event',
        },
        {
            photoUrl: 'https://img.freepik.com/free-photo/coffee-rose-with-petals-valentines-day_23-2148389550.jpg',
            text: 'event',
        }
    ]
    const cardWidth = useBreakpointValue({
        base: '100%',
        sm: '300px',
    });

    const trailAnimation = usePhotoAnimation(imageDetails.length);
    const templateColumns = useBreakpointValue({
        base: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(3, 1fr)',
    });


    return (
        <Flex justifyContent="center" alignItems="center" minHeight="100vh">


            <Grid
                templateColumns={templateColumns}
                gap={8}
                p={6}
                pt={20}
                maxWidth="1200px"
                width="100%"
            >
                {trailAnimation.map((props, index) => {
                    const imgDetail = imageDetails[index];
                    return (
                        <GridItem key={index}>
                            <animated.div style={props}>
                                <Card
                                    width={cardWidth}
                                    maxW="md"
                                    borderWidth="1px"
                                    borderRadius="lg"
                                    overflow="hidden"
                                    boxShadow="md"
                                >

                                    <Flex justifyContent="center" alignItems="center">

                                        <Image src={imgDetail.photoUrl}
                                            alt={imgDetail.text}
                                            width="100%"
                                            height="300px"
                                            objectFit="cover" />
                                    </Flex>

                                    <Flex p={6} justifyContent="center" alignItems="center">
                                        <Heading as="h4" size="md">
                                            {imgDetail.text}
                                        </Heading>
                                    </Flex>
                                </Card>
                            </animated.div>
                        </GridItem>
                    );
                })}
            </Grid>
        </Flex>
    )
}
