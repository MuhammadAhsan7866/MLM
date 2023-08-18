import { Box, Link, Image, Button, Container, Flex } from "@chakra-ui/react";
import React from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <>
      <Box
        py={{ base: "6px", md: "11px" }}
        bg="transparent"
        position={"relative"}
      >
        <Container maxW={"1675px"} px="20px">
          <Flex justifyContent="space-between" alignItems="center" gap="20px">
            <Flex>
              <Link
                href="/"
                maxW={{ sm: "200px", base: "200px" }}
                ml={{ sm: "16px", base: "15px" }}
                textDecoration="none !important"
                position="relative"
                mt={{ base: "6px", md: "2px" }}
              >
                <Image
                  // h={{ base: "20px", md: "28px" }}
                  w={{ base: "400px", md: "400px" }}
                  src="/bit-logo.png"
                  alt="logo"
                />
              </Link>
            </Flex>

            <Flex alignItems={"center"} display={{ lg: "flex", base: "none" }}>
              <Flex
                w="100%"
                justifyContent={"space-between"}
                mr="43px"
                gap="65px"
              >
                <Box pb="4px" minWidth={"3px"}>
                  <Link
                    href="/Home"
                    color="#7EFCFC"
                    _hover={{ textDecoration: "none" }}
                    fontSize="16px"
                    fontWeight="600"
                    lineHeight={"24px"}
                  >
                    Home
                  </Link>
                </Box>
                <Box
                  pb="4px"
                  color="White"
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight={"24px"}
                >
                  <Link
                    href="/InvestmentPlans"
                    _hover={{ textDecoration: "none", color: "#7EFCFC" }}
                  >
                    Invesment Plans
                  </Link>
                </Box>
                <Box
                  pb="4px"
                  color="White"
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight={"24px"}
                >
                  <Link
                    href="/About"
                    _hover={{ textDecoration: "none", color: "#7EFCFC" }}
                  >
                    About
                  </Link>
                </Box>
                <Box
                  pb="4px"
                  color="White"
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight={"24px"}
                >
                  <Link
                    href="/Blog"
                    _hover={{ textDecoration: "none", color: "#7EFCFC" }}
                  >
                    Blog
                  </Link>
                </Box>
                <Box
                  pb="4px"
                  color="White"
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight={"24px"}
                >
                  <Link
                    href="/Form"
                    _hover={{ textDecoration: "none", color: "#7EFCFC" }}
                  >
                    Contact
                  </Link>
                </Box>
              </Flex>
            </Flex>
            <Box gap="20px" display={{ lg: "flex", base: "none" }} alignItems={'center'}>
              <Link
                href="/LoginPage"
                _hover={{ textDecoration: "none", color: "#7EFCFC" }}
                color={'white'}
                fontSize={'16px'}
                fontWeight={'bold'}
              >
                Login
              </Link>
              <Button
                bg={"#1ba8c6"}
                color={"white"}
                colorScheme="#1f3ac1"
                _hover={{ bg: "black", color: "white" }}
                px={"24px"}
                href='/SignupPage'
              >
                Sign up
              </Button>
            </Box>

            <Box display={{ lg: "none", base: "block" }}>
              <MobileMenu />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Header;
