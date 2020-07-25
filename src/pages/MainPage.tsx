import React from "react";
import {
  Slider,
  Featured,
  Widgets,
  MobileBanking,
  Useful,
  News,
} from "../components";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="container">
        <Slider
          steps={[
            {
              title: "Баспана Хит",
              desc: "Собственное жильё – это легко!",
              img: "/img/slide1.svg",
              btnText: "Заполнить заявку",
            },
            {
              title: "Нужна гарантия для тендера?",
              desc: "Получайте тендерные гарантии от 20 минут",
              img: "/img/slide2.svg",
              btnText: "Заполнить заявку",
            },
            {
              title: "Кредит наличными",
              desc: "до 7 000 000 ₸ за 15 минут",
              img: "/img/slide3.svg",
              btnText: "Оформить кредит",
            },
          ]}
        />
        <Featured />
        <Widgets />
        <Useful />
        <MobileBanking />
        <News />
      </div>
    </div>
  );
};

export default MainPage;
