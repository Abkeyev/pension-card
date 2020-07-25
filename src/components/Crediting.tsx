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
    cards: {
      marginBottom: 24,
      "& > div": {
        width: "calc(33% - 16px)",
      },
    },
  })
);

const Crediting = (props: any) => {
  const location = useLocation();
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <BccTypography type="h1" block mb="32px">
          Кредитование частных лиц
        </BccTypography>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cards}
        >
          <Grid item>
            <BccCard
              title="Простой под залог"
              btnText="Оформить кредит"
              variant="vertical"
              fullImg
              img="pop2.png"
              chips={[
                {
                  title: "Кредит",
                  type: "outlined",
                  color: "secondary",
                },
              ]}
              text={
                <>
                  <BccTypography
                    type="p2"
                    weight="medium"
                    block
                    mb="20px"
                    color="#80868C"
                  >
                    Выдача кредита под залог денег
                  </BccTypography>
                  <Grid
                    container
                    justify="space-between"
                    className={classes.cardsText}
                  >
                    <Grid item>
                      <BccTypography type="p3" block mb="4px">
                        Макс. сумма
                      </BccTypography>
                      <BccTypography type="p2" weight="medium" block>
                        95%
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography type="p3" block mb="4px">
                        Ставка
                      </BccTypography>
                      <BccTypography type="p2" weight="medium" block>
                        от 17%
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography type="p3" block mb="4px">
                        Макс. срок
                      </BccTypography>
                      <BccTypography type="p2" weight="medium" block>
                        10 лет
                      </BccTypography>
                    </Grid>
                  </Grid>
                </>
              }
            />
          </Grid>

          <Grid item>
            <BccCard
              title="Простой под залог"
              btnText="Оформить кредит"
              variant="vertical"
              fullImg
              img="pop1.png"
              chips={[
                {
                  title: "Кредит",
                  type: "outlined",
                  color: "secondary",
                },
              ]}
              text={
                <>
                  <BccTypography
                    type="p2"
                    weight="medium"
                    block
                    mb="20px"
                    color="#80868C"
                  >
                    Выдача кредита под залог денег
                  </BccTypography>
                  <Grid
                    container
                    justify="space-between"
                    className={classes.cardsText}
                  >
                    <Grid item>
                      <BccTypography type="p3" block mb="4px">
                        Макс. сумма
                      </BccTypography>
                      <BccTypography type="p2" weight="medium" block>
                        95%
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography type="p3" block mb="4px">
                        Ставка
                      </BccTypography>
                      <BccTypography type="p2" weight="medium" block>
                        от 17%
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography type="p3" block mb="4px">
                        Макс. срок
                      </BccTypography>
                      <BccTypography type="p2" weight="medium" block>
                        10 лет
                      </BccTypography>
                    </Grid>
                  </Grid>
                </>
              }
            />
          </Grid>

          <Grid item>
            <BccCard
              title="Простой под залог"
              btnText="Оформить кредит"
              variant="vertical"
              fullImg
              img="pop3.png"
              chips={[
                {
                  title: "Кредит",
                  type: "outlined",
                  color: "secondary",
                },
              ]}
              text={
                <>
                  <BccTypography
                    type="p2"
                    weight="medium"
                    block
                    mb="20px"
                    color="#80868C"
                  >
                    Выдача кредита под залог денег
                  </BccTypography>
                  <Grid
                    container
                    justify="space-between"
                    className={classes.cardsText}
                  >
                    <Grid item>
                      <BccTypography type="p3" block mb="4px">
                        Макс. сумма
                      </BccTypography>
                      <BccTypography type="p2" weight="medium" block>
                        95%
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography type="p3" block mb="4px">
                        Ставка
                      </BccTypography>
                      <BccTypography type="p2" weight="medium" block>
                        от 17%
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography type="p3" block mb="4px">
                        Макс. срок
                      </BccTypography>
                      <BccTypography type="p2" weight="medium" block>
                        10 лет
                      </BccTypography>
                    </Grid>
                  </Grid>
                </>
              }
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Crediting;
