import React from "react";
import { Stack, Text, Image, Link } from "@chakra-ui/core";

export default function Header() {
  return (
    <Stack spacing={0}>
      <Link
        href="http://pinkypink.ru"
        target="_blank"
        borderBottom="0px"
        // width="70px"
      >
        <Image src="img/pinkypink.svg" alt="Pinky Pink" boxSize="70px" />
      </Link>
      {/* <Text fontSize="xl">Pinky Pink</Text> */}
      <Text fontSize="xs" px={5}>
        — Мы вдохновляем и учим людей делать оригинальные вещи своими руками
      </Text>
    </Stack>
  );
}
