import React from 'react'
import { HStack, Switch, Text, useColorMode, IconButton } from '@chakra-ui/react'
import { BsSun } from 'react-icons/bs'
import { BsMoonFill } from 'react-icons/bs'
import { HiMoon } from 'react-icons/hi'


export default function ColorModeSwitch() {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <IconButton
            aria-label='Toggle button'
            icon={colorMode === 'dark' ? <BsMoonFill /> : <BsSun />}
            onClick={toggleColorMode}
        />
    )
}
