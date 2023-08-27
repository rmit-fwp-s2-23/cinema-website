const USER_KEY = "user";

//create an account in the localStorage with the key is the username 
function createAccount(user, joinedDate) {
  user.date = joinedDate;
  localStorage.setItem(user.username, JSON.stringify(user));
}

//check if registered email is exist or not
function checkValidEmail(email) {
  for (let i = 0; i < localStorage.length; i++) {
    const data = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (email === data.email) {
      return false;
    }
  }
  return true;
}

//check if account is exist or not (used in log in page)
function verifyUser(username, password) {
  if (localStorage.getItem(username) !== null) {
    const user = JSON.parse(localStorage.getItem(username));
    if (username === user.username && password === user.password) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      return true;
    }
  }
  return false;
}

//get all the information of current account
function getUser() {
  const data = localStorage.getItem(USER_KEY);
  return JSON.parse(data);
}

//after logginng in, set that account to the user key in local storage
function setUser(data) {
  const user = JSON.parse(localStorage.getItem(USER_KEY));
  createAccount(data, data.date);
  deleteAccount(user.username);
  localStorage.setItem(USER_KEY, JSON.stringify(data));
}

//remove user key after logging out (used in log out function)
function removeUser() {
  localStorage.removeItem(USER_KEY);
}

//delete the account (used in delete function)
function deleteAccount(user) {
  localStorage.removeItem(user.username);
}
export {
  verifyUser,
  getUser,
  createAccount,
  setUser,
  removeUser,
  deleteAccount,
  checkValidEmail,
};
