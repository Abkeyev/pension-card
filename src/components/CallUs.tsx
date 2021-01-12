import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccLink } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundColor: "#ffffff",
      },
      callUsMob: {
        display: "none",
      },
      title: {
        marginBottom: 48,
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "0 48px 120px",
        margin: "0 auto",
      },
      cards: {
        "& > div": {
          width: "calc(33% - 16px)",
          border: "1px solid #CCCFD1",
          padding: "24px",
          borderRadius: 10,
          "& > div": {
            marginRight: 20,
            "& span:first-child": {
              whiteSpace: "nowrap",
            },
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundColor: "#ffffff",
      },
      callUsMob: {
        display: "flex",
        flexWrap: "nowrap",
        "& > div:last-child": {
          justifyContent: "space-around",
        },
        "& > div": {
          width: "calc(50% - 8px)",
          border: "1px solid #CCCFD1",
          padding: "20px",
          borderRadius: 10,
          "& > div": {
            marginRight: 16,
          },
        },
      },
      title: {
        marginBottom: 24,
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "32px 24px",
        margin: "0 auto",
      },
      cards: {
        display: "none",
        flexWrap: "wrap",
        "& > div": {
          width: "100%",
          border: "1px solid #CCCFD1",
          padding: "24px 32px",
          borderRadius: 10,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
    phoneLink: {
      fontWeight: 500,
    },
  })
);

const CallUs = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <BccTypography type="h3" block align="center" className={classes.title}>
          Остались вопросы? Задайте их менеджеру
        </BccTypography>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cards}
        >
          <Grid
            item
            container
            wrap="nowrap"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/call.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h4" block mb="12px">
                <BccLink href="tel:505" className={classes.phoneLink}>
                  505
                </BccLink>
              </BccTypography>
              <BccTypography type="h6" weight="normal" block>
                Бесплатно с мобильного
              </BccTypography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            wrap="nowrap"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/call.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h4" block mb="12px">
                <BccLink href="tel:+77272443030" className={classes.phoneLink}>
                  +7 (727) 244 30 30
                </BccLink>
              </BccTypography>
              <BccTypography type="h6" weight="normal" block>
                Для городского телефона
              </BccTypography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <BccTypography type="p1" mr="12px">
              <BccLink
                href="https://www.instagram.com/centercreditkz/?hl=ru"
                target="_blank"
              >
                <img src={process.env.PUBLIC_URL + "/img/ig.svg"} />
              </BccLink>
            </BccTypography>
            <BccTypography type="p1" mr="12px">
              <BccLink href="https://www.facebook.com/bcc.kz/" target="_blank">
                <img src={process.env.PUBLIC_URL + "/img/fb.svg"} />
              </BccLink>
            </BccTypography>
            <BccTypography type="p1">
              <BccLink href="https://vk.com/centercredit" target="_blank">
                <img src={process.env.PUBLIC_URL + "/img/vk.svg"} />
              </BccLink>
            </BccTypography>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.callUsMob}
        >
          <Grid
            item
            container
            wrap="nowrap"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/call.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h4" block mb="12px">
                <BccLink href="tel:505" className={classes.phoneLink}>
                  505
                </BccLink>
              </BccTypography>
              <BccTypography type="h6" weight="normal" block>
                Бесплатно
              </BccTypography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <BccTypography type="p1" mr="12px">
              <BccLink
                href="https://www.instagram.com/centercreditkz/?hl=ru"
                target="_blank"
              >
                <img src={process.env.PUBLIC_URL + "/img/ig_m.svg"} />
              </BccLink>
            </BccTypography>
            <BccTypography type="p1" mr="12px">
              <BccLink href="https://www.facebook.com/bcc.kz/" target="_blank">
                <img src={process.env.PUBLIC_URL + "/img/fb_m.svg"} />
              </BccLink>
            </BccTypography>
            <BccTypography type="p1">
              <BccLink href="https://vk.com/centercredit" target="_blank">
                <img src={process.env.PUBLIC_URL + "/img/vk_m.svg"} />
              </BccLink>
            </BccTypography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CallUs;
