import React from "react";
import { Stack, Text } from "@chakra-ui/core";

export default function Header() {
  return (
    <Stack spacing={0}>
      <Text fontSize="xl">Pinky Pink</Text>
      <Text fontSize="xs">
        — Мы вдохновляем и учим людей делать оригинальные вещи своими руками
      </Text>
    </Stack>
  );
}
