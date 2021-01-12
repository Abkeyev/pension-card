import React from "react";
import {
  Slider,
  Tabs,
  HowTo,
  Card,
  HowToGet,
  MobileApp,
  CallUs,
  Order,
  Cashback,
  Cashback2,
  CalculatorCashback,
  Footer,
} from "../components";
import { animateScroll } from "react-scroll";

const MainPage = () => {
  const mobileRef: any = React.useRef(null);
  const scrollToMobileRef = () => {
    animateScroll.scrollTo(mobileRef.current.offsetTop);
  };
  const orderRef: any = React.useRef(null);
  const scrollToOrderRef = () => {
    animateScroll.scrollTo(orderRef.current.offsetTop);
  };
  const calcRef: any = React.useRef(null);
  const scrollToCalcRef = () => {
    animateScroll.scrollTo(calcRef.current.offsetTop);
  };
  return (
    <div className="main-page">
      <div className="container">
        <Slider
          steps={{
            title: "Пенсионная карта",
            desc: "",
            img: "/img/bg.svg",
            btnText: "Открыть карту",
          }}
          scrollToOrder={scrollToOrderRef}
        />
        <Tabs scrollToMobile={scrollToMobileRef} />
        <Cashback scrollToCalc={scrollToCalcRef} />
        <Cashback2 />
        <CalculatorCashback
          refProp={calcRef}
          scrollToOrder={scrollToOrderRef}
        />
        <HowTo />
        <Card scrollToOrder={scrollToOrderRef} />
        <HowToGet />
        <Order refProp={orderRef} scrollToOrder={scrollToOrderRef} />
        <MobileApp refProp={mobileRef} />
        <CallUs />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
