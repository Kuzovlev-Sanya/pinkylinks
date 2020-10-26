import React from "react";
import { Box, Flex, Heading, Text, Spacer, Button } from "@chakra-ui/core";

export default function Cart(props) {
  return (
    <Box
      mb="2"
      mt="4"
      borderWidth="1px"
      bgColor="pink.50"
      borderColor="whiteAlpha.600"
      borderRadius="md"
      overflow="hidden"
    >
      <Box p={4} position="relative">
        <Flex mb="1" spacing="1">
          <Heading fontSize="lg">{props.content.title}</Heading>
          <Spacer />
        </Flex>
        <Text>{props.content.text}</Text>
        <Button
          as="a"
          target="_blank"
          borderBottom="none"
          bgColor="pink.800"
          color="pink.100"
          href={props.content.butUrl}
          mt="3"
          fontWeight="400"
          colorScheme="pink"
          size="md"
        >
          {props.content.butText}
        </Button>
      </Box>
    </Box>
  );
}
