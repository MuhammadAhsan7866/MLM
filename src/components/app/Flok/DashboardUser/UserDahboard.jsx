"use client";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Img,
  Heading,
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { IconType } from "react-icons";
import StatCard from "./StatCard";

const LinkItems = [
  {
    icon: "SunIcon",
    name: "Dashbaord",
  },
  {
    icon: "SunIcon",
    name: "Plan",
  },
  {
    icon: "SunIcon",
    name: "Investment History",
  },
  {
    icon: "SunIcon",
    name: "Add Fund",
  },
  {
    icon: "SunIcon",
    name: "Fund History",
  },
  {
    icon: "SunIcon",
    name: "Transfer ",
  },
  {
    icon: "SunIcon",
    name: "Transsaction ",
  },
  {
    icon: "SunIcon",
    name: "Payout ",
  },
  {
    icon: "SunIcon",
    name: "Payout History ",
  },
  {
    icon: "SunIcon",
    name: "My Refferal ",
  },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={"#2f2e2e"}
      borderRight="1px"
      borderRightColor={"#2f2e2e"}
      maxW={"250px"}
      pos="fixed"
      h="full"
      {...rest}
      overflowY="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#4283D7",
          borderRadius: "24px",
        },
      }}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Img src="/bit-logo.png" mt="30px" />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box mt="24px">
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} color="white" py="24px">
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={"#2f2e2e"}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
          color={"white"}
          _hover={{ bg: "transparent" }}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
              bg="transparent"
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="16px" color="white" fontWeight={"600"}>
                    Ali
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown color="white" />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      minH="100vh"
      bgImage="url('/bitt.webp')"
      bgRepeat={"no-repeat"}
      pos={"relative"}
      bgSize={"cover"}
      W={"100%"}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="rgb(0 0 0 / 70%)" // Adjust opacity as needed
      />
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Box>
          <Flex px={"24px"} my='30px'>
            <Heading color={"white"} zIndex={"1024"}>
              Dashboard
            </Heading>
          </Flex>
          <Flex gap={"24px"} p="4" maxW={{xl:'1220px',xxl:'1600px'}} m="auto" flexWrap={"wrap"}>
            <StatCard title="Main Blance" value="$150,000" Image='/earnn.png' />
            <StatCard title="Intrest Blance" value="350"  Image='/baf.png' />
            <StatCard title="Total Deposit" value="1200" Image='/deposit.png' />
            <StatCard title="Total Earn" value="25%" Image='/earning.png'/>
          </Flex>
        </Box>

        <Box my='100px'>
          <Flex px={"24px"} my='30px' justifyContent={'center'} alignItems={'center'}>
            <Heading color={"white"} zIndex={"1024"} fontSize={'40px'}>
            Account Statistics
            </Heading>
          </Flex>
          <Flex gap={"24px"} p="4" maxW={{xl:'1220px',xxl:'1600px'}} m="auto" flexWrap={"wrap"}>
            <StatCard title="Total Invest" value="$0" Image='/inverntment.png' />
            <StatCard title="Total Payout" value="$350"  Image='/payout.png' />
            <StatCard title="Total Ticket" value="0" Image='/ticket.png' />
            <StatCard title="Total Referral Bonus" value="$25" Image='/referal.png'/>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
