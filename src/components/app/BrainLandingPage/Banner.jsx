"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Img,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SeoLandingPageBanner() {
  const color = useColorModeValue("foreground", "white");

  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      color={"white"}
      bgImage="url('/bannerrgb.jpg')"
      bgSize="cover"
      bgPosition={{ base: "-535px 146px", md: "center" }}
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor="transparent"
        backgroundImage="radial-gradient(at top left, #05026C59 0%, #A629F200 49%)"
        opacity={0.79}
        transition="background 0.3s, border-radius 0.3s, opacity 0.3s"
      />
      <Container
        maxW={"1340px"}
        p={0}
        minH="85vh"
        display={"flex"}
        ml={"auto"}
        mr={"auto"}
        pos={"relative"}
        alignItems={"center"}
        flexBasis={"auto"}
        flexGrow={1}
        flexShrink={"1"}
        justifyContent={"flex-start"}
      >
        <Box
          width={{ xl: "50%", lg: "50%", base: "100%" }}
          // mt={{ md: "40px", sm: "40px", base: "25px" }}
        >
          <Flex flexDir={"column"} p={"1em"} gap={"20px"}>
            <Text color={"#FF1415"} fontSize={"16px"} fontWeight={"700"}>
              Welcome to YouSEO
            </Text>
            <Heading
              as={"h2"}
              fontSize={{ xl: "64px", lg: "42px", base: "42px", md: "42px" }}
              lineHeight={{ xl: "75px", base: "36px", md: "53px" }}
              fontWeight={"900"}
              letterSpacing={"-2%"}
              color={"white"}
            >
              The Best SEO
              <br />
              For Your Website
            </Heading>
            <Text
              fontSize={{ xl: "17px", lg: "17px", base: "14px" }}
              lineHeight={{ xl: "30px", lg: "30px", base: "26px" }}
              fontWeight={"500"}
              color={"#DADADA"}
            >
              We built effective strategies to help you reach customers and
              prospect across the entire web and Nunc non bibendum purus.
              Integer in metus at erat luctus.
            </Text>
            <Button
              sx={{
                background: "linear-gradient(140deg, #FF6E00, #A629F2)",
                color: "white",
                border: "none",
                padding: "15px 30px",
                borderRadius: "150px",
                cursor: "pointer",
                height: "52px",
                boxShadow:
                  "0px 8px 18px -3px rgba(153.99999999999997, 0.9999999999999964, 255, 0.32)",
                transition: "background 0.3s ease",
                _hover: {
                  background: "linear-gradient(260deg, #FF4094, #A629F2)",
                },
              }}
              w={"35%"}
            >
              Get Started
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
