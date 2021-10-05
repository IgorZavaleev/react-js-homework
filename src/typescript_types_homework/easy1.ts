// Задание первого уровня 1
// В функцию приходит массив состояний заказа и фильтруется
// Нужно заменить FIXME на тип который вычисляется на освове OrderState

type FIXME = UserOrderState[];

const userOrderStates = ["initial", "inWork", "fulfilled"] as const;
const nonUserOrderStates = ["buyingSupplies", "producing"] as const;

type UserOrderState = typeof userOrderStates[number];
type NonUserOrderStates = typeof nonUserOrderStates[number];

type OrderState = UserOrderState | NonUserOrderStates;

export const getUserOrderStates = (orderStates: OrderState[]): FIXME => {
  const filteredStates = [] as FIXME;
  orderStates.forEach((element) => {
    if (element in userOrderStates) {
      filteredStates.push(element as UserOrderState);
    }
  });
  return filteredStates;
};
