import React, { useEffect } from "react";
import { Image, Box, Link, Heading, Button } from "@chakra-ui/core";
import { motion, useCycle } from "framer-motion";

const MagicBox = motion.custom(Box);

export default function Promo({ title, img, url, butText }) {
  const [magicAnitmation, cycleMagicAnimation] = useCycle(
    { colorStart: "#235AD1", colorEnd: "#F75656" },
    // { color: "#FF0000" },
    // { color: "#EFCB10" },
    { colorStart: "#F75656", colorEnd: "#235AD1" }
  );
  useEffect(() => {
    const interval = setInterval(() => {
      cycleMagicAnimation();
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <MagicBox mb="2" mt="4" borderRadius="8px">
        <Image src={img} borderRadius="6px" />
        <Box p={4}>
          <Heading fontSize="lg">{title}</Heading>
          <Box>
            За окнами холодает, в домах зажигаются уютные свечи и мы начинаем
            делать дневник на 2021 год.
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
            Приобрести курс за 990 руб.
          </Button>
        </Box>
      </MagicBox>
    </>
  );
}
