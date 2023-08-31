import React from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";

const StatCard = ({ title, value,Image }) => {
  return (
    <Flex
      justifyContent={'center'}
      alignContent={'center'}
      flexDir={'column'}
      gap={'10px'}
      p="24px"
      bg="white"
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
      maxW={{base:'100%',md:'100%',lg:'48%',xxl:'284px',xxxl:'370px'}}
      w={'100%'}
      minH={'250px'}
      _hover={{border:'3px solid #4282C4'}}
      // bgGradient="linear-gradient(to right, #20577a, #1A365D)"
      zIndex={{base:'0',md:'0',lg:'9999'}}
      cursor={'pointer'}
    >
        <Img src={Image} w='80px' m='auto'  />
      <Text fontSize="30px" fontWeight="bold" color={'white'}>
        {value}
      </Text>
      <Text fontSize="18px" color="white">
        {title}
      </Text>
    </Flex>
  );
};

export default StatCard;
