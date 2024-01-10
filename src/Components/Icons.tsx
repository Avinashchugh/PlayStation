import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { platform } from "../hooks/UseGames";
import { Icon,HStack } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
interface props {
  platforms: platform[];
}
const Icons = ({ platforms }: props) => {
  const iconMap:{[key: string]:IconType} = {
    pc: FaWindows,
    playstation:FaPlaystation,
    xbox:FaXbox,
    Nintendo: SiNintendo,
    mac:FaApple,
    linux:FaLinux,
    android:FaAndroid,
    ios:MdPhoneIphone,
    web: BsGlobe
  };
  return (
    <div>
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={'gray.500'}></Icon>
      ))}
      </HStack>
    </div>
  );
};

export default Icons;
