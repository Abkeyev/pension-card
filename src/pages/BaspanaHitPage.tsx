import React from "react";
import {
  Slider,
  MobileBanking,
  BaspanaBenefits,
  Order,
  BaspanaCalculator,
  Tabs,
} from "../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccLink,
  BccBreadcrumbs,
} from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      position: "relative",
      margin: "0 auto 64px",
      padding: "32px 0 0",
      maxWidth: 1280,
      boxSizing: "border-box",
    },
    container: {
      position: "relative",
      backgroundColor: "white",
      padding: "16px 0",
      boxSizing: "border-box",
      marginTop: 16,
      paddingBottom: 16,
      "& > nav": {
        maxWidth: 1280,
        margin: "0 auto",
      },
    },
  })
);

const BaspanaHitPage = () => {
  const classes = useStyles({});
  return (
    <div className="main-page">
      <div className="container">
        <div className={classes.container}>
          <BccBreadcrumbs>
            <BccTypography type="p3" td="underline">
              Частным лицам
            </BccTypography>
            <BccTypography type="p3" td="underline">
              Ипотека
            </BccTypography>
          </BccBreadcrumbs>
        </div>

        <Slider
          steps={{
            title: "Баспана Хит",
            bgColor: "white",
            desc: (
              <BccTypography type="p1">
                Собственное жильё – это легко!
              </BccTypography>
            ),
            img: "/img/slide1.svg",
            btnText: "Рассчитать ипотеку",
          }}
        />
        <BaspanaBenefits />
        <BaspanaCalculator />
        <Order title="Оформить ипотеку" />
        <MobileBanking />
        <Tabs title="Дополнительно" />
      </div>
    </div>
  );
};

export default BaspanaHitPage;
