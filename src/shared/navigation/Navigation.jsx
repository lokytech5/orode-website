import React, { useState } from 'react'
import {
    Box,
    Flex,
    Link,
    Spacer,
    Text,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navigation.css'
import ColorModeSwitch from '../../theme/ColorModeSwitch';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="0.5rem"
            bg="teal.500"
            color="white"
        >
            <Flex align="center" mr={5}>
                <Link
                    as={NavLink}
                    to='/'
                    px={2}>
                    <Text fontSize="xl" fontWeight="bold">
                        Photography
                    </Text>
                </Link>
                <ColorModeSwitch />
            </Flex>
            <Spacer />
            <Box display={{ base: 'none', md: 'block' }}>
                <Flex>
                    <Link as={NavLink} to="/dasboard" px={2}>
                        Dashboard
                    </Link>
                    <Link as={NavLink} to="/catalog" px={2}>
                        Catalog
                    </Link>
                    <Link as={NavLink} to="/services" px={2}>
                        Services
                    </Link>
                    <Link as={NavLink} to="/login" px={2}>
                        Login
                    </Link>
                    <Link as={NavLink} to="/register" px={2}>
                        Register
                    </Link>
                    <Link as={NavLink} to="/about-us" px={2}>
                        About Us
                    </Link>
                </Flex>
            </Box>
            <Box display={{ base: 'block', md: 'none' }}>

                <IconButton
                    aria-label="Options"
                    icon={<GiHamburgerMenu />}
                    variant="outline"
                    backgroundColor="transparent"
                    _hover={{ bg: 'teal.600' }}
                    onClick={handleToggle}
                />
                <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                    <DrawerOverlay>
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Menu</DrawerHeader>
                            <DrawerBody>
                                <VStack spacing={4} align="stretch">
                                    <Link as={NavLink} to="/" onClick={onClose}>
                                        Home
                                    </Link>
                                    <Link as={NavLink} to="/catalog" onClick={onClose}>
                                        Gallrey
                                    </Link>
                                    <Link as={NavLink} to="/services" onClick={onClose}>
                                        Services
                                    </Link>
                                    <Link as={NavLink} to="/login" onClick={onClose}>
                                        Login
                                    </Link>
                                    <Link as={NavLink} to="/about-us" onClick={onClose}>
                                        About Us
                                    </Link>
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </Box>
        </Flex>
    )
}
