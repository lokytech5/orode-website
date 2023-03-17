import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import React from 'react'


const config = {
    initialColorMode: 'dark'
};

const AppTheme = extendTheme({ config });

export default AppTheme;
