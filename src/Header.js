import React from "react";
import { Stack, Text, Image } from "@chakra-ui/core";

export default function Header() {
  return (
    <Stack spacing={0}>
      <Image src="./img/pinkypink.svg" alt="Pinky Pink" boxSize="70px" />
      {/* <Text fontSize="xl">Pinky Pink</Text> */}
      <Text fontSize="xs" px={5}>
        — Мы вдохновляем и учим людей делать оригинальные вещи своими руками
      </Text>
    </Stack>
  );
}
