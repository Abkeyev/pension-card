import React from "react";
import { Slider, MobileBanking, Benefits, Order, News } from "../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, MenuItem } from "@material-ui/core";
import {
  BccTypography,
  BccLink,
  BccInput,
  BccChip,
  BccTable,
  BccTableContainer,
  BccTableCell,
  BccTableHead,
  BccTableRow,
  BccTableBody,
} from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      position: "relative",
      margin: "0 auto 64px",
      padding: "80px 0 0",
      maxWidth: 1280,
      boxSizing: "border-box",
    },
    input: {
      minWidth: 360,
      margin: 0,
    },
    swap: {
      margin: "0 20px",
    },
    tableOuter: {
      overflow: "visible",
    },
    table: {
      borderRadius: 4,
      boxShadow:
        "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
      marginTop: 32,
      "& tr:last-child > td": {
        borderBottom: "none",
      },
      "& tr > td": { border: "none", borderBottom: "0.5px solid #97979780" },
      "& tbody > tr:nth-child(2n)": {
        backgroundColor: "#FAFAFA",
      },
    },
  })
);

const currencies = ["Доллар США", "Тенге", "Евро", "Рубль"];

const CurrencyPage = () => {
  const classes = useStyles({});
  const [cur1, setCur1] = React.useState("");
  const [cur2, setCur2] = React.useState("");
  return (
    <div className="main-page">
      <div className="container">
        <div className={classes.content}>
          <BccTypography type="h1" block mb="20px">
            Курсы валют
          </BccTypography>
          <BccTypography type="p1" block mb="64px" color="#4D565F">
            на 18.03.2020
          </BccTypography>
          <Grid
            container
            justify="flex-start"
            wrap="nowrap"
            alignItems="center"
          >
            <Grid item>
              <BccInput
                fullWidth={true}
                label="Выберите валюту"
                id="cur1"
                name="cur1"
                value={cur1}
                onChange={(e: any) => setCur1(e.target.value)}
                variant="outlined"
                className={classes.input}
                margin="normal"
                select
              >
                {currencies.map((c: string) => {
                  return (
                    c !== null && (
                      <MenuItem key={c} value={c}>
                        {c}
                      </MenuItem>
                    )
                  );
                })}
              </BccInput>
            </Grid>
            <Grid item className={classes.swap}>
              <img src={process.env.PUBLIC_URL + "/img/swap.svg"} />
            </Grid>
            <Grid item>
              <BccInput
                fullWidth={true}
                label="Выберите валюту"
                id="cur12"
                name="cur2"
                value={cur2}
                onChange={(e: any) => setCur2(e.target.value)}
                variant="outlined"
                className={classes.input}
                margin="normal"
                select
              >
                {currencies.map((c: string) => {
                  return (
                    c !== null && (
                      <MenuItem key={c} value={c}>
                        {c}
                      </MenuItem>
                    )
                  );
                })}
              </BccInput>
            </Grid>
          </Grid>
          <BccTypography type="h2" block mt="72px" mb="24px">
            Курсы конвертации
          </BccTypography>
          <BccChip type="filled" color="secondary" mr="16px">
            По наличной валюте
          </BccChip>
          <BccChip type="outlined" color="secondary" mr="16px">
            По безналичной валюте
          </BccChip>
          <BccChip type="outlined" color="secondary">
            По платежным картам
          </BccChip>
          <BccTableContainer className={classes.tableOuter}>
            <BccTable className={classes.table}>
              <BccTableHead>
                <BccTableRow>
                  <BccTableCell>
                    <BccTypography
                      type="p2"
                      block
                      align="right"
                      weight="medium"
                    >
                      Градации,{" "}
                      <BccTypography type="p2" color="#B3B6BA">
                        $
                      </BccTypography>
                    </BccTypography>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTypography
                      type="p2"
                      block
                      align="right"
                      weight="medium"
                    >
                      Курс покупки
                    </BccTypography>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTypography
                      type="p2"
                      block
                      align="right"
                      weight="medium"
                    >
                      Курс продажи
                    </BccTypography>
                  </BccTableCell>
                </BccTableRow>
              </BccTableHead>
              <BccTableBody>
                <BccTableRow>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      до 10 000
                    </BccTypography>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      440
                    </BccTypography>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      444
                    </BccTypography>
                  </BccTableCell>
                </BccTableRow>
                <BccTableRow>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      до 10 000
                    </BccTypography>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      440
                    </BccTypography>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      444
                    </BccTypography>
                  </BccTableCell>
                </BccTableRow>
                <BccTableRow>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      до 10 000
                    </BccTypography>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      440
                    </BccTypography>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      444
                    </BccTypography>
                  </BccTableCell>
                </BccTableRow>
                <BccTableRow>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      до 10 000
                    </BccTypography>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      440
                    </BccTypography>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      444
                    </BccTypography>
                  </BccTableCell>
                </BccTableRow>
                <BccTableRow>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      до 10 000
                    </BccTypography>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      440
                    </BccTypography>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      444
                    </BccTypography>
                  </BccTableCell>
                </BccTableRow>
                <BccTableRow>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      до 10 000
                    </BccTypography>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      440
                    </BccTypography>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTypography type="p2" align="right" block>
                      444
                    </BccTypography>
                  </BccTableCell>
                </BccTableRow>
              </BccTableBody>
            </BccTable>
          </BccTableContainer>
        </div>
        <MobileBanking />
      </div>
    </div>
  );
};

export default CurrencyPage;
