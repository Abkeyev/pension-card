import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccButton, BccTypography, BccTabs, BccTab } from "./BccComponents";
import { Link, useLocation, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
    outerContainer: {
      boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.08)",
      position: "relative",
    },
    innerSubContainer: {
      paddingTop: "8px",
    },
    innerContainer: {
      borderBottom: "1px solid #F3F3F3",
    },
    container: {
      maxWidth: 1280,
      padding: "0",
      margin: "0 auto",
    },
    logo: {
      maxWidth: 170,
      position: "relative",
      bottom: -2,
      marginRight: 32,
    },
    tab: { position: "relative", bottom: -2 },
    nav: {},
    subnav: {},
    select: {
      marginRight: 32,
      "& > div": {
        color: "#141414",
        opacity: 0.5,
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottom: 0,
      },
      "& > div:focus": {
        backgroundColor: "white",
      },
      "&::after, &::before": {
        borderBottom: 0,
      },
    },
    searchText: {
      color: "#141414",
      opacity: 0.5,
      marginRight: 10,
    },
    searchIcon: {
      color: "#141414",
      opacity: 0.5,
    },
    customBtn: {
      borderColor: "#27AE60!important",
      color: "#27AE60!important",
      "&:hover": {
        borderColor: "#27AE60!important",
        color: "white!important",
        backgroundColor: "#27AE60!important",
      },
    },
  })
);

const Navigation = (props: any) => {
  const location = useLocation();
  const nav = [
    {
      title: "Частным лицам",
      link: "/",
      sub: [
        "Карты",
        "Кредиты",
        "Ипотека",
        "Депозиты",
        "Переводы",
        "Тарифы",
        "Ещё продукты",
      ],
    },
    {
      title: "Бизнес клиентам",
      link: "/business",
      sub: [
        "Карты",
        "Кредиты",
        "Ипотека",
        "Депозиты",
        "Переводы",
        "Тарифы",
        "Ещё продукты",
      ],
    },
    {
      title: "P2P переводы",
      link: "/p2p",
      sub: [
        "Карты",
        "Кредиты",
        "Ипотека",
        "Депозиты",
        "Переводы",
        "Тарифы",
        "Ещё продукты",
      ],
    },
    {
      title: "Офисы и банкоматы",
      link: "/oandb",
      sub: [
        "Карты",
        "Кредиты",
        "Ипотека",
        "Депозиты",
        "Переводы",
        "Тарифы",
        "Ещё продукты",
      ],
    },
  ];
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const classes = useStyles({});

  const goToLink = (index: number, isSub: boolean) => {
    if (isSub) {
      setSubIndex(index);
    } else {
      setIndex(index);
    }
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.container}>
          <Grid
            container
            justify="space-between"
            wrap="nowrap"
            alignItems="center"
          >
            <Grid item>
              <Grid
                container
                justify="space-between"
                wrap="nowrap"
                alignItems="center"
              >
                <Grid item>
                  <Link to="/">
                    <img
                      className={classes.logo}
                      src={process.env.PUBLIC_URL + "/img/logo.png"}
                      alt="logo"
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <BccTabs
                    value={index}
                    onChange={(event: any, index: number) =>
                      goToLink(index, false)
                    }
                    className={classes.tab}
                  >
                    {nav &&
                      nav.map((n: any, i: number) => {
                        return <BccTab label={n.title} value={i} />;
                      })}
                  </BccTabs>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                justify="space-between"
                wrap="nowrap"
                alignItems="center"
              >
                <Grid item>
                  <Select className={classes.select} value="ru">
                    <MenuItem value="ru">РУС</MenuItem>
                    <MenuItem value="kz">ҚАЗ</MenuItem>
                    <MenuItem value="en">ENG</MenuItem>
                  </Select>
                </Grid>
                <Grid item>
                  <BccTypography className={classes.searchText} type="p2">
                    Поиск
                  </BccTypography>
                </Grid>
                <Grid item>
                  <img
                    className={classes.searchIcon}
                    src={process.env.PUBLIC_URL + "/img/search.svg"}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.innerSubContainer}>
        <div className={classes.container}>
          <Grid
            container
            justify="space-between"
            wrap="nowrap"
            alignItems="center"
          >
            <Grid item>
              <BccTabs
                onChange={(event: any, index: number) => goToLink(index, true)}
                className={classes.tab}
              >
                {nav[index].sub.map((n: any, i: number) => {
                  return <BccTab label={n} value={i} />;
                })}
              </BccTabs>
            </Grid>
            <Grid item>
              <BccButton
                variant="outlined"
                color="secondary"
                className={classes.customBtn}
              >
                Интернет–банк
              </BccButton>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
