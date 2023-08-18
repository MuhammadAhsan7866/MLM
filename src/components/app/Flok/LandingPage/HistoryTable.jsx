import {
    Flex,
    Img,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

function HistoryTable() {
  return (
    <>
      <TableContainer border={'1px solid white'}>
        
        <Table>
          <Thead color={'white'}>
            <Tr>
              <Th color={'white'} fontSize={'16px'}>Name</Th>
              <Th color={'white'} fontSize={'16px'}>Date</Th>
              <Th color={'white'} fontSize={'16px'} isNumeric>Amount</Th>
              <Th color={'white'} fontSize={'16px'} isNumeric>Currency</Th>
            </Tr>
          </Thead>
          <Tbody color={'white'}>
            <Tr>
              <Td>
                <Flex alignItems={'center'} gap='12px'>
                <Img src='/ahmed.png' borderRadius={'50%'} w='35px' h={'35px'} />
                <Text color='white'>Ahmed Raza</Text>
                </Flex>
               </Td>
              <Td>Jan 02, 2020</Td>
              <Td isNumeric>1000$</Td>
              <Td isNumeric>1000$</Td>
            </Tr>
            <Tr bg={'#052D85'}>
              <Td>
                <Flex alignItems={'center'} gap='12px'>
                <Img src='/ahmed.png' borderRadius={'50%'} w='35px' h={'35px'} />
                <Text color='white'>Waqas Jameel</Text>
                </Flex>
               </Td>
              <Td>Jan 02, 2020</Td>
              <Td isNumeric>1000$</Td>
              <Td isNumeric>1000$</Td>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={'center'} gap='12px'>
                <Img src='/ahmed.png' borderRadius={'50%'} w='35px' h={'35px'} />
                <Text color='white'>Ahsan Javeed</Text>
                </Flex>
               </Td>
              <Td>Jan 02, 2020</Td>
              <Td isNumeric>1000$</Td>
              <Td isNumeric>1000$</Td>
            </Tr>
          </Tbody>
          <Tfoot>
          <Tr color={'white'} bg={'#052D85'}>
              <Td>
                <Flex alignItems={'center'} gap='12px'>
                <Img src='/ahmed.png' borderRadius={'50%'} w='35px' h={'35px'} />
                <Text color='white'>Ali Haider</Text>
                </Flex>
               </Td>
              <Td>Jan 02, 2020</Td>
              <Td isNumeric>1000$</Td>
              <Td isNumeric>1000$</Td>
            </Tr>
           <Tr color={'white'}>
              <Td>
                <Flex alignItems={'center'} gap='12px'>
                <Img src='/ahmed.png' borderRadius={'50%'} w='35px' h={'35px'} />
                <Text color='white'>Jameel Ismail</Text>
                </Flex>
               </Td>
              <Td>Jan 02, 2020</Td>
              <Td isNumeric>1000$</Td>
              <Td isNumeric>1000$</Td>
            </Tr>
            <Tr color={'white'} bg={'#052D85'}>
              <Td>
                <Flex alignItems={'center'} gap='12px'>
                <Img src='/ahmed.png' borderRadius={'50%'} w='35px' h={'35px'} />
                <Text color='white'>Ali Haider</Text>
                </Flex>
               </Td>
              <Td>Jan 02, 2020</Td>
              <Td isNumeric>1000$</Td>
              <Td isNumeric>1000$</Td>
            </Tr>
           <Tr color={'white'}>
              <Td>
                <Flex alignItems={'center'} gap='12px'>
                <Img src='/ahmed.png' borderRadius={'50%'} w='35px' h={'35px'} />
                <Text color='white'>Ch Faraz</Text>
                </Flex>
               </Td>
              <Td>Jan 02, 2020</Td>
              <Td isNumeric>1000$</Td>
              <Td isNumeric>1000$</Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}

export default HistoryTable;
