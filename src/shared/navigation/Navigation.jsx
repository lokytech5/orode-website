import React from 'react'
import {
    Box,
    Flex,
    Link,
    Spacer,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navigation.css'
import ColorModeSwitch from '../../theme/ColorModeSwitch';

export default function Navigation() {
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
                    <Link as={NavLink} to="/about-us" px={2}>
                        About Us
                    </Link>
                </Flex>
            </Box>
            <Box display={{ base: 'block', md: 'none' }}>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<GiHamburgerMenu />}
                        variant="outline"
                        backgroundColor="transparent"
                        _hover={{ bg: 'teal.600' }}
                    />
                    <MenuList>
                        <MenuItem as={NavLink} to="/">
                            Home
                        </MenuItem>
                        <MenuItem as={NavLink} to="/catalog">
                            Catalog
                        </MenuItem>
                        <MenuItem as={NavLink} to="/services">
                            Services
                        </MenuItem>
                        <MenuItem as={NavLink} to="/login">
                            Login
                        </MenuItem>
                        <MenuItem as={NavLink} to="/about-us">
                            About Us
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    )
}
