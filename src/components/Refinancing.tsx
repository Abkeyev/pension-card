import React from "react";
import { Grid } from "@material-ui/core";
import { BccTypography, BccButton, BccChip } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outerContainer: {
      background: "#fafafa",
    },
    container: {
      maxWidth: 1280,
      margin: "0 auto",
      boxSizing: "border-box",
      padding: "0 0 48px",
    },
    card: {
      width: "40%",
      borderRadius: 8,
      padding: "30px 30px 30px calc(60% - 30px)",
      background: `url(${
        process.env.PUBLIC_URL + "/img/ref.png"
      }) no-repeat white`,
      boxShadow:
        "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04);",
      backgroundSize: "contain",
      backgroundPositionX: "left",
      display: "flex",
      flexDirection: "column",
    },
    readMore: {
      marginTop: "auto",
      minWidth: 300,
      width: "max-content",
    },
  })
);

const MobileBanking = (props: any) => {
  const classes = useStyles({});

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.card}>
          <BccTypography block type="h4" mb="16px">
            Рефинансирование кредитных займов
          </BccTypography>
          <BccTypography block type="p2" mb="65px">
            Смягчим условия кредитов любых банков
          </BccTypography>
          <BccButton
            variant="outlined"
            color="secondary"
            className={classes.readMore}
          >
            Подробнее
          </BccButton>
        </div>
      </div>
    </div>
  );
};

export default MobileBanking;
