import React from 'react'
import { Box, useTheme, VStack, Grid, HStack, Flex, Text, IconButton, Link, Spacer, useColorModeValue } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    const theme = useTheme();
    const bg = useColorModeValue(theme.colors.background.light, theme.colors.background.dark);
    const color = useColorModeValue(theme.colors.text.light.dark, theme.colors.text.dark.dark);
    const primaryColor = theme.colors.primary[500];
    const accentColor = theme.colors.accent[500];
    return (
        <Box as="footer" bg={bg} color={color} py={6}>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6} maxW="6xl" mx="auto" px={{ base: 4, md: 8 }}>
                <VStack align="start" spacing={2}>
                    <Text fontWeight="bold" color={accentColor}>Quick Links</Text>
                    <Link href="/services" color={primaryColor}>Book a Session</Link>
                    <Link href="/gallery" color={primaryColor}>Gallery</Link>
                    <Link href="/about-us" color={primaryColor}>About Us</Link>
                </VStack>
                <VStack align="start" spacing={2}>
                    <Text fontWeight="bold" color={accentColor}>Contact Us</Text>
                    <Text>Email: info@photography.com</Text>
                    <Text>Phone: +1 (234) 567-8901</Text>
                </VStack>
                <VStack spacing={2} align="start">
                    <HStack spacing={4}>
                        <Link href="https://www.facebook.com" isExternal>
                            <IconButton
                                icon={<FaFacebook />}
                                aria-label="Facebook"
                                size="lg"
                                variant="ghost"
                                colorScheme="facebook"
                                color={primaryColor}
                            />
                        </Link>
                        <Link href="https://www.instagram.com" isExternal>
                            <IconButton
                                icon={<FaInstagram />}
                                aria-label="Instagram"
                                size="lg"
                                variant="ghost"
                                color={primaryColor}
                            />
                        </Link>
                        <Link href="https://api.whatsapp.com/send?phone=1234567890" isExternal>
                            <IconButton
                                icon={<FaWhatsapp />}
                                aria-label="Whatsapp"
                                size="lg"
                                variant="ghost"
                                color={primaryColor}
                            />
                        </Link>
                    </HStack>
                </VStack>
            </Grid>
            <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" maxW="6xl" mx="auto" px={{ base: 4, md: 8 }} mt={8}>
                <Text fontSize="sm" mb={{ base: 4, md: 0 }}>
                    © 2023 Photography Company Name. All Rights Reserved.
                </Text>
                <Spacer />
                <Text fontSize="sm" mb={{ base: 4, md: 0 }} color={accentColor}>
                    Developed by Lokosman
                </Text>
            </Flex>
        </Box>
    );

}
