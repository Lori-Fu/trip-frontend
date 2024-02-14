const login = (user) => ({
  type: "LOG_IN",
  payload: {
    user: user,
  },
});

const logout = () => ({
  type: "LOG_OUT",
  payload: {
    user: null,
  },
});

const update = (user) => ({
  type: "UPDATE",
  payload: {
    user: user,
  },
});

export { login, logout, update };
