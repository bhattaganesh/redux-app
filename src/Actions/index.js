export const incrementer = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decrementer = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};
