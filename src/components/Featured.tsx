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
    title: {
      marginBottom: 32,
    },
    cardsText: {
      "& > div": {
        width: "calc(50% - 8px)",
      },
    },
    cards: {
      marginBottom: 24,
      "& > div": {
        width: "calc(33% - 16px)",
      },
    },
    cardsSecond: {
      "& > div": {
        width: "calc(50% - 12px)",
      },
    },
  })
);

const Featured = (props: any) => {
  const location = useLocation();
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <BccTypography type="h1" block className={classes.title}>
          Рекомендуемые продукты
        </BccTypography>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cards}
        >
          <Grid item>
            <BccCard
              title="#IRonCard"
              btnText="Оформить карту"
              variant="vertical"
              img="ironcard.png"
              chips={[
                {
                  title: "Кредитная карта",
                  type: "outlined",
                  color: "secondary",
                },
              ]}
              text={
                <Grid
                  container
                  justify="space-between"
                  className={classes.cardsText}
                >
                  <Grid item>
                    <BccTypography type="p2" weight="medium" block>
                      до 10%
                    </BccTypography>
                    <BccTypography type="p3" block>
                      кэшбэка с покупок
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <BccTypography type="p2" weight="medium" block>
                      Бесплатно
                    </BccTypography>
                    <BccTypography type="p3" block>
                      Выпуск и обслуживание
                    </BccTypography>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
          <Grid item>
            <BccCard
              title="#IRonCard"
              btnText="Оформить карту"
              variant="vertical"
              img="ironcard.png"
              chips={[
                {
                  title: "Кредитная карта",
                  type: "outlined",
                  color: "secondary",
                },
              ]}
              text={
                <Grid
                  container
                  justify="space-between"
                  className={classes.cardsText}
                >
                  <Grid item>
                    <BccTypography type="p2" weight="medium" block>
                      до 10%
                    </BccTypography>
                    <BccTypography type="p3" block>
                      кэшбэка с покупок
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <BccTypography type="p2" weight="medium" block>
                      Бесплатно
                    </BccTypography>
                    <BccTypography type="p3" block>
                      Выпуск и обслуживание
                    </BccTypography>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
          <Grid item>
            <BccCard
              title="#IRonCard"
              btnText="Оформить карту"
              variant="vertical"
              img="ironcard.png"
              chips={[
                {
                  title: "Кредитная карта",
                  type: "outlined",
                  color: "secondary",
                },
              ]}
              text={
                <Grid
                  container
                  justify="space-between"
                  className={classes.cardsText}
                >
                  <Grid item>
                    <BccTypography type="p2" weight="medium" block>
                      до 10%
                    </BccTypography>
                    <BccTypography type="p3" block>
                      кэшбэка с покупок
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <BccTypography type="p2" weight="medium" block>
                      Бесплатно
                    </BccTypography>
                    <BccTypography type="p3" block>
                      Выпуск и обслуживание
                    </BccTypography>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cardsSecond}
        >
          <Grid item>
            <BccCard
              title="Автокредит"
              btnText="Оставить заявку"
              variant="horizontal"
              img="autocredit.png"
              chips={[
                { title: "Кредит", type: "outlined", color: "secondary" },
              ]}
              text={
                <BccTypography type="p2" weight="medium" block>
                  на покупку нового авто со ставкой 4%
                </BccTypography>
              }
            />
          </Grid>
          <Grid item>
            <BccCard
              title="Автокредит"
              btnText="Оставить заявку"
              variant="horizontal"
              img="autocredit.png"
              chips={[
                { title: "Кредит", type: "outlined", color: "secondary" },
              ]}
              text={
                <BccTypography type="p2" weight="medium" block>
                  на покупку нового авто со ставкой 4%
                </BccTypography>
              }
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Featured;
