import {
  compose,
  filter,
  toPairs,
  reduce,
  join,
  map,
  slice,
  split,
  //...
} from "ramda";

// Задание 1
export type Team = { name: string; score: number };

export const getTopName = compose(
  (team) => team?.name,
  reduce<Team, Team | null>(
    (previousValue, currentValue) =>
      (previousValue?.score ?? 0) > currentValue.score
        ? previousValue
        : currentValue,
    null
  )
);

// Задание 2
// eslint-disable-next-line
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = compose(
  (res) => "?" + res,
  join("&"),
  map((pair) => `${pair[0]}=${pair[1].toString()}`),
  filter((pair) => typeof pair[1] !== "object"),
  toPairs
);

// Задание 3
export const parseQs = compose(
  reduce((obj, qsElem) => {
    const [objKey, objVal] = qsElem.split("=");
    return { ...obj, [objKey]: objVal };
  }, {}),
  split("&"),
  slice(1, Infinity)
);
