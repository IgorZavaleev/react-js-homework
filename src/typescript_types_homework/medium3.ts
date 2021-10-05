type FIXME = UserOrderState[];

const userOrderStates = ["initial", "inWork", "fulfilled"] as const;
const nonUserOrderStates = ["buyingSupplies", "producing"] as const;

type UserOrderState = typeof userOrderStates[number];
type NonUserOrderStates = typeof nonUserOrderStates[number];

type OrderState = UserOrderState | NonUserOrderStates;

function isUserOrderState(x: any): x is UserOrderState {
  return x in userOrderStates;
}

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): FIXME =>
  (orderStates as UserOrderState[]).filter((state) => isUserOrderState(state));
