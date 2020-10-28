import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@chakra-ui/core";

const HeartIcon = motion.custom(Icon);

export default function Heart(props) {
  const el = (
    <HeartIcon
      onAnimationComplete={() => props.onAnimationEnd(props.id)}
      id={props.id}
      position="absolute"
      initial={{ opacity: 0, x: 2, y: 17 }}
      animate={{
        opacity: 1,
        x: props.x,
        y: props.y,
        scale: props.scale,
        rotate: props.rotate,
      }}
      transition={{ duration: 7, ease: [0.17, 0.67, 0.83, 0.67] }}
      viewBox="0 0 17 14"
      color="red.500"
    >
      <path
        fill="currentColor"
        d="M16.0016 6C15.0016 9 8.50035 13.5 8.50035 13.5C8.50035 13.5 2.00336 9 1.00168 6C0 3 2.00339 0.5 4.50166 0.5C8.00166 0.5 8.50075 4.5 8.50075 4.5C8.50075 4.5 9.0016 0.5 12.5016 0.5C15.0016 0.5 17.0016 3 16.0016 6Z"
      />
    </HeartIcon>
  );
  return el;
}
