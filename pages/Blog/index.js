import React from 'react'
import LayoutWrapper from '../../src/components/core/LayoutWrapper/LayoutWrapper'
import Blog from '../../src/components/app/Flok/Blog/Blog'
import BlogCard from '../../src/components/app/Flok/Blog/Blog'
import { Box, Text } from '@chakra-ui/react'

function index() {
  return (
    <>
    <LayoutWrapper>
    
        <BlogCard/>
        
    </LayoutWrapper>
    </>
  )
}

export default index
