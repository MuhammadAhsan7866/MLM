import {
  Box,
  Text,
  Image,
  Flex,
  Input,
  Button,
  Heading,
  Stack,
  Link,
} from "@chakra-ui/react";
import React from "react";

const Footers = () => {
  return (
    <Box bg="#2f0d6c" pt="47px">
      <Box maxW={"7xl"} mx="auto" px="20px" py="20px">
        <Flex
          justifyContent={"space-between"}
          gap={{ base: "20px", md: "100px" }}
          flexDirection={{ base: "column", md: "row" }}
          mb="32px"
        >
          <Box w={{ base: "100%", md: "50%" }}>
          <Image
                  // h={{ base: "20px", md: "28px" }}
                  w={{ base: "400px", md: "250px" }}
                  src="/bit-logo.png"
                  alt="logo"
                />
            <Text
              textAlign={{ base: "center", md: "left" }}
              mb="20px"
              color="white"
              fontSize="14px"
              fontWeight="300"
              lineHeight={"28px"}
              maxW="580px"
            >
              Are you looking for professional advice for your new business. Are
              you looking for professional advice for your new business. Are you
              looking for professional advice for your new business.
            </Text>
            <Box
              maxW={"413px"}
              w="100%"
              py={{ base: "5px", md: "11px" }}
              pl="14px"
              pr={{ base: "7px", md: "14px" }}
              bg="#FFFFFF"
              borderRadius={"2px"}
              display="flex"
              justifyContent={"space-between"}
            >
              <Input
                border="none"
                _focusVisible={{ border: "none" }}
                px="0px"
                placeholder="your@address.com"
              />
              <Button
                bg="#1ba8c6"
                colorScheme={"#1ba8c6"}
                color="#FFFFFF"
                fontSize="10px"
                fontWeight="400"
                lineHeight={"150%"}
                py="8px"
                px={{ base: "20px", md: "36px", lg: "56px" }}
                borderRadius={"3px"}
              >
                Submit
              </Button>
            </Box>
          </Box>
          <Box w={{ base: "100%", md: "50%" }}>
            <Stack align={"flex-start"}>
              <Heading color={"#1BA8C6"} fontSize={"18px"} mb='15px'>
                Services Link
              </Heading>
              <Box as="a" href={"#"} color={'white'}>
              Home
              </Box>
              <Box as="a" href={"#"} color={'white'}>
               Investment Plans
              </Box>
              <Box as="a" href={"#"} color={'white'}>
               About
              </Box>
                <Box as="a" href={"#"} color={'white'}>
               Blog
              </Box>
                <Box as="a" href={"#"} color={'white'}>
             Contact Us
              </Box>
            </Stack>
          </Box>
          <Box w={{ base: "100%", md: "50%" }}>
            <Text
              mb="20px"
              color="#1BA8C6"
              fontSize="16px"
              fontWeight="700"
              lineHeight={"20px"}
              textAlign={{ base: "center", md: "left" }}
            >
              CALL US
            </Text>
            <Flex
              alignItems={"center"}
              gap={{ base: "10px", md: "26px" }}
              flexDirection={{ base: "column", md: "row" }}
              mb="20px"
            >
              <Text
                color="white"
                fontSize="14px"
                fontWeight="300"
                lineHeight={"28px"}
              >
                +44 330 022 5700
              </Text>
              <Text
                color="white"
                fontSize="14px"
                fontWeight="300"
                lineHeight={"28px"}
              >
                Amet minim mollit non deserunt
              </Text>
            </Flex>
            <Text
              mb="20px"
              color="#1BA8C6"
              fontSize="16px"
              fontWeight="700"
              lineHeight={"20px"}
              textAlign={{ base: "center", md: "left" }}
            >
              Location & Language
            </Text>
            <Flex
              alignItems={"center"}
              gap="10px"
              justifyContent={{ base: "center", md: "left" }}
            >
              <Image alt="img" src="/ukflags.svg"></Image>
              <Text
                color="#8F8F8F"
                fontSize="14px"
                fontWeight="300"
                lineHeight={"28px"}
              >
                English
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footers;
