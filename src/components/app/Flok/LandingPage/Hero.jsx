"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Hero() {
 
  return (
    <Box>
      <Container maxW={"7xl"} bgImage="url('/banner_bg3.png')">
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          pt={{ base: 10, md: 18 }}
            pb={{ base: 10, md: 20 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.5}
              fontWeight={700}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                color={"white"}
                fontFamily={"poppins"}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                fontWeight={"600"}
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "red.400",
                  zIndex: -1,
                }}
              >
                Daily profit
              </Text>
              <br />
              <Text as={"span"} color={"white"} fontFamily={"poppins"}>
                0.4% to 0.7%
              </Text>
            </Heading>
            <Text color={"white"}>
              At our investment platform you have the opportunity to eran daily
              0.4% to 0.7%
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
               bg="#1ba8c6"
               colorScheme="#1ba8c6"
               borderRadius={"0px"}
               rounded={"full"} size={"lg"}
               _hover={{
                 bg: "#240255",
                 color: "white",
               }}
              >
                Get started
              </Button>
              <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
                Know More
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
             
              rounded={"2xl"}
              //   boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={"/banner-img23.svg"}
                
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
