import React from 'react';
import { HStack } from '@chakra-ui/react';
import Logo from '../assets/download.webp'
import SwitchMode from './SwitchMode';
const NavBar = () => {
  return (
    <div>
        <HStack justifyContent='space-between' padding='10px' borderRadius={8}>
            <img src={Logo} width={50} />
            <SwitchMode/>
        </HStack>
    </div>
  )
}

export default NavBar
