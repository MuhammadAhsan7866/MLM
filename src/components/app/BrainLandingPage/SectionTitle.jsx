import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const TitleSection = ({ title, subtitle, align = "center" }) => {
  return (
    <Box 
    py={'50px'}
    textAlign={'center'}
    >
      <Text color={"#FF1415"} fontSize={"16px"} fontWeight={"700"}>
        Our Services
      </Text>
      <Heading
        as={"h2"}
        fontSize={{ xl: "64px", lg: "42px", base: "42px", md: "42px" }}
        lineHeight={{ xl: "65px", base: "36px", md: "53px" }}
        fontWeight={"900"}
        letterSpacing={"-2%"}
        color={"white"}
        mb={'16px'}
      >
       We Have an Expert <br/> In Our Team
       
      </Heading>
      <Text
        fontSize={{ xl: "17px", lg: "17px", base: "14px" }}
        lineHeight={{ xl: "30px", lg: "30px", base: "26px" }}
        fontWeight={"500"}
        color={"#DADADA"}
        maxW={'650px'}
        w={'100%'}
        m={'auto'}
      >
        We built effective strategies to help you reach customers and prospect
        across the entire web and Nunc non bibendum purus. Integer in metus at
        erat luctus.
      </Text>
    
    </Box>
  );
};

export default TitleSection;
