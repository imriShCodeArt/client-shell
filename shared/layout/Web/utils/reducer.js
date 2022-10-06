import * as types from "./vars";

function reducer(state, action) {
  switch (action.type) {
    case types.OPEN_DRAWER:
      return {
        ...state,
        drawer: {
          ...state.drawer,
          ["open"]: true,
        },
      };
    case types.CLOSE_DRAWER:
      return {
        ...state,
        drawer: {
          ...state.drawer,
          ["open"]: false,
        },
      };
    default:
      throw new Error("action type is not valid, choose type from 'vars.js' file");
  }
}
export default reducer;
