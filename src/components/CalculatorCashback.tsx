import React from "react";
import { Grid, Typography, Button, Paper, Slider } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import NumberFormat from "react-number-format";
import { BccTypography, BccButton, BccChip } from "./BccComponents";

const PrettoSlider = withStyles({
  root: {
    color: "#27AE60",
    height: 4,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#27AE60",
    border: "4px solid #FFFFFF",
    marginTop: -10,
    marginLeft: -12,
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.24)",
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 1px)",
  },
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "48px",
      },
      mobMA: {
        display: "inline-block",
        width: "max-content",
        marginRight: 12,
      },
      wrapper: {
        backgroundColor: "#FAFAFA",
      },
      sliderBtn: {
        width: 250,
        margin: "16px auto",
      },
      root: {
        padding: "72px 48px 48px",
        maxWidth: 1280,
        boxSizing: "border-box",
        margin: "0 auto",
      },
      tabButtonActive: {
        width: "215px",
        height: "36px",
        backgroundColor: "#27AE60",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none",
        "&:hover, &:active": {
          backgroundColor: "#27AE60",
          opacity: 0.8,
        },
      },
      tabButton: {
        width: "181px",
        height: "36px",
        backgroundColor: "#E8E8E8",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none",
      },
      result: {
        padding: "32px 67px 32px 67px",
        background: "#FFFFFF",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
        borderRadius: "8px",
        textAlign: "center",
      },
      resultTitle: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        color: "#B9B9B9",
      },
      resultSum: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "64px",
        lineHeight: "96px",
        color: "#141414",
        display: "block",
      },
      resultOrderCard: {
        width: "324px",
        height: "64px",
        backgroundColor: "#3F0259",
        borderRadius: "8px",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "20px",
        textTransform: "none",
        color: "#FFFFFF",
        "&:hover, &:active": {
          backgroundColor: "#3F0259",
          borderColor: "#3F0259",
          opacity: 0.8,
          boxShadow: "none",
          color: "#FFFFFF",
        },
      },
      monthSpending: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        color: "#141414",
        opacity: 0.7,
      },
      monthSpendingSum: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "32px",
        color: "#141414",
        marginTop: 12,
      },
      monthSpendingInterval: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        color: "#898989",
      },
      note: {
        color: "#80868C",
        opacity: 0.7,
        marginTop: 32,
      },
    },
    [theme.breakpoints.down("sm")]: {
      mobMA: {
        display: "inline-block",
        width: "max-content",
        marginRight: 12,
      },
      root: {
        padding: "32px 20px",
        width: "100%",
        margin: 0,
        "& > div": {
          padding: "0!important",
          margin: 0,
          width: "100%",
          marginBottom: 8,
          "& > div": {
            padding: "0!important",
            margin: 0,
            width: "100%",
            marginBottom: 8,
            "& > div": {
              padding: "0!important",
              margin: 0,
              width: "100%",
              marginBottom: 8,
            },
          },
        },
      },
      title: {
        marginBottom: 16,
      },
      tabButtonActive: {
        width: "160px",
        height: "30px",
        backgroundColor: "#27AE60",
        borderRadius: "2px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "10px",
        textTransform: "none",
        "&:hover, &:active": {
          backgroundColor: "#27AE60",
          opacity: 0.8,
        },
      },
      tabButton: {
        width: "120px",
        height: "30px",
        backgroundColor: "#E8E8E8",
        borderRadius: "2px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "10px",
        textTransform: "none",
      },
      result: {
        padding: "20px",
        background: "#FFFFFF",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
        borderRadius: "8px",
        "& > span": {
          display: "block",
        },
        "& > button": {
          width: "100%",
          maxWidth: 180,
          margin: "0 auto",
          display: "block",
        },
      },
      resultTitle: {
        color: "#80868C",
        marginBottom: 20,
      },
      resultSum: {
        fontWeight: "bold",
        fontSize: "28px",
        color: "#141414",
        marginBottom: 20,
        lineHeight: "28px",
      },
      resultOrderCard: {
        width: "100%",
        height: "40px",
        backgroundColor: "#3F0259",
        borderRadius: "8px",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        textTransform: "none",
        color: "#FFFFFF",
        "&:hover, &:active": {
          backgroundColor: "#3F0259",
          borderColor: "#3F0259",
          opacity: 0.8,
          boxShadow: "none",
          color: "#FFFFFF",
        },
      },
      monthSpending: {
        opacity: 0.7,
      },
      monthSpendingSum: {
        fontStyle: "normal",
        fontSize: 32,
        fontWeight: 500,
        color: "#141414",
        marginTop: 6,
      },
      monthSpendingInterval: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        color: "#898989",
      },
      note: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "#898989",
        opacity: 0.7,
        marginTop: 10,
        marginBottom: 24,
      },
    },
    [theme.breakpoints.down("xs")]: {
      root: {
        padding: "24px 24px 0",
      },
    },
  })
);

const CaclulatorCashBack = (props: any) => {
  const classes = useStyles({});
  const [spendingSum, setSpendingSum] = React.useState(200000);
  const [apteka, setApteka] = React.useState(true);

  return (
    <div className={classes.wrapper} ref={props.refProp}>
      <Grid container className={classes.root} spacing={6}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <BccTypography type="h2" className={classes.title}>
            Калькулятор кешбэка
          </BccTypography>
        </Grid>
        <Grid item>
          <BccChip
            type={apteka ? "filled" : "outlined"}
            color="secondary"
            className={classes.mobMA}
            onClick={() => setApteka(true)}
          >
            Аптеки 3%
          </BccChip>
          <BccChip
            type={!apteka ? "filled" : "outlined"}
            color="secondary"
            className={classes.mobMA}
            onClick={() => setApteka(false)}
          >
            Продукты 2%
          </BccChip>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container spacing={10} justify="space-between">
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <BccTypography type="p3" className={classes.monthSpending}>
                    Личные покупки в месяц
                  </BccTypography>
                </Grid>
                <Grid
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  className={classes.monthSpendingSum}
                >
                  <NumberFormat
                    value={spendingSum}
                    thousandSeparator={" "}
                    displayType="text"
                  />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <PrettoSlider
                    min={0}
                    max={400000}
                    step={10000}
                    valueLabelDisplay="off"
                    aria-label="pretto slider"
                    defaultValue={spendingSum}
                    onChange={(e, val) =>
                      setSpendingSum(val instanceof Array ? val[1] : val)
                    }
                  />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <Grid container justify="flex-start">
                    <Typography className={classes.monthSpendingInterval}>
                      0
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <Grid container justify="flex-end">
                    <Typography className={classes.monthSpendingInterval}>
                      400 000
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Paper elevation={0} className={classes.result}>
                <BccTypography
                  type="p2"
                  align="center"
                  className={classes.resultTitle}
                >
                  Вы заработаете с пенсионной картой
                </BccTypography>
                <BccTypography
                  type="h1"
                  align="center"
                  className={classes.resultSum}
                >
                  <NumberFormat
                    value={
                      apteka
                        ? Math.round(spendingSum * 0.03)
                        : Math.round(spendingSum * 0.02)
                    }
                    thousandSeparator={" "}
                    displayType="text"
                  />{" "}
                  ₸
                </BccTypography>
                <BccButton
                  variant="contained"
                  color="primary"
                  className={classes.sliderBtn}
                  onClick={() => props.scrollToOrder()}
                >
                  Открыть карту
                </BccButton>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CaclulatorCashBack;
