import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccChip, BccCard } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundColor: "#ffffff",
      },
      mobChip: {
        display: "none",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "72px 48px 24px",
        margin: "0 auto",
      },
      title: {
        marginBottom: 32,
      },
      cards: {
        position: "relative",
        marginBottom: 54,
        padding: "54px 24px",
        border: "1px solid #DBDBDB",
        color: "#4D565F",
        borderRadius: 10,
        "& > div": {
          width: "calc(33% - 32px)",
          "& > div:first-child": {
            "& > img": {
              width: 42,
            },
          },
          "& > div:last-child": {
            marginLeft: 24,
          },
        },
      },
      topText: {
        position: "absolute",
        top: -14,
        padding: "0 40px 0 20px",
        left: 54,
        backgroundColor: "#ffffff",
        "& > span": {
          color: "#C35BC0",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      topText: {
        display: "none",
      },
      mobChip: {
        display: "flex",
        flexWrap: "nowrap",
        marginBottom: 20,
        overflowX: "scroll",
        "& > span": {
          marginRight: 10,
          whiteSpace: "nowrap",
        },
        "& > span:last-child": {
          marginRight: 0,
        },
      },
      outerContainer: {
        backgroundColor: "#ffffff",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "32px 20px 0",
        margin: "0 auto",
        "& > div:nth-child(3)": {
          display: "none",
        },
        "& > div:nth-child(4)": {
          display: "none",
        },
      },
      title: {
        marginBottom: 32,
      },
      cards: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        "& > div": {
          background: "#FFFFFF",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          marginBottom: 20,
          padding: 16,
          "& > div:first-child": {
            width: 48,
            height: 48,
            background: "#FFFFFF",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            padding: 12,
            "& > img": {
              width: 24,
              height: 24,
            },
          },
          "& > div:last-child": {
            marginLeft: 24,
            width: "100%",
            "& > span:first-child": {
              lineHeight: "48px",
            },
            "& > span:last-child": {
              width: "calc(100% + 72px)",
              marginLeft: -72,
            },
          },
        },
      },
    },
  })
);

const HowTo = (props: any) => {
  const classes = useStyles({});
  const [firstTime, setFirstTime] = React.useState(true);
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <BccTypography type="h2" block className={classes.title}>
          Как перевести пенсию
        </BccTypography>
        <div className={classes.mobChip}>
          <BccChip
            type={firstTime ? "filled" : "outlined"}
            onClick={() => setFirstTime(true)}
            color="secondary"
          >
            Впервые получаю пенсию
          </BccChip>
          <BccChip
            type={!firstTime ? "filled" : "outlined"}
            onClick={() => setFirstTime(false)}
            color="secondary"
          >
            Уже получаю пенсию
          </BccChip>
        </div>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cards}
          style={{ display: firstTime ? "flex" : "" }}
        >
          <BccTypography type="h4" className={classes.topText}>
            Клиенты, которые <span>впервые</span> получают пенсию
          </BccTypography>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/t1.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="20px">
                Оформите карту
              </BccTypography>
              <BccTypography type="p2l" block>
                В любом ближайшем{" "}
                <a
                  target="_blank"
                  href="https://www.bcc.kz/socialcard/"
                  style={{ color: "#C35BC0" }}
                >
                  отделении
                </a>{" "}
                Банка за 10 минут
              </BccTypography>
            </Grid>
          </Grid>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/t2.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="20px">
                Передача реквизитов
              </BccTypography>
              <BccTypography type="p2l" block>
                Банк в автоматическом режиме передает Ваши реквизиты в ЦОН
              </BccTypography>
            </Grid>
          </Grid>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/t3.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="20px">
                Получение пенсии
              </BccTypography>
              <BccTypography type="p2l" block>
                Получайте пенсию не выходя из дома
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={`${classes.cards} ${classes.secondCard}`}
          style={{ display: !firstTime ? "flex" : "" }}
        >
          <BccTypography type="h4" className={classes.topText}>
            Клиенты, которые <span>уже получают</span> пенсию
          </BccTypography>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/t1.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="20px">
                Оформите карту
              </BccTypography>
              <BccTypography type="p2l" block>
                В любом ближайшем{" "}
                <a
                  target="_blank"
                  href="https://www.bcc.kz/socialcard/"
                  style={{ color: "#C35BC0" }}
                >
                  отделении
                </a>{" "}
                Банка за 10 минут
              </BccTypography>
            </Grid>
          </Grid>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/t4.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="20px">
                Передача реквизитов
              </BccTypography>
              <BccTypography type="p2l" block>
                Клиенту необходимо передать реквизиты в ЦОН, в связи с
                изменениями реквизитов для получения выплат
              </BccTypography>
            </Grid>
          </Grid>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/t3.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="20px">
                Получение пенсии
              </BccTypography>
              <BccTypography type="p2l" block>
                Получайте пенсию не выходя из дома
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HowTo;
