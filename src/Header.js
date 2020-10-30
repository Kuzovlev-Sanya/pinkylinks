import React from "react";
import { Stack, Text, Image, Link } from "@chakra-ui/core";
import logo from "./img/pinkypink.png";

export default function Header() {
  return (
    <>
      <Link href="http://pinkypink.ru" target="_blank" borderBottom="0px">
        <img src={logo} alt="Pinky Pink" width="70px" display="inline" />
      </Link>
      <Text fontSize="xs" px={5}>
        — Мы вдохновляем и учим людей делать оригинальные вещи своими руками
      </Text>
    </>
  );
}
