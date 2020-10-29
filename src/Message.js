import React, { useEffect, useState } from "react";
import { Box, Link } from "@chakra-ui/core";
import Heart from "./Heart";

export default function Message() {
  const [hearts, setHearts] = useState([]);

  const addHeart = () => {
    const newHeart = {
      id: Math.random().toString(),
      x: Math.floor(Math.random() * 130) - 50,
      y: Math.floor(Math.random() * -90) - 40,
      scale: Math.floor(Math.random() * 0.7) + 1.4,
      rotate: Math.floor(Math.random() * 10) + 5,
    };
    const newHearts = [...hearts, newHeart];
    setHearts(newHearts);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      addHeart();
    }, 500);
    return () => clearInterval(interval);
  });
  function removeHeart(heartId) {
    const updateHeart = hearts.filter((heart) => {
      return heart.id !== heartId;
    });
    setHearts(updateHeart);
  }

  return (
    <Box p={5}>
      <Box fontSize="3xl" lineHeight="1.2" display="inline">
        За 10 лет курсы Pinky Pink прошли 12 000 учеников, почитайте{" "}
        <Link
          color="pink.900"
          borderColor="pink.400"
          _hover={{
            textDecoration: "none",
            color: "blue.900",
            borderColor: "blue.500",
          }}
          href="https://pinkypink.ru/testimonials/"
        >
          их отзывы
        </Link>
      </Box>
      <Box pos="relative" display="inline">
        {hearts.map((heart) => (
          <Heart
            key={heart.id}
            id={heart.id}
            x={heart.x}
            y={heart.y}
            scale={heart.scale}
            rotate={heart.rotate}
            onAnimationEnd={removeHeart}
          />
        ))}
      </Box>
    </Box>
  );
}
