import React from 'react';
import { HStack } from '@chakra-ui/react';
import Logo from '../assets/logo.webp'
import SwitchMode from './SwitchMode';
const NavBar = () => {
  return (
    <div>
        <HStack justifyContent='space-between' padding='10px'>
            <img src={Logo} width={60}/>
            <SwitchMode/>
        </HStack>
    </div>
  )
}

export default NavBar
