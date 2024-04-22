export const APP_NAME = "SportsBug";

export const API_URL =
  "http://sport-backend-x22227041-1615953102.eu-west-1.elb.amazonaws.com";

export const CLASSMATE_API =
  "https://34kremxbzd.execute-api.us-east-1.amazonaws.com/dev/levelcheck?hobby=";

export const cricketurls = {
  cricket_allrounder_odi: "/cricket-allrounder-odi",
  cricket_allrounder_test: "/cricket-allrounder-test",
  cricket_allrounder_t20: "/cricket-allrounder-t20",
  cricket_bowl_odi: "/cricket-bowl-odi",
  cricket_bowl_test: "/cricket-bowl-test",
  cricket_bowl_t20: "/cricket-bowl-t20",
  cricket_bat_odi: "/cricket-bat-odi",
  cricket_bat_test: "/cricket-bat-test",
  cricket_bat_t20: "/cricket-bat-t20",
};

export const chessurl = "/chess";
export const footballurl = "/football";
export const swimmingurl = "/swimming";

export const sports = [
  {
    value: chessurl,
    label: "Chess",
    api: "cricket",
  },
  {
    value: swimmingurl,
    label: "Swimming",
    api: "swimming",
  },
  {
    value: footballurl,
    label: "Football",
    api: "cricket",
  },
  {
    value: cricketurls.cricket_allrounder_odi,
    label: "Cricket All Rounder ODI",
    api: "cricket",
  },
  {
    value: cricketurls.cricket_allrounder_test,
    label: "Cricket All Rounder Test",
    api: "cricket",
  },
  {
    value: cricketurls.cricket_allrounder_t20,
    label: "Cricket All Rounder T20",
    api: "cricket",
  },
  {
    value: cricketurls.cricket_bowl_odi,
    label: "Cricket Bowler ODI",
    api: "cricket",
  },
  {
    value: cricketurls.cricket_bowl_test,
    label: "Cricket Bowler Test",
    api: "cricket",
  },
  {
    value: cricketurls.cricket_bowl_t20,
    label: "Cricket Bowler T20",
    api: "cricket",
  },
  {
    value: cricketurls.cricket_bat_odi,
    label: "Cricket Batsman ODI",
    api: "cricket",
  },
  {
    value: cricketurls.cricket_bat_test,
    label: "Cricket Batsman Test",
    api: "cricket",
  },
  {
    value: cricketurls.cricket_bat_t20,
    label: "Cricket Batsman T20",
    api: "cricket",
  },
];
