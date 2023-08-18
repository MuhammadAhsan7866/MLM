import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import LayoutWrapper from "../../../core/LayoutWrapper/LayoutWrapper";
import Hero from "./Hero";
import About from "./About";
import PlansCard from "./PlansCard";
import WhyChooseUs from "./whyChooseUs";
import BonusLevel from "./BonusLevel";
import BlogCard from "../Blog/Blog";

const LandingPage = () => {
  return (
    <>
      <LayoutWrapper>
        <Box>
         <Hero/>
         
        </Box>
        <Box>
          <About/>
        </Box>
        <PlansCard/>
        <WhyChooseUs/>
        <BonusLevel/>
        <Box py='60px'>
          <Flex justifyContent={'center'} alignItems={'center'}>
          <Text color={'white'} fontSize={'35px'} fontWeight={'bold'}>
           Latest News
          </Text>
          </Flex>
         
          <BlogCard/>
        </Box>
      </LayoutWrapper>
    </>
  );
};

export default LandingPage;
