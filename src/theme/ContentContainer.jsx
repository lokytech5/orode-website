import React from 'react'
import { Box, useColorModeValue, useTheme } from '@chakra-ui/react';

export default function ContentContainer({ children }) {

    const theme = useTheme();
    console.log('Theme:', theme);

    const bgColor = useColorModeValue(theme.colors.background.light, theme.colors.background.dark);
    const color = useColorModeValue(theme.colors.text.light.dark, theme.colors.text.dark.dark);

    return (
        <>

            <Box
                w="100%"
                minH="100vh"
                pt="0"
                px={{ base: '0', md: '0' }}
                bg={bgColor}
                color={color}
            >
                {children}
            </Box>


        </>
    )
}
