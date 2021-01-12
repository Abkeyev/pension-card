import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundColor: "#ffffff",
      },
      title: {
        marginBottom: 48,
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "72px 48px",
        margin: "0 auto",
      },
      cards: {
        flexWrap: "nowrap",
        "& > div": {
          width: "calc(50% - 12px)",
          padding: "120px 24px 24px",
          color: "white",
          borderRadius: 8,
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundColor: "#ffffff",
      },
      title: {
        marginBottom: 24,
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "32px 20px",
        margin: "0 auto",
      },
      cards: {
        flexWrap: "nowrap",
        "& > div": {
          width: "calc(50% - 12px)",
          padding: "120px 24px 24px",
          color: "white",
          borderRadius: 8,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      cards: {
        flexWrap: "wrap",
        "& > div": {
          width: "100%",
          marginBottom: 16,
          paddingTop: 60,
          backgroundPositionY: "bottom!important",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          "& > span:last-child": {
            width: "100%",
          },
        },
      },
    },
  })
);

const Cashback2 = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <BccTypography type="h2" block className={classes.title}>
          Оплачивайте покупки и зарабатывайте кэшбэки
        </BccTypography>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cards}
        >
          <Grid
            item
            style={{
              background: `url(${
                process.env.PUBLIC_URL + "/img/cashback1.png"
              }) no-repeat`,
              backgroundSize: "cover",
            }}
          >
            <BccTypography type="h1" mr="8px">
              2%
            </BccTypography>
            <BccTypography type="h4">отдадим</BccTypography>
            <BccTypography type="p1" block>
              от суммы покупки продуктов
            </BccTypography>
          </Grid>
          <Grid
            item
            style={{
              background: `url(${
                process.env.PUBLIC_URL + "/img/cashback2.png"
              }) no-repeat`,
              backgroundSize: "cover",
            }}
          >
            <BccTypography type="h1" mr="8px">
              3%
            </BccTypography>
            <BccTypography type="h4">отдадим</BccTypography>
            <BccTypography type="p1" block>
              от суммы покупки в аптеках
            </BccTypography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Cashback2;
