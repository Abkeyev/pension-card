import React from "react";
import { Grid } from "@material-ui/core";
import { BccTypography, BccButton, BccChip } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        background: "#fafafa",
      },
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "48px 0",
      },
      card: {
        width: "40%",
        borderRadius: 8,
        padding: "20px calc(60% - 20px) 30px 20px",
        background: `url(${
          process.env.PUBLIC_URL + "/img/sb.svg"
        }) no-repeat white`,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04);",
        backgroundSize: "contain",
        backgroundPositionX: "right",
      },
      title: {
        marginBottom: 10,
      },
      subTitle: {
        marginBottom: 30,
      },
      as: {
        marginRight: 20,
      },
    },
  })
);

const MobileBanking = (props: any) => {
  const classes = useStyles({});

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.card}>
          <BccChip type="outlined" color="secondary" mb="20px">
            Мобильный банкинг
          </BccChip>
          <BccTypography block type="h3" className={classes.title}>
            MobileBanking
          </BccTypography>
          <BccTypography block type="p2" className={classes.subTitle}>
            Управляй банковскими счетами онлайн через браузер или приложение
          </BccTypography>
          <img
            className={classes.as}
            src={process.env.PUBLIC_URL + "/img/as.svg"}
          />
          <img src={process.env.PUBLIC_URL + "/img/gp.svg"} />
        </div>
      </div>
    </div>
  );
};

export default MobileBanking;
