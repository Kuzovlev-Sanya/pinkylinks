import React from "react";
import { Stack, Text, Image, Link } from "@chakra-ui/core";

export default function Header() {
  return (
    <>
      {/* <Link href="http://pinkypink.ru" target="_blank" borderBottom="0px"> */}
      <Image
        src="./img/pinkypink.png"
        alt="Pinky Pink"
        width="70px"
        display="inline"
      />
      {/* </Link> */}
      {/* <Text fontSize="xl">Pinky Pink</Text> */}
      <Text fontSize="xs" px={5}>
        — Мы вдохновляем и учим людей делать оригинальные вещи своими руками
      </Text>
    </>
  );
}
