import React from "react";
import { Grid, MenuItem } from "@material-ui/core";
import {
  BccTypography,
  BccCheckbox,
  BccInput,
  BccButton,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import InputMask from "react-input-mask";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import api from "../api/Api";
import ReactGA from "react-ga";

const webConfigEnv = (window as any).env;
const cityList = [
  "Алматы",
  "Актау",
  "Актобе",
  "Атырау",
  "Жезказган",
  "Караганда",
  "Кокшетау",
  "Костанай",
  "Кызылорда",
  "Нур-Султан",
  "Павлодар",
  "Петропавловск",
  "Семей",
  "Талдыкорган",
  "Тараз",
  "Уральск",
  "Усть-Каменогорск",
  "Шымкент",
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        background: "#FAFAFA",
      },
      innerOrderForm: {},
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        textAlign: "center",
        boxSizing: "border-box",
        padding: "48px 96px",
      },
      title: {
        marginBottom: 32,
      },
      orderTitle: {
        width: "65%",
        margin: "0 auto",
      },
      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "calc(33% - 20px)",
      },
      orderForm: {
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        width: "60%",
        padding: 46,
        boxSizing: "border-box",
        maxWidth: "60%",
        margin: "0 auto",
        textAlign: "center",
      },
      titleForm: {
        marginBottom: 16,
      },
      subTitleForm: {
        marginBottom: 46,
        opacity: 0.7,
      },
      inputStyle: {
        marginBottom: 24,
        textAlign: "left",
        maxWidth: "inherit",
        "& > div > div": {
          whiteSpace: "initial",
        },
      },
      inputStyleText: {
        textAlign: "left",
        marginBottom: 32,
      },
      checkboxText: {
        alignItems: "center",
        marginBottom: 48,
      },
      btnWrap: {
        width: "calc(50% - 10px)",
        "& > button": { width: "100%" },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      progress: {
        backgroundColor: "#E0E0E0",
        height: 36,
        borderRadius: 4,
        marginBottom: 24,
        textAlign: "center",
        "& > span": {
          lineHeight: "36px",
        },
      },
      alert: {
        marginBottom: 32,
      },
      garant: { textAlign: "left" },
      orderSteps: {
        marginBottom: 48,
        boxSizing: "border-box",
        "& > div:first-child": {
          "& > div:first-child": {
            marginLeft: "calc(33% / 2 - 20px)",
          },
          "& > div:nth-child(2n+1)": {
            height: 40,
            width: 40,
            borderRadius: "50%",
            backgroundColor: "#F3F3F3",
            textAlign: "center",
            "& > span": {
              lineHeight: "40px",
            },
          },
          "& > div:nth-child(2n)": {
            width: "calc(33% - 48px - 40px)",
            height: 1,
            backgroundColor: "#CCCFD1",
            margin: "20px 24px",
          },
        },
        "& > div:last-child": {
          marginTop: 12,
          "& > div": {
            width: "33%",
          },
        },
      },
      code: {
        margin: 0,
        "& input": {
          height: 62,
          boxSizing: "border-box",
        },
      },
      timer: {
        fontSize: 16,
        color: "#4D565F",
      },
      docForm: {
        height: 64,
        border: "1px solid #F3F3F3",
        borderRadius: 4,
        marginBottom: 24,
        padding: "8px 14px",
        lineHeight: "48px",
      },
      linkReSendSms: {
        color: "#3F0259",
        fontSize: 16,
        height: "auto",
        padding: 0,
        lineHeight: "initial",
        cursor: "pointer",
        textTransform: "none!important",
        "&:hover, &:active": {
          textDecoration: "underline",
          opacity: 0.8,
        },
      },
      progressBarSuccess: {
        borderRadius: 5,
        display: "block",
        margin: "12px 0 32px",
        height: 36,
        lineHeight: "36px",
        textAlign: "center",
        position: "relative",
        fontSize: 16,
        "& > span": {
          zIndex: 5,
          color: "white",
          fontWeight: "bold",
          position: "relative",
        },
      },
      successForm: {
        backgroundColor: "rgba(125, 206, 160, 0.1)",
        borderRadius: 8,
        textAlign: "center",
        padding: "56px 64px 112px",
        "& > img": {
          display: "block",
          margin: "0 auto",
          marginBottom: 24,
        },
      },
      errorForm: {
        backgroundColor: "rgba(200, 79, 79, 0.1)",
        textAlign: "center",
        borderRadius: 8,
        padding: "56px 64px 112px",
        "& > img": {
          display: "block",
          margin: "0 auto",
          marginBottom: 24,
        },
      },
      progressBarInnerSuccess: {
        position: "absolute",
        background: "#27AE60",
        transition: "width .5s ease-out",
        top: 0,
        height: 36,
        borderRadius: 5,
        bottom: 0,
        zIndex: 4,
      },
      paymentWrap: {
        position: "relative",
        marginBottom: 40,
      },
      sliderWrap: {
        position: "relative",
        width: "100%",
      },
      input: {
        display: "block",
        width: "100%",
        "& > div": {
          width: "inherit",
        },
      },
      sliderRange: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -20,
        color: "#b3b6ba",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12,
      },
      btnStyle: {
        minWidth: 150,
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        background: "#ffffff",
      },
      title: {
        marginBottom: 32,
      },
      innerOrderForm: {},
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        textAlign: "center",
        boxSizing: "border-box",
        padding: "24px 48px",
      },
      orderTitle: {
        width: "90%",
        margin: "0 auto",
      },
      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "calc(33% - 20px)",
      },
      orderForm: {
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        width: "90%",
        padding: 46,
        boxSizing: "border-box",
        maxWidth: "90%",
        margin: "0 auto",
        textAlign: "center",
      },
      titleForm: {
        marginBottom: 16,
      },
      subTitleForm: {
        marginBottom: 46,
        opacity: 0.7,
      },
      inputStyle: {
        marginBottom: 24,
        textAlign: "left",
        maxWidth: "inherit",
        "& > div > div": {
          whiteSpace: "initial",
        },
      },
      inputStyleText: {
        textAlign: "left",
        marginBottom: 32,
      },
      checkboxText: {
        alignItems: "flex-start",
        marginBottom: 48,
      },
      btnWrap: {
        width: "calc(50% - 10px)",
        "& > button": { width: "100%" },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      progress: {
        backgroundColor: "#E0E0E0",
        height: 36,
        borderRadius: 4,
        marginBottom: 24,
        textAlign: "center",
        "& > span": {
          lineHeight: "36px",
        },
      },
      alert: {
        marginBottom: 32,
      },
      garant: { textAlign: "left" },
      orderSteps: {
        marginBottom: 48,
        boxSizing: "border-box",
        "& > div:first-child": {
          "& > div:first-child": {
            marginLeft: "calc(33% / 2 - 20px)",
          },
          "& > div:nth-child(2n+1)": {
            height: 40,
            width: 40,
            borderRadius: "50%",
            backgroundColor: "#F3F3F3",
            textAlign: "center",
            "& > span": {
              lineHeight: "40px",
            },
          },
          "& > div:nth-child(2n)": {
            width: "calc(33% - 48px - 40px)",
            height: 1,
            backgroundColor: "#CCCFD1",
            margin: "20px 24px",
          },
        },
        "& > div:last-child": {
          marginTop: 12,
          "& > div": {
            width: "33%",
          },
        },
      },
      code: {
        margin: 0,
        "& input": {
          height: 62,
          boxSizing: "border-box",
        },
      },
      timer: {
        fontSize: 16,
        color: "#4D565F",
      },
      docForm: {
        height: 64,
        border: "1px solid #F3F3F3",
        borderRadius: 4,
        marginBottom: 24,
        padding: "8px 14px",
        lineHeight: "48px",
      },
      linkReSendSms: {
        color: "#3F0259",
        fontSize: 16,
        height: "auto",
        padding: 0,
        lineHeight: "initial",
        cursor: "pointer",
        textTransform: "none",
        "&:hover, &:active": {
          textDecoration: "underline",
          opacity: 0.8,
        },
      },
      progressBarSuccess: {
        borderRadius: 5,
        display: "block",
        margin: "12px 0 32px",
        height: 36,
        lineHeight: "36px",
        textAlign: "center",
        position: "relative",
        fontSize: 16,
        "& > span": {
          zIndex: 5,
          color: "white",
          fontWeight: "bold",
          position: "relative",
        },
      },
      successForm: {
        backgroundColor: "rgba(125, 206, 160, 0.1)",
        borderRadius: 8,
        textAlign: "center",
        padding: "56px 64px 112px",
        "& > img": {
          display: "block",
          margin: "0 auto",
          marginBottom: 24,
        },
      },
      errorForm: {
        backgroundColor: "rgba(200, 79, 79, 0.1)",
        textAlign: "center",
        borderRadius: 8,
        padding: "56px 64px 112px",
        "& > img": {
          display: "block",
          margin: "0 auto",
          marginBottom: 24,
        },
      },
      progressBarInnerSuccess: {
        position: "absolute",
        background: "#27AE60",
        transition: "width .5s ease-out",
        top: 0,
        height: 36,
        borderRadius: 5,
        bottom: 0,
        zIndex: 4,
      },
      paymentWrap: {
        position: "relative",
        marginBottom: 40,
      },
      sliderWrap: {
        position: "relative",
        width: "100%",
      },
      input: {
        display: "block",
        width: "100%",
        "& > div": {
          width: "inherit",
        },
      },
      sliderRange: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -20,
        color: "#b3b6ba",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12,
      },
      btnStyle: {
        minWidth: 150,
      },
    },
    [theme.breakpoints.down("xs")]: {
      orderTitle: {
        width: "100%",
        margin: "0 auto",
      },
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        textAlign: "center",
        boxSizing: "border-box",
        padding: "24px",
      },
      wrapWrap: {
        flexDirection: "column",
      },
      checkboxText: {
        marginBottom: 24,
      },
      btnWrap: {
        width: "100%",
        marginBottom: 24,
      },
      orderForm: {
        width: "100%",
        maxWidth: "100%",
        padding: 24,
      },
    },
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const BccMaskedInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <InputMask
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="+7(999) 999 99 99"
      maskChar=""
      placeholder={"+7(707) 707 77 77"}
    />
  );
};

const BccMaskedIinInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <InputMask
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="999 999 999 999"
      maskChar=""
      placeholder={"000 000 000 000"}
    />
  );
};

const Order = (props: any) => {
  const classes = useStyles({});
  const [type, setType] = React.useState("1");
  const [step, setStep] = React.useState(0);
  const [iin, setIin] = React.useState("");
  const [fio, setFio] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [phoneError, setPhoneError] = React.useState<boolean>(false);
  const [iinError, setIinError] = React.useState<boolean>(false);
  const [agree, setAgree] = React.useState<boolean>(true);
  const [success, setSuccess] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [timer, setTimer] = React.useState(0);
  const [city, setCity] = React.useState([] as any);

  React.useEffect(() => {
    let timeOut = setInterval(() => {
      if (timer !== 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(timeOut);
  }, [timer]);

  const formatPhoneNumber = () => {
    let res = phone;
    if (phone.slice(0, 1) === "8") res = "+7" + phone.slice(1);
    return res.replace(/\(|\)| /g, "");
  };

  const isValid = () => {
    if (step === 0)
      return (
        fio.length > 0 &&
        city.length > 0 &&
        iin.replace(/ /g, "").length === 12 &&
        phone.replace("_", "").length === 17 &&
        agree
      );
    else if (step === 1) return code.length === 6;
    else return true;
  };

  function getUrlParameter(name: string) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(window.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  const getOtp = () => {
    if (phone.substr(3, 1) !== "7") {
      setPhoneError(true);
      return;
    } else setPhoneError(false);
    setLoading(true);
    setTimer(60);
    ReactGA.event({
      category: "Pensioncard_sendform1",
      action: "success1",
    });
    api.authOtp
      .sendOtp({ iin: iin.replace(/ /g, ""), phone: formatPhoneNumber() })
      .then(() => {
        localStorage.removeItem("userContext");
        setStep(1);
        props.scrollToOrder();
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        props.scrollToOrder();
        setOpenError(true);
        setLoading(false);
      });
  };

  const startProcess = () => {
    api.camunda
      .start({
        env: {
          production: webConfigEnv.PRODUCTION === "1",
        },
        client: {
          fio: fio,
          iin: iin.replace(/ /g, ""),
          phone: formatPhoneNumber(),
          city: city,
          code: "0.300.1500.16",
          utm_source: getUrlParameter("utm_source"),
          utm_medium: getUrlParameter("utm_medium"),
          utm_campaign: getUrlParameter("utm_campaign"),
          utm_term: getUrlParameter("utm_term"),
          utm_content: getUrlParameter("utm_content"),
          utm_keyword: getUrlParameter("utm_keyword"),
        },
      })
      .then((r: any) => {
        setSuccess(true);
        setStep(3);
        props.scrollToOrder();
        setLoading(false);
      })
      .catch((e: any) => {
        setSuccess(false);
        console.error(e);
        setOpenError(true);
        setStep(3);
        setLoading(false);
      });
  };

  const onSubmitOtp = () => {
    setLoading(true);
    ReactGA.event({
      category: "Pensioncard_sendform_otp",
      action: "success_otp",
    });
    api.authOtp
      .confirmOtp({
        iin: iin.replace(/ /g, ""),
        phone: formatPhoneNumber(),
        otp: code,
      })
      .then((userContext) => {
        props.scrollToOrder();
        localStorage.setItem("userContext", JSON.stringify(userContext));
        setLoading(false);
        startProcess();
      })
      .catch((e: any) => {
        props.scrollToOrder();
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  const onReSend = () => {
    setLoading(true);
    api.authOtp
      .sendOtp({ iin: iin.replace(/ /g, ""), phone: formatPhoneNumber() })
      .then(() => {
        props.scrollToOrder();
        setTimer(90);
        setCode("");
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        props.scrollToOrder();
        setOpenError(true);
        setLoading(false);
      });
  };

  return (
    <div className={classes.outerContainer} ref={props.refProp}>
      <div className={classes.container}>
        <div className={classes.orderForm}>
          <BccTypography type="h3" className={classes.title}>
            Заполните заявку и получите карту #мнефиолетово
          </BccTypography>

          <BlockUi tag="div" blocking={isLoading}>
            {step === 0 ? (
              <>
                <Grid item>
                  <BccInput
                    className={classes.inputStyle}
                    fullWidth
                    label="ФИО"
                    variant="filled"
                    id="fio"
                    name="fio"
                    value={fio}
                    onChange={(e: any) => setFio(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <BccInput
                    className={classes.inputStyle}
                    fullWidth
                    label="ИИН"
                    variant="filled"
                    id="iin"
                    name="iin"
                    value={iin}
                    onChange={(e: any) => setIin(e.target.value)}
                    helperText={iinError ? "Неверный формат ИИН" : ""}
                    error={iinError ? true : false}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      inputComponent: BccMaskedIinInput as any,
                    }}
                  />
                </Grid>
                <Grid item>
                  <BccInput
                    variant="filled"
                    fullWidth
                    label="Номер телефона"
                    onChange={(e: any) => setPhone(e.target.value)}
                    className={classes.inputStyle}
                    helperText={
                      phoneError ? "Неверный формат номера телефона" : ""
                    }
                    error={phoneError ? true : false}
                    id="phone"
                    name="phone"
                    value={phone}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      inputComponent: BccMaskedInput as any,
                    }}
                  />
                </Grid>
                <Grid item>
                  <BccInput
                    fullWidth={true}
                    className={classes.inputStyle}
                    label={"Город"}
                    id="city"
                    name="city"
                    value={city}
                    onChange={(e: any) => setCity(e.target.value)}
                    variant="outlined"
                    select
                  >
                    {cityList.map((b: any, index: number) => {
                      return (
                        <MenuItem key={index} value={b}>
                          {b}
                        </MenuItem>
                      );
                    })}
                  </BccInput>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    justify="flex-start"
                    wrap="nowrap"
                    className={classes.checkboxText}
                  >
                    <Grid item>
                      <BccCheckbox
                        value="remember"
                        color="primary"
                        checked={agree}
                        onChange={() => setAgree(!agree)}
                      />
                    </Grid>
                    <Grid item>
                      <BccTypography type="p3" ml="10px">
                        Соглашаюсь с обработкой данных и{" "}
                        <a
                          style={{
                            color: "#27AE60",
                            textDecoration: "underline",
                          }}
                          href="https://www.bcc.kz/"
                          target="_blank"
                        >
                          c условиями передачи информации
                        </a>
                      </BccTypography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    justify="space-between"
                    className={classes.wrapWrap}
                  >
                    <Grid item className={classes.btnWrap}>
                      <Grid container spacing={2}>
                        <Grid item>
                          <img
                            src={process.env.PUBLIC_URL + "/img/safety.svg"}
                            className={classes.icon}
                            alt="order_security"
                          />
                        </Grid>
                        <Grid
                          item
                          xl={true}
                          lg={true}
                          md={true}
                          sm={true}
                          xs={true}
                        >
                          <BccTypography type="p3" className={classes.garant}>
                            Мы гарантируем безопасность и сохранность ваших
                            данных
                          </BccTypography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item className={classes.btnWrap}>
                      <BccButton
                        variant="contained"
                        disabled={!isValid()}
                        color="primary"
                        onClick={() => getOtp()}
                      >
                        Оформить карту
                      </BccButton>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : step === 1 ? (
              <>
                <Grid
                  item
                  container
                  justify="space-between"
                  alignItems="center"
                  spacing={4}
                >
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <BccInput
                      variant="outlined"
                      className={classes.code}
                      margin="normal"
                      fullWidth
                      id="code"
                      name="code"
                      value={code}
                      onChange={(e: any) =>
                        setCode(e.target.value.replace(/\D/g, "").substr(0, 6))
                      }
                      label={"Код подтверждения"}
                    />
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <BccButton
                      onClick={() => onSubmitOtp()}
                      variant="contained"
                      fullWidth
                      disabled={!isValid()}
                    >
                      Подтвердить
                    </BccButton>
                  </Grid>
                  {timer !== 0 ? (
                    <Grid item>
                      <BccTypography type="p3" className={classes.timer}>
                        Отправить повторно СМС через 00:{timer}
                      </BccTypography>
                    </Grid>
                  ) : (
                    <Grid item>
                      <BccButton
                        variant="text"
                        className={classes.linkReSendSms}
                        onClick={() => onReSend()}
                      >
                        Отправить СМС ещё раз
                      </BccButton>
                    </Grid>
                  )}
                </Grid>
              </>
            ) : success ? (
              <Grid item>
                <div className={classes.successForm}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/success.svg"}
                    alt=""
                  />
                  <BccTypography type="h6" color="#1F7042" mb="16px">
                    Ваша заявка успешно принята
                  </BccTypography>
                  <BccTypography type="p2" color="#1F7042">
                    Ожидайте, пожалуйста, звонка от сотрудника Банка
                  </BccTypography>
                </div>
              </Grid>
            ) : (
              <Grid item>
                <div className={classes.errorForm}>
                  <img src={process.env.PUBLIC_URL + "/img/error.svg"} alt="" />
                  <BccTypography type="h6" color="initial" mb="16px">
                    Что-то пошло не так
                  </BccTypography>
                  <BccTypography type="p2" color="initial">
                    К сожалению, Ваша заявка не может быть принята, повторно.
                    Попробуйте, пожалуйста, чере 15 мин.
                  </BccTypography>
                </div>
              </Grid>
            )}
          </BlockUi>
        </div>
      </div>
    </div>
  );
};

export default Order;
