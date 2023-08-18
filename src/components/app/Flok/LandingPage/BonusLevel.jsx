"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "400px" }}
      w={"full"}
      borderRadius="lg"
      overflow="hidden"
      padding={'60px 40px 40px'}
      bg='#38117F'
      minH={'300px'}
    >
      <Stack align={"start"} spacing={2} justifyContent={'center'} alignItems={'center'}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading fontSize="25px" color={'white'} textAlign={'center'} mt='25px'>{heading}</Heading>
         
        </Box>
      </Stack>
    </Box>
  );
};

export default function BonusLevel() {
  return (
    <Box pb={'40px'}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
          color={"white"}
        >
          Referral bonus level
        </Heading>
        <Text color={"white"} fontSize={{ base: "sm", sm: "lg" }}>
          Help agencies to define their new business objectives and then create
          professional software.
        </Text>
      </Stack>

      <Container maxW={"7xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Level 02 Instant 20% Bonus Reward"}
            icon={
              <Icon
                as={FcAssistant}
                w={10}
                h={10}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              />
            }
          />
          <Card
            heading={"Level 02 Instant 20% Bonus Reward"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
           
          />
          <Card
            heading={"Level 03 Instant 30% Bonus Reward"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
          
          />
        </Flex>
      </Container>
    </Box>
  );
}
