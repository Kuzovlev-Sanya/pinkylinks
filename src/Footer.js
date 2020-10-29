import React from "react";
import {
  Divider,
  Link,
  Flex,
  Button,
  ButtonGroup,
  Box,
  Text,
} from "@chakra-ui/core";
import { FiGlobe, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <Box>
      <Flex>
        <ButtonGroup mb="6" w="100%">
          <Button
            as="a"
            target="_blank"
            borderBottom="none"
            bgColor="#f74f41"
            color="pink.100"
            w="50%"
            href="https://www.youtube.com/user/scraplandiya"
            mt="3"
            fontWeight="400"
            colorScheme="white"
            size="md"
            rightIcon={<FiYoutube />}
          >
            Канал Youtube
          </Button>
          <Button
            as="a"
            w="50%"
            target="_blank"
            borderBottom="none"
            bgColor="#4673d5"
            color="pink.100"
            href="https://pinky.school/"
            mt="3"
            fontWeight="400"
            colorScheme="white"
            size="md"
            rightIcon={<FiGlobe />}
          >
            English version
          </Button>
        </ButtonGroup>
      </Flex>
      <Divider opacity="0.2" />
      <Box mt="3">
        <Text>
          Пишите мне на почту{" "}
          <Link
            color="blue.600"
            borderColor="blue.200"
            _hover={{
              textDecoration: "none",
              color: "blue.900",
              borderColor: "blue.500",
            }}
            href="mailto:store@pinkypink.ru"
          >
            store@pinkypink.ru
          </Link>
        </Text>
        <Text>С любовью, Жанна</Text>
      </Box>
    </Box>
  );
}
