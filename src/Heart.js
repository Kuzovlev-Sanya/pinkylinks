import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@chakra-ui/core";

const HeartIcon = motion.custom(Icon);

export default function Heart() {
  const [heart, setHeart] = useState("1");

  useEffect(() => {
    setInterval(() => {
      setHeart(Math.floor(Math.random() * 100) + 50)s;
      console.log(heart);
    }, Math.floor(Math.random() * 2000) + 4000);
  }, [heart]);

  const [visible, setVisible] = useState(true);
  const el = (
    <AnimatePresence>
      <HeartIcon
        onAnimationComplete={() => setVisible(false)}
        key={Math.random()}
        position="absolute"
        initial={{ opacity: 0, x: heart }}
        animate={{
          opacity: 1,
          x: Math.floor(Math.random() * 150) + 1,
          y: Math.floor(Math.random() * -150) - 50,
        }}
        transition={{ duration: 10, type: "tween" }}
        // exit={{ opacity: 0, y: -50, transition: { duration: 200 } }}

        viewBox="0 0 17 14"
        color="red.500"
      >
        <path
          fill="currentColor"
          d="M16.0016 6C15.0016 9 8.50035 13.5 8.50035 13.5C8.50035 13.5 2.00336 9 1.00168 6C0 3 2.00339 0.5 4.50166 0.5C8.00166 0.5 8.50075 4.5 8.50075 4.5C8.50075 4.5 9.0016 0.5 12.5016 0.5C15.0016 0.5 17.0016 3 16.0016 6Z"
        />
      </HeartIcon>
    </AnimatePresence>
  );
  return visible ? el : null;
}
