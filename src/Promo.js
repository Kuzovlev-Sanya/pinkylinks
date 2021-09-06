import React from "react";
import { Image, Box, Img, Link, Heading, Button } from "@chakra-ui/core";
import promoImg from "./img/IMG_2498.jpeg";

export default function Promo({ title, img, url, butText }) {
  return (
    <>
      <Box mb="2" mt="4" borderRadius="8px">
        <Img src={promoImg} borderRadius="6px" />
        <Box p={4}>
          <Heading fontSize="lg">{title}</Heading>
          <Box>
            Зову всех желающих создать блокноты-кассеты с магнитным хлястиком,
            повидаться, наболтаться, съесть вместе торт и зарядиться
            вдохновением!
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
