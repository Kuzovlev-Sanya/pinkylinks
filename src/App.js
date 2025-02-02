import React from "react";
import { ChakraProvider, Box, Text, Link } from "@chakra-ui/core";
import pinkyPink from "./theme";
import Header from "./Header";
import Cart from "./Cart";
import Footer from "./Footer";
import Message from "./Message";
import Promo from "./Promo";

const promo = {
  title: "Ключница на кнопке",
  url: "https://pinkypink.ru/course/key_keeper/",
  butText: "Купить",
};

const start = {
  title: "С чего начать",
  text: "Я советую начинать с бесплатного курса «Обложка для паспорта из набора». В наборе есть все необходимые материалы.",
  magic: "бесплатного",
  butText: "Посмотреть курс",
  butUrl:
    "https://pinkypink.ru/course/komplekt-materialov-i-videokurs-po-oblozhke-na-pasport/",
};
const subscription = {
  title: "Хочу скидку!",
  text: "Все заманчивые предложения мы присылаем по почте.",
  butText: "Подписаться",
  butUrl: "https://pinkypink.ru/subscription/",
};
const courses = {
  title: "Онлайн курсы",
  text: "Сейчас в каталоге 16 бесплатных и 28 платных курсов на разные темы и разного уровня сложности.",
  butText: "Открыть каталог",
  butUrl: "https://pinkypink.ru/course/",
};
const blog = {
  title: "Полезные материалы",
  text: "У нас на сайте есть журнал в котором я делюсь опытом, публикую материалы и рассказываю о новостях.",
  butText: "Полистать журнал",
  butUrl: "https://pinkypink.ru/zhurnal/",
};

export default function App() {
  return (
    <ChakraProvider theme={pinkyPink}>
      <Box w="100%" p={3} pb={6}>
        <Header />
        <Cart {...start} />
        <Cart {...subscription} />
        <Box>
          <Text px="0" fontSize="xs" px={5}>
            Наборы к курсам смотрите{" "}
            <Link
              color="pink.900"
              borderColor="pink.400"
              _hover={{
                textDecoration: "none",
                color: "blue.700",
                borderColor: "blue.500",
              }}
              href="https://instagram.com/happysets_boutique"
            >
              в Бутике HappySets
            </Link>
          </Text>
        </Box>
        <Promo {...promo} />

        <Cart {...courses} />
        <Message />
        <Cart {...blog} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
