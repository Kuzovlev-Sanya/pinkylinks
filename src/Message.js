import React, { useEffect, useState } from "react";
import { Box, Link, Text } from "@chakra-ui/core";
import Heart from "./Heart";

export default function Message() {
  return (
    <Box p={5}>
      <Text fontSize="3xl" lineHeight="1.2">
        За 10 лет курсы Pinky Pink прошли 12 000 учеников, почитайте{" "}
        <Link
          color="blue.700"
          borderColor="blue.300"
          _hover={{
            textDecoration: "none",
            color: "blue.900",
            borderColor: "blue.500",
          }}
          href="https://pinkypink.ru/testimonials/"
        >
          их отзывы
        </Link>
      </Text>
      <Heart />
    </Box>
  );
}
