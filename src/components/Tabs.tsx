import React from "react";
import { Grid, InputAdornment } from "@material-ui/core";
import {
  BccTypography,
  BccLink,
  BccTabs,
  BccTab,
  BccCollapseTitle,
  BccCollapsePanel,
  BccCollapseDetails,
  BccTooltip,
} from "./BccComponents";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "46px 48px",
        boxSizing: "border-box",
      },
      tabs: {
        marginTop: 30,
        minHeight: 150,
        fontSize: 16,
        "& > span": {
          color: "#27AE60",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "1px solid #F3F3F3",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
      benefits: {
        "& > div:first-child": {
          marginBottom: 20,
        },
        "& > div:nth-child(2)": {
          marginBottom: 20,
        },
        "& > div": {
          width: "calc(50% - 16px)",
          borderRadius: 10,
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#FAFAFA",
          padding: 24,
          "& > div:first-child": {
            background: "#FFFFFF",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            maxHeight: 80,
            minHeight: 80,
            maxWidth: 80,
            minWidth: 80,
            boxSizing: "border-box",
            padding: "0",
            "& > img": {
              width: 40,
              margin: "0 auto",
            },
          },
          "& > div:last-child": {
            marginLeft: 32,
          },
        },
      },
      docs: {
        marginTop: 24,
        backgroundColor: "#ffffff",
        boxShadow:
          "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        "& > div:nth-child(2n)": {
          backgroundColor: "#fafafa",
        },
        "& > div:first-child": {
          display: "block",
        },
        "& > div": {
          width: "100%",
          marginBottom: 0,
          display: "flex",
          boxSizing: "border-box",
          padding: "24px",
          flexWrap: "nowrap",
          alignItems: "center",
          "& > a": {
            color: "#000D1A",
          },
          "& > img": {
            marginRight: 24,
          },
        },
      },
      desc: {
        lineHeight: "36px",
        display: "flex",
        alignItems: "center",
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      desc: {
        lineHeight: "36px",
        display: "flex",
        alignItems: "center",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "32px 20px",
        boxSizing: "border-box",
      },
      tabs: {
        marginTop: 30,
        minHeight: 150,
        fontSize: 16,
        "& > span": {
          color: "#27AE60",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "1px solid #F3F3F3",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
      benefits: {
        "& > div:last-child": {
          marginBottom: 0,
        },
        "& > div": {
          width: "100%",
          borderRadius: 10,
          marginBottom: 20,
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#FAFAFA",
          padding: 24,
          "& > div:first-child": {
            background: "#FFFFFF",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            maxHeight: 80,
            minHeight: 80,
            maxWidth: 80,
            minWidth: 80,
            boxSizing: "border-box",
            padding: "0",
            "& > img": {
              width: 40,
              margin: "0 auto",
            },
          },
          "& > div:last-child": {
            marginLeft: 32,
          },
        },
      },
      docs: {
        marginTop: 24,
        backgroundColor: "#ffffff",
        boxShadow:
          "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        "& > div:nth-child(2n)": {
          backgroundColor: "#fafafa",
        },
        "& > div:first-child": {
          display: "block",
        },
        "& > div": {
          width: "100%",
          marginBottom: 0,
          display: "flex",
          boxSizing: "border-box",
          padding: "24px",
          flexWrap: "nowrap",
          alignItems: "center",
          "& > a": {
            color: "#000D1A",
          },
          "& > img": {
            marginRight: 24,
          },
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      innerContainer: {
        padding: "0 24px 24px",
      },
    },
    link: {
      cursor: "pointer",
    },
  })
);

const Tabs = (props: any) => {
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);
  const goToApp = (e: any) => {
    e.preventDefault();
    props.scrollToMobile();
  };

  return (
    <div className={classes.container} style={{ backgroundColor: "white" }}>
      <div className={classes.innerContainer}>
        <BccTypography type="h2" block mb="30px">
          {props.title}
        </BccTypography>

        <BccTabs
          value={index}
          onChange={(e: any, i: number) => setIndex(i)}
          className={classes.tab}
        >
          <BccTab label="О карте" />
          <BccTab label="Тарифы" />
          <BccTab label="Вопросы и ответы" />
        </BccTabs>
        <div className={classes.tabs}>
          {index === 0 ? (
            <Grid
              container
              justify="space-between"
              wrap="wrap"
              className={classes.benefits}
            >
              <Grid item container wrap="nowrap" justify="space-between">
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/img/b1.svg"} />
                </Grid>
                <Grid item>
                  <BccTypography type="h5" block mb="20px">
                    Бесплатно
                  </BccTypography>
                  <BccTypography
                    type="p2"
                    color="#4D565F"
                    className={classes.desc}
                    block
                  >
                    — Снятие наличных без комиссии
                    <BccTooltip
                      title="В любом банкомате до 1 000 000 тенге в месяц"
                      placement="right"
                      arrow
                      enterTouchDelay={0}
                      leaveTouchDelay={2500}
                      interactive
                    >
                      <InputAdornment position="end">
                        <InfoOutlinedIcon style={{ color: "#80868C" }} />
                      </InputAdornment>
                    </BccTooltip>
                  </BccTypography>
                  <BccTypography
                    type="p2"
                    color="#4D565F"
                    className={classes.desc}
                    block
                  >
                    — Переводы на карты любых банков РК
                    <BccTooltip
                      title="до 200 000 тенге в месяц"
                      placement="right"
                      arrow
                      enterTouchDelay={0}
                      leaveTouchDelay={2500}
                      interactive
                    >
                      <InputAdornment position="end">
                        <InfoOutlinedIcon style={{ color: "#80868C" }} />
                      </InputAdornment>
                    </BccTooltip>
                  </BccTypography>
                  <BccTypography
                    type="p2"
                    color="#4D565F"
                    className={classes.desc}
                    block
                  >
                    — СМС-информирование
                  </BccTypography>
                </Grid>
              </Grid>
              <Grid item container wrap="nowrap" justify="space-between">
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/img/b2.svg"} />
                </Grid>
                <Grid item>
                  <BccTypography type="h5" block mb="20px">
                    Быстро и удобно
                  </BccTypography>
                  <BccTypography
                    type="p2"
                    className={classes.desc}
                    color="#4D565F"
                    block
                  >
                    — Получение карты за 10 минут
                  </BccTypography>

                  <BccTypography
                    type="p2"
                    className={classes.desc}
                    color="#4D565F"
                    block
                  >
                    — Получение денежных выплат без очередей
                  </BccTypography>

                  <BccTypography
                    type="p2"
                    className={classes.desc}
                    color="#4D565F"
                    block
                  >
                    — Оплата ЖКХ, сотовой связи, интернета и других услуг не
                    выходя из дома в удобном мобильном приложении{" "}
                    <a
                      style={{
                        textDecoration: "none",
                        display: "contents",
                        color: "#C35BC0",
                      }}
                      href="https://bcc.kz/"
                      target="_blank"
                    >
                      BCC.KZ
                    </a>
                  </BccTypography>
                </Grid>
              </Grid>
              <Grid item container wrap="nowrap" justify="space-between">
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/img/b3.svg"} />
                </Grid>
                <Grid item>
                  <BccTypography type="h5" block mb="20px">
                    Поддержка 24 часа
                  </BccTypography>
                  <BccTypography
                    type="p2"
                    className={classes.desc}
                    color="#4D565F"
                    block
                  >
                    Менеджеры АО "Банк ЦентрКредит" помогут решить возникшие
                    вопросы в любое время
                  </BccTypography>
                </Grid>
              </Grid>
            </Grid>
          ) : index === 1 ? (
            <Grid container justify="space-between" className={classes.docs}>
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/img/pdf.svg"} />
                <BccLink
                  target="_blank"
                  href={process.env.PUBLIC_URL + "/tarif.pdf"}
                >
                  Pension (действует до 21.08.2020г)
                </BccLink>
              </Grid>
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/img/pdf.svg"} />
                <BccLink
                  target="_blank"
                  href={process.env.PUBLIC_URL + "/tarif2.pdf"}
                >
                  Тарифы карты #мнефиолетово#baribir (действуют с 21.08.2020г)
                </BccLink>
              </Grid>
              <Grid item>
                <BccTypography type="p2" block>
                  Пакет документов для открытия социальной карты в АО “Банк
                  ЦентрКредит”
                  <br />- удостоверение личности
                </BccTypography>
              </Grid>
            </Grid>
          ) : index === 2 ? (
            <>
              <BccTypography type="h4" block mb="12px" color="initial">
                Снятие
              </BccTypography>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Какая сеть банкоматов?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    Ваша Пенсионная карта принимается более чем в 2 млн
                    банкоматов во всем мире
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Могу я снимать деньги с Пенсионной карты в банкомате другого
                    банка?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    Вы можете снимать с банкомата до 1 000 000 ₸ в месяц -
                    БЕСПЛАТНО. Свыше 1 % от суммы
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Если я сниму деньги с Пенсионной карты в банкомате другого
                    банка за пределами Казахстана, спишется ли комиссия?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    Вы можете снимать с банкомата до 1 000 000 ₸ в месяц -
                    БЕСПЛАТНО. Свыше 1 % от суммы
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Смогу ли я снять деньги в другой валюте?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">Да, конечно.</BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Для каких целей предназначена Пенсионная карта?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    Пенсионная карта предназначена для получения пенсии,
                    выплачиваемого из единого накопительного пенсионного фонда
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Какие преимущества у Пенсионной карты?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    1. Автоматическая передача Ваших реквизитов в ЦОН - экономим
                    Ваше время
                    <br />
                    2. Доставка карты до дома (если заказать через сайт)
                    <br />
                    3. cashback за платежи в аптеке 3% и продукты в размере 2%
                    <br />
                    4. Бесплатная услуга смс информирования - уведомление о
                    поступлении пенсии на карту.
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Сколько времени занимает выпуск Пенсионной карты?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    Через отделение Банка - 15 минут (мгновенная карта)
                    <br />
                    Через официальный сайт Банка с доставкой:
                    <br />- Алматы -до 3 дней.
                    <br />- Другие города от 3 до 7 дней (в связи с карантином).
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccTypography type="h4" block mt="12px" mb="6px" color="initial">
                Условия
              </BccTypography>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Как ознакомится с тарифами по Пенсионной карте?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    Ознакомиться с тарифами по карте можете на официальном сайте
                    Банка
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Реквизиты направлены в ЦОН, но пенсионная выплата не
                    поступила, что делать?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    Необходимо обратиться в ЦОН по номеру 1414 для выяснения
                    статуса выплаты
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    По каким числам выплачивается пенсия?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    с 1-го числа по 15-ое число каждого месяца
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Откроют ли мне Пенсионную карту при наличии арестованных
                    счетов и статуса бездействующий налогоплательщик?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    Да, Вам откроем Пенсионную карту
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Какой документ требуется для открытия Пенсионной карты
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    Документ удостоверяющий личность
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Как получить номер счета/IBAN для получения пенсионных
                    выплат
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    Информацию можно получить через:
                    <br />
                    1. Мобильное приложение BCC.KZ:
                    <br />
                    1.1. Выбрать Пенсионную карту.
                    <br />
                    1.2. Провалиться во вкладку Информация.
                    <br />
                    2. Через отделение Банка
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Как можно узнать о поступлении на счет пенсии?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    Вам придет СМС сообщение и поступлении пенсии или Вы можете
                    проверить через мобильное приложение всс.kz
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccTypography
                type="h4"
                block
                mt="12px"
                mb="12px"
                color="initial"
              >
                Пополнение
              </BccTypography>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Как пополнить Пенсионную карту?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    В связи с тем, что карта предназначена для пенсионных выплат
                    и имеет статус специального счета, пополнение осуществлется
                    только из ЕНПФ
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccTypography
                type="h4"
                block
                mt="12px"
                mb="12px"
                color="initial"
              >
                Кэшбэк
              </BccTypography>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    За покупку каких услуг я получаю кэшбэк?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    За покупки в аптеках 3% и продуктов питания 2%
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Как я могу воспользоваться кэшбэком?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    Кэшбэк Вам будет начислен на Пенсионную карту, подробнее
                    сможете контролировать информацию в мобильным приложений
                    BCC.KZ
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
              <BccCollapsePanel>
                <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                  <BccTypography type="p2">
                    Сколько стоит перевыпуск по Пенсионной карты?
                  </BccTypography>
                </BccCollapseTitle>
                <BccCollapseDetails>
                  <BccTypography type="p2">
                    Перевыпуск карты - Бесплатно
                  </BccTypography>
                </BccCollapseDetails>
              </BccCollapsePanel>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
