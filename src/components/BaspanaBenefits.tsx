import React from "react";
import { Grid } from "@material-ui/core";
import { BccTypography, BccLink, BccButton } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        backgroundColor: "#FFFFFF",
      },
      innerContainer: {
        maxWidth: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "40px 20px",
      },
      title: {
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 28,
        color: "#141414",
        marginBottom: 40,
      },
      item: {
        background: "#FFFFFF",
        width: "100%",
        minHeight: 190,
        marginBottom: 30,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        padding: "20px",
      },
      itemImg: {
        marginRight: 10,
        width: "100%",
        "& > img": {
          height: 60,
          width: 60,
        },
      },
      itemImgTitle: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 24,
        color: "#141414",
        marginBottom: 10,
      },
      itemDesc: {
        fontFamily: "Roboto",
        fontWeight: "normal",
        fontSize: 16,
        color: "#141414",
        opacity: 0.7,
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#fafafa",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "46px 0",
      },
      title: {
        marginBottom: 40,
      },
      item: {
        background: "#FFFFFF",
        width: "calc(33% - 16px)",
        marginBottom: 30,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        padding: "20px",
        "& > div:first-child": {
          width: "calc(20% - 10px)",
          textAlign: "center",
          "& > img": {
            width: "100%",
            height: "auto",
          },
        },
        "& > div:last-child": {
          width: "calc(80% - 10px)",
        },
      },
      itemImg: {},
      itemImgTitle: {
        alignSelf: "center",
      },
      itemDesc: {
        marginTop: 10,
      },
    },
  })
);

const items = [
  {
    title: "до 15 лет",
    desc: "Максимальный срок кредитования",
    img: "/img/icons/contract.svg",
  },
  {
    title: "от 20%",
    desc: "Первоначальный взнос приобретаемого жилья",
    img: "/img/icons/loan-dollar.svg",
  },
  {
    title: "до 25 миллионов",
    desc: "Максимальная стоимость первичного жилья",
    img: "/img/icons/tenge-up.svg",
  },
];

const BaspanaBenefits = (props: any) => {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <BccTypography type="h2" block mb="46px">
          О программе
        </BccTypography>
        <Grid container justify="space-between" direction="row" wrap="nowrap">
          {items.map((i: any) => (
            <Grid
              container
              justify="space-between"
              direction="row"
              wrap="nowrap"
              className={classes.item}
            >
              <Grid item className={classes.itemImg}>
                <img src={process.env.PUBLIC_URL + i.img} />
              </Grid>
              <Grid item className={classes.itemImgTitle}>
                <BccTypography type="h4" block>
                  {i.title}
                </BccTypography>
                <BccTypography type="p2" block mt="10px">
                  {i.desc}
                </BccTypography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default BaspanaBenefits;
