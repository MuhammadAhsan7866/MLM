import {
  Badge,
  Box,
  Button,
  ChakraProvider,
  Container,
  extendTheme,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

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

const serviceData = [
  {
    title: "Silver plan",
    Percentage: "Weekly",
    numeric: "5%",
    Charges: "Minimam Invest : $100",
    Invest: "Maximam Invest : $1000",
    Average: "Avarage Monthly : 50%",
    Deposite: "DEPOSITE",
  },
  {
    title: "Gold plan",
    Percentage: "Weekly",
    numeric: "15%",
    Charges: "Minimam Invest : $1000",
    Invest: "Maximam Invest : $10000",
    Average: "Avarage Monthly : 100%",
    Deposite: "DEPOSITE",
  },
  {
    title: "Platinum plan",
    Percentage: "Weekly",
    numeric: "50%",
    Charges: "Minimam Invest : $100",
    Invest: "Maximam Invest : $1000",
    Average: "Avarage Monthly : 50%",
    Deposite: "DEPOSITE",
    Popular: "Popular",
  },
  {
    title: "Diamon plan",
    Percentage: "Weekly",
    numeric: "5%",
    Charges: "Minimam Invest : $100",
    Invest: "Maximam Invest : $1000",
    Average: "Avarage Monthly : 50%",
    Deposite: "DEPOSITE",
    Popular: "Best Sale",
  },
  {
    title: "Premium plan",
    Percentage: "Weekly",
    numeric: "15%",
    Charges: "Minimam Invest : $100",
    Invest: "Maximam Invest : $1000",
    Average: "Avarage Monthly : 50%",
    Deposite: "DEPOSITE",
    Popular: "Best Sale",
  },
  {
    title: "Premium plan",
    Percentage: "Weekly",
    numeric: "50%",
    Charges: "Minimam Invest : $100",
    Invest: "Maximam Invest : $1000",
    Average: "Avarage Monthly : 50%",
    Deposite: "DEPOSITE",
    Popular: "Best Sale",
  },
];

function PlansCard() {
  return (
    <Container maxW={"7xl"} pb={{ base: 10, md: 20 }}>
      <Box>
        <Heading textAlign={"center"} fontSize={"35px"} color={"white"}>
          Investments plan
        </Heading>
        <Text textAlign={"center"} mt={"15px"} mb="35px" color={"white"}>
          Help agencies to define their new business objectives and then create
          professional software.
        </Text>
      </Box>
      <Flex justifyContent="center" alignItems="center">
        <Flex flexWrap="wrap" justifyContent={"space-between"} p={4} w={"100%"}>
          {serviceData.map((service, index) => (
            <Box
              key={index}
              className="fade-in-from-left"
              p={"40px"}
              bg="#38117F"
              borderRadius="md"
              width={{ base: "100%", sm: "45%", md: "30%" }}
              mb={4}
              position={"relative"}
            >
              <Text fontSize="xl" fontWeight="semibold" color={"white"} mb={2}>
                {service.title}
              </Text>
              <Text color={"white"} borderBottom={"1px dashed #ccc"} pb="30px">
                <Text
                  as={"span"}
                  fontSize={"35px"}
                  fontWeight={"bold"}
                  color={"#1ba8c6"}
                  mr="10px"
                >
                  {service.numeric}
                </Text>
                {service.Percentage}
              </Text>
              <Box mt="26px">
                <Text color={"white"}>{service.Charges}</Text>
                <Text py="15px" color={"white"}>
                  {service.Invest}
                </Text>
                <Text color={"white"}>{service.Average}</Text>
              </Box>
              <Box mt="24px">
                <Button
                  bg="#1ba8c6"
                  colorScheme="#1ba8c6"
                  borderRadius={"0px"}
                  padding={"8px 20px"}
                  _hover={{ bg: "#240255" }}
                >
                  {service.Deposite}
                </Button>
              </Box>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

export default PlansCard;
