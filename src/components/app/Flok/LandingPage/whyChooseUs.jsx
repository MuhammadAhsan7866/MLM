import { SettingsIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  ChakraProvider,
  Container,
  extendTheme,
  Flex,
  Heading,
  IconButton,
  Image,
  Img,
  Text,
} from "@chakra-ui/react";
import HistoryTable from "./HistoryTable";
import WithdrawalsHistoryTable from "./HistoryTable";
import LastWidraw from "./LastWidraw";

const theme = extendTheme({
  styles: {
    global: {
      ".fade-in-from-left": {
        animation: "fadeLeftAnimation 1s ease-in-out",
      },
      "@keyframes fadeLeftAnimation": {
        "0%": {
          opacity: 0,
          transform: "translateX(-20px)",
        },
        "100%": {
          opacity: 1,
          transform: "translateX(0)",
        },
      },
    },
  },
});

function WhyChooseUs() {
  return (
    <Container maxW={"7xl"} pb={{ base: 10, md: 20 }}>
      <Box>
        <Heading textAlign={"center"} fontSize={"35px"} color={"white"}>
          Deposite and withdrawals history
        </Heading>
        <Text textAlign={"center"} mt={"15px"} mb="35px" color={"white"}>
          Help agencies to define their new business objectives and then create
          professional software.
        </Text>
      </Box>
      <Box bg="#38117F" padding="40px" borderBottom={'3px solid #1BA8C6'}>
        <Flex mb="26px">
          <Text color={"#1BA8C6"} fontSize="30px" fontWeight={"bold"}>
            Last deposite
          </Text>
        </Flex>
        <WithdrawalsHistoryTable />
      </Box>
      <Box bg="#38117F" padding="40px" mt="50px" borderBottom={'3px solid #1BA8C6'}>
        <Flex mb="26px">
          <Text color={"#1BA8C6"} fontSize="30px" fontWeight={"bold"}>
            Last withdrawals
          </Text>
        </Flex>
        <LastWidraw />
      </Box>
    </Container>
  );
}

export default WhyChooseUs;
