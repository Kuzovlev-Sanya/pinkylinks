import React from "react";
import { Image, Box, Img, Link, Heading, Button } from "@chakra-ui/core";
import promoImg from "./img/IMG_3582.jpeg";

export default function Promo({ title, img, url, butText }) {
  return (
    <>
      <Box mb="2" mt="4" borderRadius="8px">
        <Img src={promoImg} borderRadius="6px" />
        <Box p={4}>
          <Heading fontSize="lg">{title}</Heading>
          <Box>
            Готовится самый джазовый видеокурс на нашем сайте! Здесь мы создадим
            светильник-фоторамку в виде ретро телевизора. На экране может быть
            любое ваше любимое фото, хранящее теплые воспоминания. В этом курсе
            показан полный процесс изготовления такого светильника.
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
