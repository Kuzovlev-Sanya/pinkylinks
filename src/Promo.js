import React from "react";
import { Image, Box, Img, Link, Heading, Button } from "@chakra-ui/core";
import promoImg from "./img/casset.jpeg";

export default function Promo({ title, img, url, butText }) {
  return (
    <>
      <Box mb="2" mt="4" borderRadius="8px">
        <Img src={promoImg} borderRadius="6px" />
        <Box p={4}>
          <Heading fontSize="lg">{title}</Heading>
          <Box>
            Ждали возможности заказать блокнот-кассету? Тогда проходите,
            наливайте себе чай повкуснее и выбирайте :)
          </Box>
          <Button
            as="a"
            target="_blank"
            borderBottom="none"
            bgColor="pink.800"
            color="pink.100"
            href={url}
            mt="3"
            fontWeight="400"
            colorScheme="pink"
            size="md"
          >
            {butText}
          </Button>
        </Box>
      </Box>
    </>
  );
}
