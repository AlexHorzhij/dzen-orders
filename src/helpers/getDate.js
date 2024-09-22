const { format } = require("date-fns");
import { ru } from "date-fns/locale";

export const getDate = (date) => {
  const formattedDate = format(date, "dd / MM / y");
  return formattedDate;
};
export const getDateWithTextMonth = (date) => {
  const formattedDate = format(date, "dd / LLL / y", { locale: ru });
  return formattedDate;
};
