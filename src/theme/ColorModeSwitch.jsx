import React from 'react'
import { useColorMode, IconButton } from '@chakra-ui/react'
import { BsSun } from 'react-icons/bs'
import { BsMoonFill } from 'react-icons/bs'


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
