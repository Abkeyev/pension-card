import React from "react";
import { Tabs } from "../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, InputAdornment } from "@material-ui/core";
import {
  BccTypography,
  BccInput,
  BccBreadcrumbs,
  BccButton,
  BccLink,
} from "../components/BccComponents";
import MaskedInput from "react-maskedinput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: "relative",
      backgroundColor: "white",
      padding: "16px 0",
      boxSizing: "border-box",
      marginTop: 16,
      paddingBottom: 16,
      "& > nav": {
        maxWidth: 1280,
        margin: "0 auto",
      },
    },
    innerContainer: {
      maxWidth: 1280,
      margin: "0 auto",
    },
    fromCard: {
      padding: 24,
      backgroundColor: "#F3F3F3",
      borderRadius: 16,
      minHeight: 180,
      textAlign: "left",
    },
    toCard: {
      padding: 24,
      backgroundColor: "#F3F3F3",
      borderRadius: 16,
      minHeight: 180,
    },
    inputStyle: {
      marginTop: 12,
      marginBottom: 16,
      display: "block",
      "& > div": {
        minWidth: 350,
      },
    },
    inputStyleDate: {
      minWidth: 120,
      marginRight: 16,
    },
    arrowIcon: {
      margin: "auto 16px",
    },
    cardWrap: {
      textAlign: "right",
    },
    sumWrap: {
      textAlign: "left",
      width: "60%",
      marginLeft: "auto",
      marginTop: "32px",
      "& > div": {
        width: "100%",
      },
    },
    btnWrap: {
      textAlign: "left",
      width: "100%",
      marginRight: "auto",
      marginTop: "32px",
      "& > div": {
        width: "100%",
      },
    },
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const CardNumberMask = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="1111 1111 1111 1111"
      placeholder={"____ ____ ____ ____"}
    />
  );
};

const CardPeriodMask = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="11/1111"
      placeholder={"__/____"}
    />
  );
};

const CardCvvMask = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="111"
      placeholder={"___"}
    />
  );
};

const BaspanaHitPage = () => {
  const classes = useStyles({});
  const [cardNumber, setCardNumber] = React.useState("5104 4559 8990 0964");
  const [cardPeriod, setCardPeriod] = React.useState("02/2020");
  const [cardCvv, setCardCvv] = React.useState("283");
  const [sum, setSum] = React.useState(5000);
  return (
    <div className="main-page">
      <div className="container">
        <div className={classes.container}>
          <BccBreadcrumbs>
            <BccTypography type="p3" td="underline">
              Переводы
            </BccTypography>
            <BccTypography type="p3">Переводы с карты на карту</BccTypography>
          </BccBreadcrumbs>
          <div className={classes.innerContainer}>
            <BccTypography type="h1" align="center" block mt="42px" mb="20px">
              Переводы с карты на карту
            </BccTypography>
            <BccTypography
              type="p1"
              align="center"
              block
              color="#4D565F"
              mb="48px"
            >
              Мгновенный перевод денег между картами любых банков
            </BccTypography>
            <Grid container justify="center" wrap="nowrap">
              <Grid item className={classes.cardWrap}>
                <div className={classes.fromCard}>
                  <Grid
                    container
                    justify="space-between"
                    wrap="nowrap"
                    alignItems="center"
                  >
                    <Grid item>
                      <BccTypography type="p2">С карты</BccTypography>
                    </Grid>
                    <Grid item>
                      <img
                        src={process.env.PUBLIC_URL + "/img/logo-icon.svg"}
                      />
                    </Grid>
                  </Grid>
                  <BccInput
                    label="Номер карты"
                    variant="filled"
                    onChange={(e: any) => setCardNumber(e.target.value)}
                    className={classes.inputStyle}
                    id="cardNumber"
                    name="cardNumber"
                    value={cardNumber}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      inputComponent: CardNumberMask as any,
                      endAdornment: (
                        <InputAdornment position="end">
                          <img src={process.env.PUBLIC_URL + "/img/visa.svg"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <BccInput
                    label="Срок действия"
                    variant="filled"
                    onChange={(e: any) => setCardPeriod(e.target.value)}
                    id="cardPeriod"
                    className={classes.inputStyleDate}
                    name="cardPeriod"
                    value={cardPeriod}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      inputComponent: CardPeriodMask as any,
                    }}
                  />
                  <BccInput
                    label="CVC2/CVV2"
                    variant="filled"
                    onChange={(e: any) => setCardCvv(e.target.value)}
                    id="cardCvv"
                    className={classes.inputStyleDate}
                    name="cardCvv"
                    value={cardCvv}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      inputComponent: CardCvvMask as any,
                    }}
                  />
                </div>
                <div className={classes.sumWrap}>
                  <BccInput
                    label="Сумма перевода, ₸"
                    variant="filled"
                    onChange={(e: any) => setSum(e.target.value)}
                    id="sum"
                    name="sum"
                    value={sum}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <BccTypography type="p4" block mt="12px">
                    Комиссия: 200 ₸
                  </BccTypography>
                </div>
              </Grid>
              <Grid item className={classes.arrowIcon}>
                <img
                  src={process.env.PUBLIC_URL + "/img/icons/arrow-right.svg"}
                />
              </Grid>
              <Grid item>
                <div className={classes.fromCard}>
                  <Grid
                    container
                    justify="space-between"
                    wrap="nowrap"
                    alignItems="center"
                  >
                    <Grid item>
                      <BccTypography type="p2">На карту</BccTypography>
                    </Grid>
                    <Grid item>
                      <img
                        src={process.env.PUBLIC_URL + "/img/logo-alfa.svg"}
                      />
                    </Grid>
                  </Grid>
                  <BccInput
                    label="Номер карты"
                    variant="filled"
                    onChange={(e: any) => setCardNumber(e.target.value)}
                    className={classes.inputStyle}
                    id="cardNumber"
                    name="cardNumber"
                    value={cardNumber}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      inputComponent: CardNumberMask as any,
                      endAdornment: (
                        <InputAdornment position="end">
                          <img src={process.env.PUBLIC_URL + "/img/visa.svg"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className={classes.btnWrap}>
                  <BccButton variant="contained" color="primary">
                    Перевести 5200 ₸
                  </BccButton>
                  <BccTypography type="p4" block mt="12px">
                    Нажимая «Перевести» соглашаюсь на{" "}
                    <BccLink href="">условия переводов</BccLink>
                  </BccTypography>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>

        <Tabs title="Дополнительно" bgColor="#fafafa" />
      </div>
    </div>
  );
};

export default BaspanaHitPage;
