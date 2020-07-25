import React from "react";
import {
  Slider,
  Crediting,
  Refinancing,
  Calculator,
  MobileBanking,
  Tabs,
} from "../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { BccTypography } from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      position: "relative",
      margin: "0 auto 64px",
      padding: "32px 0 0",
      maxWidth: 1280,
      boxSizing: "border-box",
    },
  })
);

const CreditingPage = () => {
  const classes = useStyles({});
  return (
    <div className="main-page">
      <div className="container">
        <Slider
          steps={[
            {
              title: "Кредит наличными",
              desc: "до 7 000 000 ₸ за 15 минут",
              img: "/img/slide3.svg",
              btnText: "Оформить кредит",
            },
            {
              title: "Кредит наличными",
              desc: "до 7 000 000 ₸ за 15 минут",
              img: "/img/slide3.svg",
              btnText: "Оформить кредит",
            },
            {
              title: "Кредит наличными",
              desc: "до 7 000 000 ₸ за 15 минут",
              img: "/img/slide3.svg",
              btnText: "Оформить кредит",
            },
          ]}
        />
        <Crediting />
        <Refinancing />
        <Calculator />
        <MobileBanking />
        <Tabs title="Как погашать кредит?" />
      </div>
    </div>
  );
};

export default CreditingPage;
