const initialStae = 0;
const numberIncrementerDecrementer = (state = initialStae, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
      break;
    case "DECREMENT":
      return state - action.payload;
      break;
    default:
      return state;
      break;
  }
};

export default numberIncrementerDecrementer;
