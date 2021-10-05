type Settings = {
  fieldSize: [number, number];
};

export const getSettings = (): Settings => {
  return {
    fieldSize: [5, 5],
  };
};
