import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundColor: "#fafaffa",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "48px",
        margin: "0 auto",
      },
      card: {
        padding: "0 32px",
        "& > div:first-child": {
          width: 400,
          "& > img": {
            width: "100%",
          },
        },
        "& > div:nth-child(2)": {
          marginLeft: 56,
          "& > div": {
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            "& > img": {
              marginRight: 16,
            },
          },
        },
      },
      btn: {
        minWidth: 320,
        marginTop: 8,
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundColor: "#ffffff",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "32px 20px",
        margin: "0 auto",
      },
      card: {
        "& > div:first-child": {
          width: 300,
          "& > img": {
            width: "100%",
          },
        },
        "& > div:nth-child(2)": {
          marginLeft: 28,
          "& > div": {
            marginBottom: 12,
            display: "flex",
            alignItems: "center",
            "& > img": {
              marginRight: 8,
            },
          },
        },
      },
      btn: {
        minWidth: 320,
        marginTop: 8,
      },
    },
    [theme.breakpoints.down("xs")]: {
      card: {
        flexWrap: "wrap",
        "& > div:first-child": {
          width: "100%",
          textAlign: "center",
          "& > img": {
            padding: "0 24px 24px",
            boxSizing: "border-box",
            width: "100%",
          },
        },
        "& > div:nth-child(2)": {
          marginLeft: 0,
          "& > div": {
            marginBottom: 20,
            display: "flex",
            alignItems: "flex-start",
            "& > img": {
              marginRight: 12,
            },
          },
        },
      },
      btn: {
        display: "block",
        width: "100%",
        maxWidth: "auto",
        textAlign: "center",
        minWidth: "auto",
        margin: "0 auto",
        marginTop: 8,
      },
    },
  })
);

const Card = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Grid
          container
          justify="flex-start"
          wrap="nowrap"
          className={classes.card}
        >
          <Grid item>
            <img src={process.env.PUBLIC_URL + "/img/card.svg"} />
          </Grid>
          <Grid item>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/card-mark.svg"} />{" "}
              <BccTypography type="p2">
                Оплачивайте покупки в аптеках и продуктовых магазинах одним
                касанием и получайте кэшбек 2% и 3% соответственно
              </BccTypography>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/card-mark.svg"} />{" "}
              <BccTypography type="p2">Осуществляйте переводы</BccTypography>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/card-mark.svg"} />{" "}
              <BccTypography type="p2">
                Снимайте наличные деньги в любом ближайшем банкомате бесплатно
              </BccTypography>
            </div>
            <BccButton
              className={classes.btn}
              variant="contained"
              onClick={() => props.scrollToOrder()}
            >
              Открыть карту
            </BccButton>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Card;
