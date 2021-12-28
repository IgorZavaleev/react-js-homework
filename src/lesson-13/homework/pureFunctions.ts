// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string =>
  teams.reduce((previousValue, currentValue) =>
    (previousValue?.score ?? 0) > currentValue.score
      ? previousValue
      : currentValue
  ).name;

// Задание 2
// eslint-disable-next-line
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string =>
  "?" +
  Object.keys(qsObj)
    .filter((objKey) => typeof qsObj[objKey] !== "object")
    .map((objKey) => `${objKey}=${qsObj[objKey].toString()}`)
    .join("&");

// Задание 3

export const parseQs = (qs: string): QsObj =>
  qs
    .slice(1)
    .split("&")
    .reduce((obj, qsElem) => {
      const [objKey, objVal] = qsElem.split("=");
      return { ...obj, [objKey]: objVal };
    }, {});
