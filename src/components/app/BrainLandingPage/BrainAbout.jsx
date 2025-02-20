import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Link,
  Button,
  Img,
} from "@chakra-ui/react";
import React from "react";



const BrainTreeAbout = () => {
  return (
    <>
      <Box
        pt={{base:'30px',md:'30px',sm:'30px',lg:'85px',xl:'85px'}}
        pb={{base:'30px',md:'30px',sm:'30px',lg:'85px',xl:'85px'}}
        px={{base:'30px',md:'30px',sm:'30px',lg:'0px',xl:'0px'}}
        // backgroundImage="url('/Aboutlyer.svg')"
        // backgroundSize="cover"
        // backgroundPosition="center"
      >
        <Container maxW={"1340px"} mx={"auto"}>
          <Flex
            // justifyContent={"space-between"}
            // mt={{ lg: "52px", md: "40px", sm: "30px", base: "20px" }}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={'25px'}
          >
            <Box
              width={{ xl: "50%", lg: "50%", base: "100%" }}
              // pr={{ lg: "0px", md: "0px", base: "0px" }}
            >
              <Flex flexWrap={"wrap"} mx={"-8px"} justifyContent={'center'}>
                <Img src="/aboutimg.jpg" borderRadius={'12px'} />
              </Flex>
            </Box>
            <Box
              width={{xxxl:'47.5%', xl: "47.5%", lg: "48.5%", base: "100%" }}
              // mt={{ md: "40px", sm: "40px", base: "25px" }}
            >
               <Flex gap={"8px"} alignItems="center" marginBottom={'25px'}>
               <Text color={"#FF1415"} fontSize={"16px"} fontWeight={"700"}>
               ABOUT YouSEO
            </Text>
              </Flex>
              <Heading
              as={"h2"}
              fontSize={{ xl: "48px", lg: "42px", base: "38px", md: "42px" }}
              lineHeight={{ xl: "54px", base: "36px", md: "53px" }}
              fontWeight={"900"}
              letterSpacing={"-2%"}
              color={"white"}
            >
              Unique Solution
              <br />
              For Your Business
            </Heading>
            <Text
              fontSize={{ xl: "17px", lg: "17px", base: "14px" }}
              lineHeight={{ xl: "30px", lg: "30px", base: "26px" }}
              fontWeight={"500"}
              color={"#DADADA"}
              mt={'15px'}
            >
              We built effective strategies to help you reach customers and
              prospect across the entire web and Nunc non bibendum purus.
              Integer in metus at erat luctus.
            </Text>
              <Flex gap={'30px'} mt={'40px'}
              flexDirection={{base:'column',sm:'column',md:'row'}}
              >
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
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default BrainTreeAbout;
