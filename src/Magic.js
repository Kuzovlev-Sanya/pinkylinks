import React, { useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { Box, Text } from "@chakra-ui/core";

const MagicText = motion.custom(Text);

export default function Magic({ text, magic }) {
  const splitText = text.split(magic);
  const splitMagic = magic.split("");
  const [magicAnitmation, cycleMagicAnimation] = useCycle(
    { color: "#235AD1" },
    // { color: "#FF0000" },
    // { color: "#EFCB10" },
    { color: "#F75656" }
  );
  useEffect(() => {
    const interval = setInterval(() => {
      cycleMagicAnimation();
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <Box>
      <Box display="inline" position="relative">
        {splitText[0]}
      </Box>
      {splitMagic.map((letter, i) => {
        return (
          <MagicText
            key={i}
            display="inline"
            animate={{
              color: magicAnitmation.color,
            }}
            transition={{
              delay: 0.09 * i,
            }}
          >
            {letter}
          </MagicText>
        );
      })}
      <Box display="inline">{splitText[1]}</Box>
    </Box>
  );
}
