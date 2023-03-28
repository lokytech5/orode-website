import React from 'react'
import { extendTheme, ThemeConfig } from "@chakra-ui/react";


const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const AppTheme = extendTheme({
    config,
    colors: {
        primary: {
            500: '#2C3E50',
        },

        secondary: {
            500: '#3498DB',
        },

        accent: {
            500: '#F39C12',
        },

        background: {
            light: '#F2F2F2',
            dark: '#1A202C',
        },

        text: {
            light: {
                dark: '#333333',
                medium: '#666666',
            },

            dark: {
                dark: '#F2F2F2',
                medium: '#A0AEC0',
            },
        },
    },

});

export default AppTheme;
