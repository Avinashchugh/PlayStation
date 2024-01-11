import { HStack } from '@chakra-ui/react';
import Logo from '../assets/download.webp'
import SwitchMode from './SwitchMode';
import SearchInput from './SearchInput';
const NavBar = () => {
  return (
    <div>
        <HStack justifyContent='space-between' padding='10px'>
            <img src={Logo} width={50} />
            <SearchInput/>
            <SwitchMode/>
        </HStack>
    </div>
  )
}

export default NavBar
