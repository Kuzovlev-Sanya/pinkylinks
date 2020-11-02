import React from "react";
import { Box, Flex, Heading, Text, Spacer, Button } from "@chakra-ui/core";
import Magic from "./Magic";

export default function Cart({ title, text, butUrl, butText, magic }) {
  let cardText = <Text>{text}</Text>;
  if (magic) {
    cardText = <Magic text={text} magic={magic} />;
  }
  return (
    <Box
      mb="2"
      mt="4"
      borderWidth="1px"
      bgColor="pink.50"
      borderColor="whiteAlpha.600"
      borderRadius="8px"
      overflow="hidden"
    >
      <Box p={4} position="relative">
        <Flex mb="1" spacing="1">
          <Heading fontSize="lg">{title}</Heading>
          <Spacer />
        </Flex>
        {cardText}
        {/* <Text dangerouslySetInnerHTML={{ __html: props.content.text }} /> */}
        <Button
          as="a"
          target="_blank"
          borderBottom="none"
          bgColor="pink.800"
          color="pink.100"
          href={butUrl}
          mt="3"
          fontWeight="400"
          colorScheme="pink"
          size="md"
        >
          {butText}
        </Button>
      </Box>
    </Box>
  );
}
