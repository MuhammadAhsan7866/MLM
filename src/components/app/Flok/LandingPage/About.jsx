import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <>
      <Box py={{ base: 10, md: 20 }}>
        <Container maxW={"8xl"}>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={{ base: "column", md: "column", lg: "row" }}
            p={{ base: "24px", md: "24px" }}
            gap="50px"
          >
            <Box
              w={{ base: "100%", md: "100%", lg: "50%" }}
              animation="scaleAnimation 2s infinite"
              mb={{ base: "24px", md: "24px" }}
            >
              <Img src="/about-img-5.svg" w={"100%"} />
            </Box>
            <Box
              w={{ base: "100%", md: "100%", lg: "50%" }}
              animation="scaleAnimation 2s infinite"
            >
              <Text
                color={"white"}
                fontFamily={"poppins"}
                fontWeight={"bold"}
                fontSize={{ base: "2xl", sm: "4xl", lg: "35px" }}
              >
                Secure investments monthly instant award and Bonus
              </Text>
              <Text color={"white"} mt="15px">
                Replacing a maintains the amount of lines. When replacing a
                selection. help agencies to define their new business objectives
                and then create
              </Text>
              <Flex mt={"24px"} alignItems={"center"} gap={"20px"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg={"#1ba8c6"}
                  borderRadius={"50%"}
                  py={"8px"}
                  px={"8px"}
                  h={"35px"}
                  w={"35px"}
                >
                  <CheckIcon color="white" boxSize={4} />
                </Box>
                <Box>
                  <Text color={"white"}>
                    Innovation idea latest business tecnology
                  </Text>
                </Box>
              </Flex>
              <Flex mt={"24px"} alignItems={"center"} gap={"20px"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg={"#1ba8c6"}
                  borderRadius={"50%"}
                  py={"8px"}
                  px={"8px"}
                  h={"35px"}
                  w={"35px"}
                >
                  <CheckIcon color="white" boxSize={4} />
                </Box>
                <Box>
                  <Text color={"white"}>
                    Digital content marketing online clients plateform
                  </Text>
                </Box>
              </Flex>
              <Flex mt={"24px"} alignItems={"center"} gap={"20px"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg={"#1ba8c6"}
                  borderRadius={"50%"}
                  py={"8px"}
                  px={"8px"}
                  h={"35px"}
                  w={"35px"}
                >
                  <CheckIcon color="white" boxSize={4} />
                </Box>
                <Box>
                  <Text color={"white"}>
                    Safe secure services for you online email account
                  </Text>
                </Box>
              </Flex>
              <Box mt={"30px"}>
                <Button
                  bg="#1ba8c6"
                  colorScheme="#1ba8c6"
                  borderRadius={"0px"}
                  px={"25px"}
                  _hover={{
                    bg: "#240255",
                    color: "white",
                  }}
                >
                  SignUp Today
                </Button>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default About;
