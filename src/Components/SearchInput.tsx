import { Input,InputGroup,InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
const SearchInput = () => {
  return (
    <div>
    <InputGroup>
    <InputLeftElement children={<BsSearch/>}/>
    <Input borderRadius={20} placeholder='Search games' variant='filled' ></Input>
    </InputGroup>
      
    </div>
  )
}

export default SearchInput
