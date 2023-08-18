import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Img,
  Container,
  Flex,
} from "@chakra-ui/react";

export default function BlogCard() {
  return (
    <Box>
      <Container maxW="7xl" pt="100px" pb="60px">
        <Box mb="24px">
          <Text
            fontSize={"35px"}
            color={"white"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Business latest news
          </Text>
          <Text
            fontSize={"16px"}
            color={"white"}
            fontWeight={"normal"}
            textAlign={"center"}
            mt="15px"
          >
            Help agencies to define their new business objectives and then
            create professional software.
          </Text>
        </Box>
        <Flex
          gap={"30px"}
          flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
        >
          <Center py={6}>
            <Box
              maxW={{ base: "100%", md: "100%", lg: "445px" }}
              w={"full"}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box
                h={"210px"}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Img src="/blogss.jpeg" h={"100%"} w="100%" />
              </Box>
              <Stack>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Blog
                </Text>
                <Heading
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  Boost your conversion rate
                </Heading>
                <Text color={"gray.500"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar
                  src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600}>Achim Rolle</Text>
                  <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
                </Stack>
              </Stack>
            </Box>
          </Center>
          <Center py={6}>
            <Box
              maxW={{ base: "100%", md: "100%", lg: "445px" }}
              w={"full"}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box
                h={"210px"}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Img src="/blogss.jpeg" h={"100%"} w="100%" />
              </Box>
              <Stack>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Blog
                </Text>
                <Heading
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  Boost your conversion rate
                </Heading>
                <Text color={"gray.500"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar
                  src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600}>Achim Rolle</Text>
                  <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
                </Stack>
              </Stack>
            </Box>
          </Center>
          <Center py={6}>
            <Box
              maxW={{ base: "100%", md: "100%", lg: "445px" }}
              w={"full"}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box
                h={"210px"}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Img src="/blogss.jpeg" h={"100%"} w="100%" />
              </Box>
              <Stack>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Blog
                </Text>
                <Heading
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  Boost your conversion rate
                </Heading>
                <Text color={"gray.500"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar
                  src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600}>Achim Rolle</Text>
                  <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
                </Stack>
              </Stack>
            </Box>
          </Center>
        </Flex>
        <Flex
          gap={"30px"}
          flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
        >
          {/* <Center py={6}>
            <Box
              maxW={{ base: "100%", md: "100%", lg: "445px" }}
              w={"full"}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box
                h={"210px"}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Img src="/blogss.jpeg" h={"100%"} w="100%" />
              </Box>
              <Stack>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Blog
                </Text>
                <Heading
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  Boost your conversion rate
                </Heading>
                <Text color={"gray.500"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar
                  src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600}>Achim Rolle</Text>
                  <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
                </Stack>
              </Stack>
            </Box>
          </Center>
          <Center py={6}>
            <Box
              maxW={{ base: "100%", md: "100%", lg: "445px" }}
              w={"full"}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box
                h={"210px"}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Img src="/blogss.jpeg" h={"100%"} w="100%" />
              </Box>
              <Stack>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Blog
                </Text>
                <Heading
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  Boost your conversion rate
                </Heading>
                <Text color={"gray.500"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar
                  src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600}>Achim Rolle</Text>
                  <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
                </Stack>
              </Stack>
            </Box>
          </Center>
          <Center py={6}>
            <Box
              maxW={{ base: "100%", md: "100%", lg: "445px" }}
              w={"full"}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box
                h={"210px"}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Img src="/blogss.jpeg" h={"100%"} w="100%" />
              </Box>
              <Stack>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Blog
                </Text>
                <Heading
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  Boost your conversion rate
                </Heading>
                <Text color={"gray.500"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar
                  src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600}>Achim Rolle</Text>
                  <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
                </Stack>
              </Stack>
            </Box>
          </Center> */}
        </Flex>
      </Container>
    </Box>
  );
}
