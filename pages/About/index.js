import React from 'react'
import LayoutWrapper from '../../src/components/core/LayoutWrapper/LayoutWrapper'
import AboutUs from '../../src/components/app/Flok/AboutPage/About'
import Testimonial from '../../src/components/app/Flok/AboutPage/Testimonial'
import { Box, Text } from '@chakra-ui/react'

function index() {
  return (
    <>
    <LayoutWrapper>
    <AboutUs/>
    <Box mb='60px'>
     <Box>
      <Text color={'white'} fontSize={'35px'} fontWeight={'700'} textAlign={'center'}>
      Customer say some words
      </Text>
      <Text color={'white'} fontSize={'16px'} fontWeight={'400'} textAlign={'center'} my={'24px'}>
     Help agencies to define their new business objectives and then create professional software.
      </Text>
     </Box>
    <Testimonial/>
    </Box>
  
    </LayoutWrapper>
    </>
  )
}

export default index
