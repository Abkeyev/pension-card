import React, { Children } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccButton, BccTypography } from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundSize: "cover",
        position: "relative",
      },
      bgImg: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flexWrap: "nowrap",
        display: "flex",
        "& > div:first-child": {
          width: "50vw",
          backgroundColor: "#FAFAFA",
        },
        "& > div:nth-child(2)": {
          width: "50vw",
          background: `url(${
            process.env.PUBLIC_URL + "/img/cashback.png"
          }) no-repeat`,
          backgroundSize: "cover",
        },
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "64px 64px 72px",
        maxWidth: 1280,
        boxSizing: "border-box",
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        "& > div": {
          width: "40%",
        },
      },
      title: {
        marginBottom: 32,
      },
      subTitle: {
        marginBottom: 12,
      },
      desc: {
        marginBottom: 32,
      },
      btn: {
        minWidth: 280,
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundSize: "cover",
        position: "relative",
        width: "100vw",
      },
      title: {
        lineHeight: "20px",
        fontSize: 18,
        marginBottom: 20,
      },
      cashBlock: {
        background: "#FFFFFF",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
      },
      btn: {
        marginTop: 8,
        minWidth: 280,
      },
      subTitle: {
        marginBottom: 4,
      },
      bgImg: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        "& > div:first-child": {
          width: "50vw",
        },
        "& > div:nth-child(2)": {
          width: "50vw",
          background: `url(${
            process.env.PUBLIC_URL + "/img/cashback.png"
          }) no-repeat`,
          backgroundSize: "cover",
        },
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "24px",
        paddingBottom: "32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
    },
    [theme.breakpoints.down("xs")]: {
      btn: {
        width: "100%",
      },
    },
  })
);

const Cashback = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.bgImg}>
        <div></div>
        <div></div>
      </div>
      <div className={classes.container}>
        <div>
          <BccTypography type="h3" block mb="" className={classes.title}>
            Кэшбек
          </BccTypography>
          <div className={classes.cashBlock}>
            <BccTypography type="h5" block className={classes.subTitle}>
              Что такое кэшбек?
            </BccTypography>
            <BccTypography type="p2l" block className={classes.desc}>
              Бонусы, которые вы получаете, при оплате картой. Кэшбек мы даём
              живыми деньгами.
            </BccTypography>
          </div>
          <div className={classes.cashBlock}>
            <BccTypography type="h5" block className={classes.subTitle}>
              Как получить кэшбек?
            </BccTypography>
            <BccTypography type="p2l" block className={classes.desc}>
              1. Оплатите покупку картой в любом удобном магазине или аптеке
              <br />
              2. Получите кэшбек
            </BccTypography>
          </div>
          <BccButton
            variant="outlined"
            color="secondary"
            className={classes.btn}
            onClick={() => props.scrollToCalc()}
          >
            Посчитать кэшбек
          </BccButton>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Cashback;
