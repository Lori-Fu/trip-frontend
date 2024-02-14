const initalState = { user: null };
let copyState;
let user;

const reducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOG_IN":
      user = payload.user;
      copyState = initalState;
      return { ...copyState, user };

    case "LOG_OUT":
      return { user: null };

    // case "UPDATE":
    //   copyState = state;
    //   user = payload.user;
    //   if (user.expire_time > copyState.expire_time) {
    //     return { ...user, expire_time: user.expire_time };
    //   }
    //   return copyState;

    default:
      return state;
  }
};

export default reducer;
