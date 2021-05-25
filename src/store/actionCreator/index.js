export const deposit = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const take = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "take",
      payload: amount,
    });
  };
};
