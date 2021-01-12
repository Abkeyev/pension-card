import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundColor: "#303030",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "48px",
        margin: "0 auto",
      },
      foot: {
        "& > div": {
          width: "40%",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundColor: "#303030",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "48px",
        margin: "0 auto",
      },
      foot: {
        "& > div": {
          width: "40%",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        padding: "24px 24px 12px",
      },
      foot: {
        flexWrap: "wrap",
        "& > div": {
          width: "100%",
          marginBottom: 12,
        },
      },
    },
  })
);

const Footer = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.foot}
        >
          <Grid item>
            <BccTypography type="p2" block color="#FAFAFA">
              © 2000 - 2020 АО 'Банк ЦентрКредит'
            </BccTypography>
            <BccTypography type="p2" block color="#FAFAFA">
              Все права защищены.
            </BccTypography>
          </Grid>
          <Grid item>
            <BccTypography type="p2" block color="#FAFAFA">
              Лицензия на проведение банковских и иных операций и деятельности
              на рынке ценных бумаг №1.2.25/195/34 от 28.01.2015 выданная НБ РК.
            </BccTypography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
