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
      backgroundColor: "#FAFAFA",
    },
    container: {
      maxWidth: 1280,
      padding: "48px 0",
      margin: "0 auto",
    },
    contacts: {
      "& > div": {
        width: "calc(50% - 12px)",
        background: "#FFFFFF",
        padding: 32,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
      },
    },
  })
);

const Offer = (props: any) => {
  const location = useLocation();
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.contacts}
        >
          <Grid item>
            <BccTypography type="h5" block mb="8px">
              Новый автомобиль под 4% годовых
            </BccTypography>
            <BccTypography type="p2l" block color="#4D565F">
              Новейшие авто отечественного производства Без комиссий Банка!
            </BccTypography>
          </Grid>
          <Grid item>
            <BccTypography type="h5" block mb="8px">
              На покупку нового автомобиля в автосалоне
            </BccTypography>
            <BccTypography type="p2l" block color="#4D565F">
              Новый автомобиль в автосалонов-партнерах сроком до 7 лет
            </BccTypography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Offer;
