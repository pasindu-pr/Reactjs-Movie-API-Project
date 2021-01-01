const initialState = false;

const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_HIDE_SEARCH_BAR":
      return (state = !state);

    default:
      return state;
  }
};

export default searchBarReducer;
