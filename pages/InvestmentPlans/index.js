import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PlansCard from "../../src/components/app/Flok/LandingPage/PlansCard";
import WhyChooseUs from "../../src/components/app/Flok/LandingPage/whyChooseUs";
import LayoutWrapper from "../../src/components/core/LayoutWrapper/LayoutWrapper";

function index() {
  return (
    <>
    <LayoutWrapper>
    <Box bg="#052d85" pos={'relative'}>
        <Box
          backgroundImage="url('/bread-bg.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          width="100%"
          height="400px"
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
           
          <Text zIndex={'999'} color={'white'} fontSize={'35px'}>INVESTMENT PLAN</Text>
          <Box 
          pos={'absolute'}
          bg={'rgba(58,20,132,0.90)'}
          top={'0'}
          w={'100%'}
          left={'0'}
          height="400px"
          ></Box>
        </Box>
        <Box py={'50px'}>
        <PlansCard />
        </Box>
        <Box>
            <WhyChooseUs/>
        </Box>
      </Box>

    </LayoutWrapper>
     
    </>
  );
}

export default index;
