import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccChip, BccCard } from "./BccComponents";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
    outerContainer: {
      backgroundColor: "#FFFFFF",
    },
    container: {
      maxWidth: 1280,
      padding: "64px 0 104px",
      margin: "0 auto",
      position: "relative",
    },
    title: {},
    cardsText: {
      "& > div": {
        width: "calc(50% - 8px)",
      },
    },

    cardsWrap: {
      width: "100%",
      overflowX: "hidden",
    },
    cards: {
      width: "calc((410px * 5) + (4 * 24px))",
      marginBottom: 24,
      marginLeft: 0,
      transition: "margin-left .5s ease-in-out",
      "& > div": {
        marginRight: 24,
        width: "410px",
      },
      "& > div:last-child": {
        marginRight: 0,
      },
    },
    cardsSecond: {
      "& > div": {
        width: "calc(50% - 12px)",
      },
    },
    leftArrow: {
      position: "relative",
      height: 40,
      width: 40,
      borderRadius: "50%",
      marginRight: 20,
      border: "1px solid #4D565F",
      display: "inline-block",
      textAlign: "center",
      lineHeight: "42px",
      boxSizing: "border-box",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#4D565F",
        "& > svg > path": {
          stroke: "white",
        },
      },
      "& > svg": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "& > path": {
          stroke: "#4D565F",
        },
      },
    },
    rightArrow: {
      position: "relative",
      height: 40,
      width: 40,
      borderRadius: "50%",
      border: "1px solid #4D565F",
      display: "inline-block",
      textAlign: "center",
      lineHeight: "42px",
      boxSizing: "border-box",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#4D565F",
        "& > svg > path": {
          stroke: "white",
        },
      },
      "& > svg": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "& > path": {
          stroke: "#4D565F",
        },
      },
    },
    usefulHead: {
      marginBottom: 32,
    },
    sliderSteps: {
      position: "absolute",
      bottom: 64,
      width: 62,
      left: "calc(50% - 31px)",
      display: "flex",
      flexWrap: "nowrap",
      zIndex: 99,
      justifyContent: "space-between",
      alignItems: "center",
      "& > div": {
        cursor: "pointer",
        width: 10,
        marginRight: 16,
        height: 10,
        borderRadius: "50%",
        boxSizing: "border-box",
        border: "1px solid #4D565F",
        "&:hover": {
          backgroundColor: "#4D565F",
        },
      },
      "& > div:last-child": {
        marginRight: 0,
      },
    },
    active: {
      backgroundColor: "#4D565F",
    },
  })
);

const Useful = (props: any) => {
  const location = useLocation();
  const classes = useStyles({});
  const [slide, setSlide] = React.useState(0);

  const steps = [
    {
      title: "Онлайн переводы",
      desc: "Удобные и безопасные переводы с карты на карту",
      btnText: "Перевести деньги",
      img: "/img/slide1.svg",
    },
    {
      title: "Баспана Хит1",
      desc: "Собственное жильё – это легко!",
      img: "/img/slide1.svg",
    },
    {
      title: "Баспана Хит2",
      desc: "Собственное жильё – это легко!",
      img: "/img/slide1.svg",
    },
  ];

  const slideArrow = (isNext: boolean) => {
    if (isNext) {
      if (slide + 1 === 3) {
        setSlide(0);
      } else {
        setSlide(slide + 1);
      }
    } else {
      if (slide - 1 === -1) {
        setSlide(2);
      } else {
        setSlide(slide - 1);
      }
    }
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          alignItems="center"
          className={classes.usefulHead}
        >
          <Grid item>
            <BccTypography type="h1" block className={classes.title}>
              Полезное
            </BccTypography>
          </Grid>
          <Grid item>
            <span
              className={classes.leftArrow}
              onClick={() => slideArrow(false)}
            >
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.59985 1.59998L1.19985 7.99998L7.59985 14.4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span
              className={classes.rightArrow}
              onClick={() => slideArrow(true)}
            >
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.40009 14.4L7.80009 8.00002L1.40009 1.60002"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </Grid>
        </Grid>

        <div className={classes.sliderSteps}>
          {steps.map((step: any, index: number) => {
            return (
              <div
                className={`${classes.sliderStep} ${
                  slide === index ? classes.active : ""
                }`}
                onClick={() => setSlide(index)}
              ></div>
            );
          })}
        </div>
        <div className={classes.cardsWrap}>
          <Grid
            container
            justify="space-between"
            wrap="nowrap"
            className={classes.cards}
            style={{ marginLeft: `-${432 * slide}px` }}
          >
            <Grid item>
              <BccCard
                title="Онлайн переводы"
                btnText="Перевести деньги"
                variant="vertical"
                img="useful1.png"
                chips={[
                  { title: "Переводы", type: "outlined", color: "secondary" },
                ]}
                text={
                  <BccTypography type="p2" weight="medium" block>
                    Удобные и безопасные переводы с карты на карту
                  </BccTypography>
                }
              />
            </Grid>
            <Grid item>
              <BccCard
                title="CenterGarant"
                btnText="Узнать больше"
                variant="vertical"
                img="useful2.png"
                chips={[
                  { title: "Гарантия", type: "outlined", color: "secondary" },
                ]}
                text={
                  <BccTypography type="p2" weight="medium" block>
                    Новые гарантии от Банка ЦентрКредит
                  </BccTypography>
                }
              />
            </Grid>
            <Grid item>
              <BccCard
                title="Мобильный POS терминал"
                btnText="Узнать больше"
                variant="vertical"
                img="ironcard.png"
                chips={[{ title: "Акция", type: "outlined", color: "sale" }]}
                text={
                  <BccTypography type="p2" weight="medium" block>
                    Бизнес в кармане
                  </BccTypography>
                }
              />
            </Grid>
            <Grid item>
              <BccCard
                title="Мобильный POS терминал"
                btnText="Узнать больше"
                variant="vertical"
                img="ironcard.png"
                chips={[{ title: "Акция", type: "outlined", color: "sale" }]}
                text={
                  <BccTypography type="p2" weight="medium" block>
                    Бизнес в кармане
                  </BccTypography>
                }
              />
            </Grid>
            <Grid item>
              <BccCard
                title="Мобильный POS терминал"
                btnText="Узнать больше"
                variant="vertical"
                img="ironcard.png"
                chips={[{ title: "Акция", type: "outlined", color: "sale" }]}
                text={
                  <BccTypography type="p2" weight="medium" block>
                    Бизнес в кармане
                  </BccTypography>
                }
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Useful;
