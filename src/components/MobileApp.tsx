import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccChip, BccLink } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundColor: "#FFFFFF",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "0 48px 114px",
        margin: "0 auto",
      },
      mobileApp: {
        backgroundColor: "#fafafa",
        padding: "32px 64px 0",
        borderRadius: 30,
        "& > div:first-child": {
          marginRight: 96,
        },
      },
      desc: {
        marginBottom: 48,
      },
      qr: {},
      title: {},
      mobMA: { display: "none" },
      AS: {
        marginRight: 36,
      },
      GP: {
        marginRight: 40,
      },
      mobileLinks: {},
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundColor: "#FFFFFF",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "32px 20px",
        margin: "0 auto",
      },
      mobileApp: {
        backgroundColor: "#F3F3F3",
        padding: "20px 20px 0",
        borderRadius: 8,
        flexWrap: "wrap",
        justifyContent: "center",
        "& > div:first-child": {
          marginRight: 0,
          width: "100%",
        },
      },
      desc: {
        marginBottom: 20,
      },
      qr: { display: "none" },
      title: { display: "none" },
      mobMA: {
        display: "block",
        width: "max-content",
        textTransform: "uppercase",
        marginBottom: 26,
      },
      AS: {
        marginRight: 18,
      },
      GP: {
        marginRight: 0,
      },
      mobileLinks: {
        justifyContent: "center",
        marginBottom: 12,
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        padding: "0 24px",
      },
    },
  })
);

const MobileApp = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer} ref={props.refProp}>
      <div className={classes.container}>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          alignItems="center"
          className={classes.mobileApp}
        >
          <Grid item>
            <BccTypography type="h2" block mb="32px" className={classes.title}>
              Мобильное приложение BCC.KZ
            </BccTypography>
            <BccChip
              type="outlined"
              color="secondary"
              className={classes.mobMA}
            >
              Мобильное приложение
            </BccChip>
            <BccTypography
              type="h1"
              mb="12px"
              mt="24px"
              block
              className={classes.mobMA}
            >
              BCC.KZ
            </BccTypography>
            <BccTypography
              type="h5"
              weight="normal"
              className={classes.desc}
              block
            >
              Оплачивайте услуги, управляйте рассрочкой и кэшбэком, пополняйте
              карту онлайн с карт других банков РК
            </BccTypography>

            <Grid
              container
              wrap="nowrap"
              alignItems="center"
              className={classes.mobileLinks}
            >
              <Grid className={classes.AS} item>
                <BccLink
                  href="https://apps.apple.com/kz/app/bcc-kz/id743617904"
                  target="_blank"
                >
                  <img src={process.env.PUBLIC_URL + "/img/as.svg"} />
                </BccLink>
              </Grid>
              <Grid className={classes.GP} item>
                <BccLink
                  href="https://play.google.com/store/apps/details?id=kz.bcc.starbanking&hl=ru"
                  target="_blank"
                >
                  <img src={process.env.PUBLIC_URL + "/img/gp.svg"} />
                </BccLink>
              </Grid>
              <Grid
                style={{
                  padding: 4,
                  backgroundColor: "white",
                  borderRadius: 4,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.04)",
                }}
                className={classes.qr}
                item
              >
                <img src={process.env.PUBLIC_URL + "/img/qr.png"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <img
              src={process.env.PUBLIC_URL + "/img/mobile-app.svg"}
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MobileApp;
