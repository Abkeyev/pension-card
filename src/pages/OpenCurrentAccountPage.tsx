import React from "react";
import { Slider, MobileBanking, Benefits, Order, News } from "../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { BccTypography, BccLink } from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      position: "relative",
      margin: "0 auto 64px",
      padding: "32px 0 0",
      maxWidth: 1280,
      boxSizing: "border-box",
    },
  })
);

const OpenCurrentAccountPage = () => {
  const classes = useStyles({});
  return (
    <div className="main-page">
      <div className="container">
        <Slider
          steps={{
            title: "Открытие текущего счета",
            desc: (
              <BccTypography type="p1">
                Управляйте Вашими счетами посредством системы{" "}
                <BccLink href="#" target="_blank">
                  StarBanking
                </BccLink>
              </BccTypography>
            ),
            img: "/img/slide4.svg",
            btnText: "Открыть счёт",
          }}
        />
        <Benefits />
        <Order title="Открыть текущий счёт" />
        <MobileBanking />
        <News />
      </div>
    </div>
  );
};

export default OpenCurrentAccountPage;
