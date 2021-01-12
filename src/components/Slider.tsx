import React, { Children } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccButton, BccTypography } from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        backgroundSize: "cover",
        position: "relative",
        backgroundColor: "#FFF8F2",
      },
      bgImg: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "calc(60vw - 56px)",
        "& > div": {
          background: `url(${
            process.env.PUBLIC_URL + "/img/bg.png"
          }) no-repeat`,
          backgroundSize: "cover",
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "calc(60vw - 56px)",
        },
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "0 48px",
        paddingBottom: "32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      slderTitle: {
        marginBottom: 20,
      },
      sliderSubTitle: {
        marginBottom: 32,
        lineHeight: "40px",
        color: "#4D565F",
      },
      sliderBtn: {
        height: 64,
        fontSize: 18,
        lineHeight: "64px",
        minWidth: 350,
      },
      slider: {
        width: "100%",
        overflowX: "hidden",
        "& > div": {
          width: "100%",
          transition: "all .7s ease-in-out",
          "& > div": {
            width: "100%",
          },
        },
      },
      slide: {
        "& > div:first-child": {
          width: "calc(50% - 16px)",
          padding: "90px 0 56px",
        },
      },
      sliderSteps: {
        position: "absolute",
        bottom: 0,
        width: 210,
        left: "calc(50% - 105px)",
        display: "flex",
        flexWrap: "nowrap",
        zIndex: 99,
        justifyContent: "space-between",
        alignItems: "center",
      },
      sliderStep: {
        cursor: "pointer",
        width: 10,
        marginRight: 16,
        height: 10,
        borderRadius: "50%",
        boxSizing: "border-box",
        border: "1px solid #27AE60",
        "&:hover": {
          backgroundColor: "#27AE60",
        },
      },
      active: {
        backgroundColor: "#27AE60",
      },
      slideLeft: {
        marginRight: 64,
        cursor: "pointer",
      },
      slideRight: {
        marginLeft: 48,
        cursor: "pointer",
      },
      cardsText: {
        "& > div": {
          width: "calc(50% - 12px)",
          marginBottom: 48,
        },
        "& > div:first-child": {
          marginBottom: 28,
        },
        "& > div:nth-child(2)": {
          marginBottom: 28,
        },
      },
      header: {
        paddingTop: 48,
      },
    },
    [theme.breakpoints.down("md")]: {
      outerContainer: {
        backgroundSize: "cover",
        position: "relative",
      },
      bgImg: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "calc(60vw - 56px)",
        "& > div": {
          background: `url(${
            process.env.PUBLIC_URL + "/img/bg.png"
          }) no-repeat`,
          backgroundSize: "cover",
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "calc(60vw - 56px)",
        },
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "0 48px",
        paddingBottom: "32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      slderTitle: {
        marginBottom: 24,
      },
      sliderSubTitle: {
        marginBottom: 48,
        color: "#4D565F",
      },
      sliderBtn: {
        minWidth: 300,
        height: 64,
        fontSize: 18,
        lineHeight: "64px",
      },
      slider: {
        width: "100%",
        overflowX: "hidden",
        "& > div": {
          width: "100%",
          transition: "all .7s ease-in-out",
          "& > div": {
            width: "100%",
          },
        },
      },
      slide: {
        "& > div:first-child": {
          width: "calc(50% - 16px)",
          padding: "80px 0 92px",
        },
      },
      sliderSteps: {
        position: "absolute",
        bottom: 0,
        width: 210,
        left: "calc(50% - 105px)",
        display: "flex",
        flexWrap: "nowrap",
        zIndex: 99,
        justifyContent: "space-between",
        alignItems: "center",
      },
      sliderStep: {
        cursor: "pointer",
        width: 10,
        marginRight: 16,
        height: 10,
        borderRadius: "50%",
        boxSizing: "border-box",
        border: "1px solid #27AE60",
        "&:hover": {
          backgroundColor: "#27AE60",
        },
      },
      active: {
        backgroundColor: "#27AE60",
      },
      slideLeft: {
        marginRight: 64,
        cursor: "pointer",
      },
      slideRight: {
        marginLeft: 48,
        cursor: "pointer",
      },
      cardsText: {
        "& > div": {
          width: "calc(50% - 12px)",
          marginBottom: 48,
        },
        "& > div:first-child": {
          marginBottom: 24,
        },
        "& > div:nth-child(2)": {
          marginBottom: 24,
        },
      },
      header: {
        paddingTop: 48,
      },
    },
    [theme.breakpoints.down("sm")]: {
      sliderBtn: {
        minWidth: 250,
      },
      bgImg: {
        display: "block",
        width: "100%",
        position: "relative",
        height: 260,
        "& > div": {
          width: "100%",
          background: `url(${
            process.env.PUBLIC_URL + "/img/bg_m.png"
          }) no-repeat`,
          backgroundSize: "cover",
          backgroundPositionY: "bottom",
          backgroundPositionX: "center",
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      slide: {
        "& > div:first-child": {
          width: "100%",
          padding: "16px 0 0",
        },
      },
      container: {
        padding: "0 20px",
      },
      cardsText: {
        "& > div": {
          width: "100%",
          marginBottom: 24,
        },
        "& > div:first-child": {
          marginBottom: 12,
        },
        "& > div:nth-child(2)": {
          marginBottom: 12,
          order: 2,
        },
      },
      header: {
        paddingTop: 24,
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        height: "auto",
      },
      slderTitle: {
        marginBottom: 12,
        fontSize: 22,
      },
      sliderBtn: {
        height: 56,
        fontSize: 16,
        minWidth: "auto",
        width: "100%",
        boxSizing: "border-box",
        bottom: "initial",
        position: "relative",
      },
      sliderSteps: {
        width: 94,
        left: "calc(50% - 47px)",
      },
      sliderSubTitle: {
        marginBottom: 12,
        fontSize: 16,
      },
      cardsText: {
        "& > div": {
          width: "100%",
          marginBottom: 12,
          "& > span": {
            fontWeight: 400,
            "& > br": {
              display: "none",
            },
          },
        },
        "& > div:nth-child(2n+1)": {
          "& > span": {
            display: "inline-block",
            marginRight: 8,
          },
        },
      },
      header: {
        display: "none",
      },
      slideRight: { display: "none" },
      slideLeft: { display: "none" },
      slide: {
        flexDirection: "column-reverse",
        flexWrap: "wrap",
        "& > div:first-child": {
          width: "100%",
          padding: "16px 0 0",
        },
      },
    },
  })
);

interface SliderStepsProps {
  title: string;
  desc: any;
  img: string;
  btnText: string;
  bgColor?: string;
}

interface SliderProps {
  steps: Array<SliderStepsProps> | SliderStepsProps;
  scrollToOrder: any;
}

const Slider = (props: SliderProps) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.bgImg}>
        <div></div>
      </div>
      <div className={classes.container}>
        <div className={classes.slider}>
          <div>
            <Grid container className={classes.header}>
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/img/logo.svg"} />
              </Grid>
            </Grid>
            {!Array.isArray(props.steps) && (
              <Grid
                container
                justify="space-between"
                wrap="nowrap"
                className={classes.slide}
              >
                <Grid item>
                  <BccTypography type="h2" block className={classes.slderTitle}>
                    {props.steps.title}
                  </BccTypography>
                  <BccTypography
                    type="h3"
                    weight="normal"
                    block
                    className={classes.sliderSubTitle}
                  >
                    Оформите пенсионную карту — <br />
                    Остальное мы сделаем за вас!
                  </BccTypography>
                  <Grid
                    container
                    justify="space-between"
                    className={classes.cardsText}
                  >
                    <Grid item>
                      <BccTypography type="h5" mb="4px" block>
                        Кэшбэк 3%
                      </BccTypography>
                      <BccTypography color="#4D565F" type="p2" block>
                        💊 Аптеки
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography type="p2" block>
                        Бесплатный выпуск <br />и обслуживание <b>всегда</b>
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography type="h6" mb="4px" block>
                        Кэшбэк 2%
                      </BccTypography>
                      <BccTypography color="#4D565F" type="p2" block>
                        🛒 Продукты
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography type="p2" block>
                        Автоматическая передача реквизитов клиента в ЦОН
                      </BccTypography>
                    </Grid>
                  </Grid>
                  <BccButton
                    variant="contained"
                    color="primary"
                    onClick={() => props.scrollToOrder()}
                    className={classes.sliderBtn}
                  >
                    {props.steps.btnText}
                  </BccButton>
                </Grid>
                <Grid item></Grid>
              </Grid>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
