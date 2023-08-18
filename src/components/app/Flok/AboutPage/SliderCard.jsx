import { Box, Button, Flex, Image, Text, Link } from "@chakra-ui/react";
import React from "react";

const SliderCard = ({ image, Name, TrxID }) => {
  return (
    <Box
      mx={{ base: "25px", md: "20px" }}
      as={Link}
      href="/event"
      textDecoration={"none"}
    >
      <Box bg="#38117F" p={"30px"} borderRadius={'8px'}>
        <Box mb="20px">
          <Image alt="img" src={image}></Image>
        </Box>
        <Box p="20px">
         
          <Text
            color="white"
            fontSize="18px"
            fontWeight="300"
            lineHeight={"25px"}
          >
            When replacing a multi-lined selection of text, the generated dummy
            text maintains the amount of lines. When replacing a selection. help
            agencies.
          </Text>
          <Text
            mt="20px"
            color="white"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"34px"}
            
          >
         Muhammad Ali
          </Text>
          <Text
           
            color="white"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"34px"}
            
          >
        General Customer
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SliderCard;
