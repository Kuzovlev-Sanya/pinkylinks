import React from "react";
import { Image, Box, Img, Link, Heading, Button } from "@chakra-ui/core";
import promoImg from "./img/IMG_4662.jpeg";

export default function Promo({ title, img, url, butText }) {
  return (
    <>
      <Box mb="2" mt="4" borderRadius="8px">
        <Img src={promoImg} borderRadius="6px" />
        <Box p={4}>
          <Heading fontSize="lg">{title}</Heading>
          <Box>
            Сумочка из привычных нам материалов? Да-да-да! Старт 10 декабря!
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
