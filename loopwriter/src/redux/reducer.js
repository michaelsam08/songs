const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CARD":
      state.rows.push(action.value);
      break;
    default:
      break;
  }
  return state;
};

export default reducer;
