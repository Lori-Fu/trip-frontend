export const checkUsername = (username) => {
  if (!username || typeof username != "string" || username.trim() == "") {
    throw new Error("Username should not be empty");
  }
  username = username.trim();
  if (username.length < 6 || username.length > 15) {
    throw new Error("Username should be 6-15 characters long");
  }
  if (!/^([A-Za-z0-9]){6,15}$/.test(username)) {
    throw new Error("Username should only be consist of letters and numbers");
  }
  return username.toLowerCase();
};

export const checkPassword = (password) => {
  if (!password || typeof password != "string" || password.trim() == "") {
    throw new Error("Password should not be empty");
  }
  password = password.trim();
  if (password.length < 6 || password.length > 15) {
    throw new Error("Password should be 6-15 characters long");
  }
  //   if (
  //     !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{6,}$/.test(
  //       password
  //     )
  if (
    !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@.#$!%*?&^]).{6,15}$/.test(
      password
    )
  )
    throw new Error(
      "At least one uppercase letter, one lowercase, one special symbol, one number and 6-15 characters"
    );
  return password;
};

export const checkPasswordConfirm = (a, b) => {
  if (!a || !b) throw new Error("Password does not match");
  if (typeof a != "string" || typeof b != "string")
    throw new Error("Password does not match");
  a = a.trim();
  b = b.trim();
  if (a != b) {
    throw new Error("Password does not match");
  }
};
