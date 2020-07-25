import React from "react";
import { Slider, Best, BusinessCards, Popular, News } from "../components";

const BusinessPage = () => {
  return (
    <div className="main-page">
      <div className="container">
        <Slider
          steps={[
            {
              title: "Нужна гарантия для тендера?",
              desc: "Получайте тендерные гарантии от 20 минут",
              img: "/img/slide2.svg",
              btnText: "Заполнить заявку",
            },
            {
              title: "Нужна гарантия для тендера?",
              desc: "Получайте тендерные гарантии от 20 минут",
              img: "/img/slide2.svg",
              btnText: "Заполнить заявку",
            },
            {
              title: "Нужна гарантия для тендера?",
              desc: "Получайте тендерные гарантии от 20 минут",
              img: "/img/slide2.svg",
              btnText: "Заполнить заявку",
            },
          ]}
        />
        <Best />
        <BusinessCards />
        <Popular />
        <News />
      </div>
    </div>
  );
};

export default BusinessPage;
