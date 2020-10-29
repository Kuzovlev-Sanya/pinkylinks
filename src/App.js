import React from "react";
import { ChakraProvider, Box, Text, Link } from "@chakra-ui/core";
import pinkyPink from "./theme";
import Header from "./Header";
import Cart from "./Cart";
import Footer from "./Footer";
import Message from "./Message";

const start = {
  title: "С чего начать",
  text:
    "Я советую начинать с бесплатного курса «Обложка для паспорта из набора». В наборе есть все необходимые материалы.",
  magic: "бесплатного",
  butText: "Обложка для паспорта",
  butUrl:
    "https://pinkypink.ru/course/komplekt-materialov-i-videokurs-po-oblozhke-na-pasport/",
};
const courses = {
  title: "Онлайн курсы",
  text:
    "Сейчас в каталоге 15 бесплатных и 19 платных курсов на разные темы и разного уровня сложности.",
  butText: "Каталог курсов",
  butUrl: "https://pinkypink.ru/course/",
};
const blog = {
  title: "Полезные материалы",
  text:
    "У нас на сайте есть журнал в котором я делюсь опытом, публикую материалы и рассказываю о новостях.",
  butText: "Журнал",
  butUrl: "https://pinkypink.ru/zhurnal/",
};

export default function App() {
  return (
    <ChakraProvider theme={pinkyPink}>
      <Box w="100%" p={3} pb={6}>
        <Header />
        <Cart {...start} />
        <Box>
          <Text px="0" fontSize="xs" px={5}>
            Наборы к другим курсам ищите{" "}
            <Link
              color="pink.900"
              borderColor="pink.400"
              _hover={{
                textDecoration: "none",
                color: "blue.700",
                borderColor: "blue.500",
              }}
              href="https://instagram.com/pinkypink_boutique"
            >
              в Бутике Pinky Pink
            </Link>
          </Text>
        </Box>
        <Cart {...courses} />
        <Message />
        <Cart {...blog} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
